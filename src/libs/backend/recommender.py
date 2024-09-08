from flask import Flask, request, jsonify, send_from_directory
import pandas as pd
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.metrics.pairwise import cosine_similarity
import firebase_admin
from firebase_admin import credentials, firestore
import os

app = Flask(__name__)

# Initialize Firebase
cred = credentials.Certificate('scavengerhuntai-firebase-adminsdk-drvtm-dfb79578f2.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

@app.route('/recommend', methods=['POST'])
def recommend():
    try:
        # Reference to the collection where influencer and business data is stored
        collection_ref = db.collection('users')
        docs = collection_ref.stream()

        # Lists to hold formatted data
        influencers_data = []
        businesses_data = []

        # Loop through the documents and format the data
        for doc in docs:
            data = doc.to_dict()
            survey_data = data.get('surveyData')

            if survey_data:
                if data.get('influencer') == True:
                    formatted_influencer_data = {
                        'influencer_id': doc.id,
                        'genre': survey_data.get('genre'),
                        'platform': 'Instagram',
                        'followers': int(survey_data.get('followerCount', 0)),
                        'engagement_rate': float(survey_data.get('engagementRate', 0)) / 100,
                        'expected_marketing_budget': int(survey_data.get('compensation', 0))
                    }
                    influencers_data.append(formatted_influencer_data)
                else:
                    formatted_business_data = {
                        'business_id': doc.id,
                        'genre': survey_data.get('genre'),
                        'platform': 'Instagram',
                        'followers': int(survey_data.get('followerCount', 0)),
                        'engagement_rate': float(survey_data.get('engagementRate', 0)) / 100,
                        'expected_marketing_budget': int(survey_data.get('compensation', 0))
                    }
                    businesses_data.append(formatted_business_data)

        # Create DataFrames
        df_influencers = pd.DataFrame(influencers_data)
        df_businesses = pd.DataFrame(businesses_data)

        # Prepare features and compute similarity matrix
        combined_df = pd.concat([
            df_influencers[['genre', 'platform']],
            df_businesses[['genre']].assign(platform='Unknown')
        ], ignore_index=True)

        encoder = OneHotEncoder(sparse_output=False, drop='first')
        encoder.fit(combined_df[['genre', 'platform']])

        encoded_influencer_features = encoder.transform(df_influencers[['genre', 'platform']])
        encoded_business_features = encoder.transform(df_businesses[['genre']].assign(platform='Unknown'))

        scaler = StandardScaler()
        scaled_influencer_followers = scaler.fit_transform(df_influencers[['followers']])
        scaled_influencer_engagement = scaler.fit_transform(df_influencers[['engagement_rate']])
        scaled_influencer_budget = scaler.fit_transform(df_influencers[['expected_marketing_budget']])
        scaled_business_budget = scaler.fit_transform(df_businesses[['expected_marketing_budget']])

        influencer_features_df = pd.DataFrame(
            encoded_influencer_features,
            columns=encoder.get_feature_names_out(['genre', 'platform'])
        )
        influencer_features_df['scaled_followers'] = scaled_influencer_followers
        influencer_features_df['scaled_engagement_rate'] = scaled_influencer_engagement
        influencer_features_df['scaled_expected_marketing_budget'] = scaled_influencer_budget

        business_features_df = pd.DataFrame(
            encoded_business_features,
            columns=encoder.get_feature_names_out(['genre', 'platform'])
        )
        business_features_df['scaled_expected_marketing_budget'] = scaled_business_budget

        all_columns = set(influencer_features_df.columns).union(set(business_features_df.columns))
        influencer_features_df = influencer_features_df.reindex(columns=all_columns, fill_value=0)
        business_features_df = business_features_df.reindex(columns=all_columns, fill_value=0)

        similarity_matrix = cosine_similarity(business_features_df, influencer_features_df)

        def recommend_influencers(business_index, top_n=2):
            similarity_scores = similarity_matrix[business_index]
            recommended_indices = similarity_scores.argsort()[-top_n:][::-1]
            return recommended_indices

        business_index = 0
        recommendations = recommend_influencers(business_index)
        recommended_influencer_ids = df_influencers.iloc[recommendations]['influencer_id'].tolist()

        business_id = str(df_businesses.iloc[business_index]['business_id'])
        recommendations_ref = db.collection('business_recommendations').document(business_id)
        recommendations_ref.set({
            'recommended_influencers': recommended_influencer_ids
        })

        return jsonify({'status': 'success', 'recommended_influencers': recommended_influencer_ids})

    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

if __name__ == '__main__':
    app.run(debug=True)

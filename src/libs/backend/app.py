from flask import Flask, request, jsonify
from recommender import generate_recommendations

app = Flask(__name__)

@app.route('/recommend', methods=['POST'])
def recommend():
    # Assuming you have logic to get necessary data from the request
    recommendations = generate_recommendations()
    return jsonify(recommendations)

if __name__ == '__main__':
    app.run(debug=True)
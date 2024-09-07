import { firestore } from "./config"; 
import { doc, setDoc } from "firebase/firestore";

export const setUserSurveyData = async (userId: string, surveyData: any) => {
    try {
        await setDoc(
            doc(firestore, "users", userId),
            {
                surveyData,
                surveyCompleted: true,
            },
            { merge: true },
        );
        console.log("Survey data successfully saved!");
    } catch (e) {
        console.error("Error saving survey:", e);
    }
};

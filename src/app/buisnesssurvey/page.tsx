import { Metadata } from "next";
import BuisnessSurvey from "@/libs/pages/BuisnessSurvey";

export const metadata: Metadata = {
    title: "Buisness Survey | BrandSync",
};
export default function InfluencerSurveyPage() {
    return <BuisnessSurvey />;
}

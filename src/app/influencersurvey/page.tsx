import { Metadata } from "next";
import InfluencerSurvey from "@/libs/pages/InfluencerSurvey";

export const metadata: Metadata = {
    title: "Survey | BrandSync",
};
export default function InfluencerSurveyPage() {
    return <InfluencerSurvey />;
}

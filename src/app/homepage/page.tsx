import { Metadata } from "next";
import HomePage from "@/libs/pages/Homepage";
import { Header } from "@/libs/components/core/Header";

export const metadata: Metadata = {
    title: "Dashboard | BrandSync",
};
export default function InfluencerSurveyPage() {

    return(
        <>
        <Header/>
        <HomePage/>        
        </>

    );
}

import { Metadata } from "next";
import Homepage from "@/libs/pages/Homepage";
import { Header } from "@/libs/components/core/Header";
import HomePage from "@/libs/pages/Homepage";

export const metadata: Metadata = {
    title: "DashBoard | BrandSync",
};
export default function LogInPage(){
    return  (
        <>
        <Header/>
        <HomePage/>
        </>


    );
}
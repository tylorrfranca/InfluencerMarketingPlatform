import { Metadata } from "next";
import LogIn from "@/libs/pages/LogIn";

export const metadata: Metadata = {
    title: "Log In | BrandSync",
};
export default function LogInPage(){
    return <LogIn/>
}
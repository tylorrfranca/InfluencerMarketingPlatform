import { Metadata } from "next";
import SignUp from "@/libs/pages/SignUp";

export const metadata: Metadata = {
    title: "Sign Up | BrandSync",
};
export default function SignUpPage(){
    return <SignUp/>
}
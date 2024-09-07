import { Metadata } from "next";
import BusinessQuery from "@/libs/pages/BusinessQuery";

export const metadata: Metadata = {
    title: "Business Query | BrandSync",
};

export default function BusinessQueryPage() {
    return <BusinessQuery />;
}

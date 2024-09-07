import { Metadata } from "next";
import BusinessDashboard from "@/libs/pages/BusinessDashboard";

export const metadata: Metadata = {
    title: "Business Dashboard | BrandSync",
};

export default function BusinessDashboardPage() {
    return <BusinessDashboard />;
}

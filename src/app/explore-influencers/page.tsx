import { Metadata } from "next";
import ExploreInfluencers from "@/libs/pages/ExploreInfluencers";

export const metadata: Metadata = {
    title: "Explore Influencers | BrandSync",
};

export default function ExploreInfluencersPage() {
    return <ExploreInfluencers />;
}

"use client";
import {
    Card,
    CardContent,
    CardHeader,
    Typography,
    Chip,
    Box,
    Container,
    Stack,
    Link,
    Button,
} from "@mui/material";
import { Globe, Target, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation

export default function BusinessDashboard() {
    const router = useRouter(); // useRouter for navigation

    const businessData = {
        name: "TechGadgets Inc.",
        website: "https://techgadgets.com",
        niche: "Consumer Electronics",
        productTypes: ["Smartphones", "Laptops", "Wearables"],
        targetAudience: {
            age: "18-35",
            location: "United States, Canada, UK",
            interests: ["Technology", "Gaming", "Fitness"],
        },
    };

    const handleExploreInfluencers = () => {
        router.push("/explore-influencers"); // Navigate to explore-influencers page
    };

    return (
        <Box
            sx={{
                width: "100vw",
                height: "110vh",
                backgroundColor: "#2A263E", // Dark background color for the full view
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: 2,
            }}>
            <Container
                sx={{
                    width: "100vw",
                    height: "1200px", // Optional: Set a max-width to prevent overly wide content
                }}>
                <Box
                    fontSize="xxx-large"
                    fontWeight="bold"
                    sx={{
                        background: "linear-gradient(90deg, #F1755F, #F15F9A)", // Gradient text color
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                        marginBottom: 4,
                        textAlign: "center",
                    }}>
                    Business Dashboard
                </Box>

                <Box
                    sx={{
                        width: "100%", // Full width for the box
                        padding: 2, // Padding around the cards
                        background: "linear-gradient(90deg, #F1755F, #F15F9A)", // Background color for the box
                        borderRadius: 2, // Rounded corners for the box
                        boxShadow: 3, // Optional: Add shadow for a card-like effect
                    }}>
                    <Stack
                        spacing={4}
                        direction={{ xs: "column", md: "row" }}
                        sx={{ width: "100%" }}>
                        <Card
                            sx={{
                                flex: 1,
                                minWidth: 0,
                                backgroundColor: "#2A263E", // Background color for the card
                            }}>
                            <CardHeader
                                title={
                                    <Typography
                                        variant="h5"
                                        sx={{ color: "black" }}>
                                        Business Information
                                    </Typography>
                                }
                                subheader={
                                    <Typography
                                        variant="subtitle2"
                                        sx={{ color: "black" }}>
                                        Overview of your brand and products
                                    </Typography>
                                }
                                sx={{ backgroundColor: "#E0E0E0" }} // Header background color
                            />
                            <CardContent>
                                <Box sx={{ mb: 2 }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}>
                                        <Globe
                                            size={20}
                                            style={{
                                                marginRight: 8,
                                                color: "#9e9e9e",
                                            }}
                                        />
                                        <Link
                                            href={businessData.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            variant="body2"
                                            sx={{ color: "white" }}>
                                            {businessData.website}
                                        </Link>
                                    </Box>
                                </Box>
                                <Box sx={{ mb: 2 }}>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        gutterBottom
                                        sx={{ color: "white" }}>
                                        Niche: {businessData.niche}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        gutterBottom
                                        sx={{ color: "white" }}>
                                        Product Types
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: 1,
                                        }}>
                                        {businessData.productTypes.map(
                                            (product, index) => (
                                                <Chip
                                                    key={index}
                                                    label={
                                                        <Box
                                                            sx={{
                                                                display: "flex",
                                                                alignItems:
                                                                    "center",
                                                            }}>
                                                            <ShoppingBag
                                                                size={16}
                                                                style={{
                                                                    marginRight: 4,
                                                                    color: "white",
                                                                }}
                                                            />
                                                            {product}
                                                        </Box>
                                                    }
                                                    sx={{
                                                        color: "white",
                                                        borderColor: "white",
                                                    }}
                                                />
                                            ),
                                        )}
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>

                        <Card
                            sx={{
                                flex: 1,
                                minWidth: 0,
                                backgroundColor: "#2A263E", // Background color for the card
                            }}>
                            <CardHeader
                                title={
                                    <Typography
                                        variant="h5"
                                        sx={{ color: "black" }}>
                                        Target Audience
                                    </Typography>
                                }
                                subheader={
                                    <Typography
                                        variant="subtitle2"
                                        sx={{ color: "black" }}>
                                        Demographics and interests of your ideal
                                        customers
                                    </Typography>
                                }
                                sx={{ backgroundColor: "#E0E0E0" }} // Header background color
                            />
                            <CardContent>
                                <Box sx={{ mb: 2 }}>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        gutterBottom
                                        sx={{ color: "white" }}>
                                        Age Range :{" "}
                                        {businessData.targetAudience.age}
                                    </Typography>
                                </Box>
                                <Box sx={{ mb: 2 }}>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        gutterBottom
                                        sx={{ color: "white" }}>
                                        Location :{" "}
                                        {businessData.targetAudience.location}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        gutterBottom
                                        sx={{ color: "white" }}>
                                        Interests
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: 1,
                                        }}>
                                        {businessData.targetAudience.interests.map(
                                            (interest, index) => (
                                                <Chip
                                                    key={index}
                                                    label={
                                                        <Box
                                                            sx={{
                                                                display: "flex",
                                                                alignItems:
                                                                    "center",
                                                            }}>
                                                            <Target
                                                                size={16}
                                                                style={{
                                                                    marginRight: 4,
                                                                    color: "white",
                                                                }}
                                                            />
                                                            {interest}
                                                        </Box>
                                                    }
                                                    sx={{
                                                        color: "white",
                                                        borderColor: "white",
                                                    }}
                                                />
                                            ),
                                        )}
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Stack>

                    {/* New Explore Influencers Button */}
                    <Box sx={{ textAlign: "center", marginTop: 4 }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleExploreInfluencers}
                            sx={{
                                background:
                                    "linear-gradient(90deg, #F1755F, #F15F9A)",
                                color: "#fff",
                                padding: "12px 24px",
                                borderRadius: "8px",
                                fontWeight: "bold",
                            }}>
                            Explore Influencers
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

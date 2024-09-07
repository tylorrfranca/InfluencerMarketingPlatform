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
} from "@mui/material";
import { Globe, Target, ShoppingBag } from "lucide-react";

export default function BusinessDashboard() {
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

    return (
        <Box
            sx={{
                backgroundColor: "#2A263E", // Dark background for the entire screen
                minHeight: "100vh", // Full viewport height
                width: "100%", // Full width
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 3,
                boxSizing: "border-box", // Includes padding in width/height calculations
            }}>
            <Container>
                <Box
                    fontSize="xxx-large"
                    fontWeight="bold"
                    sx={{
                        background: "linear-gradient(90deg, #F1755F, #F15F9A)",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                        marginBottom: 4,
                    }}>
                    Business Dashboard
                </Box>

                <Stack
                    spacing={4}
                    direction={{ xs: "column", md: "row" }}
                    sx={{ width: "100%" }}>
                    <Card
                        sx={{
                            flex: 1,
                            minWidth: 0,
                            backgroundColor: "#FFFFFF", // Background color inside the card
                            padding: 2,
                        }}>
                        <CardHeader
                            title={
                                <Typography variant="h5">
                                    Business Information
                                </Typography>
                            }
                            subheader={
                                <Typography variant="subtitle2">
                                    Overview of your brand and products
                                </Typography>
                            }
                            sx={{ backgroundColor: "#F5F5F5" }}
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
                                        color="primary">
                                        {businessData.website}
                                    </Link>
                                </Box>
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <Typography
                                    variant="h6"
                                    component="h3"
                                    gutterBottom>
                                    Niche
                                </Typography>
                                <Typography>{businessData.niche}</Typography>
                            </Box>
                            <Box>
                                <Typography
                                    variant="h6"
                                    component="h3"
                                    gutterBottom>
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
                                                            }}
                                                        />
                                                        {product}
                                                    </Box>
                                                }
                                                color="primary"
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
                            backgroundColor: "#FFFFFF", // Background color inside the card
                            padding: 2,
                        }}>
                        <CardHeader
                            title={
                                <Typography variant="h5">
                                    Target Audience
                                </Typography>
                            }
                            subheader={
                                <Typography variant="subtitle2">
                                    Demographics and interests of your ideal
                                    customers
                                </Typography>
                            }
                            sx={{ backgroundColor: "#F5F5F5" }}
                        />
                        <CardContent>
                            <Box sx={{ mb: 2 }}>
                                <Typography
                                    variant="h6"
                                    component="h3"
                                    gutterBottom>
                                    Age Range
                                </Typography>
                                <Typography>
                                    {businessData.targetAudience.age}
                                </Typography>
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <Typography
                                    variant="h6"
                                    component="h3"
                                    gutterBottom>
                                    Location
                                </Typography>
                                <Typography>
                                    {businessData.targetAudience.location}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    variant="h6"
                                    component="h3"
                                    gutterBottom>
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
                                                            }}
                                                        />
                                                        {interest}
                                                    </Box>
                                                }
                                                variant="outlined"
                                            />
                                        ),
                                    )}
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Stack>
            </Container>
        </Box>
    );
}

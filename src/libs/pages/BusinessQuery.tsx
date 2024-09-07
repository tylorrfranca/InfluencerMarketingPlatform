"use client";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { getAuth } from "firebase/auth";
// import { setBusinessQueryData } from "../firebase/firestoreService";

export default function BusinessQuery() {
    const [website, setWebsite] = useState<string>("");
    const [niche, setNiche] = useState<string>("");
    const [targetAudience, setTargetAudience] = useState<string>("");
    const [productCategories, setProductCategories] = useState<string>("");
    const [budget, setBudget] = useState<string>("");

    const router = useRouter();
    // const auth = getAuth();

    const handleSubmit = async () => {
        if (
            !website ||
            !niche ||
            !targetAudience ||
            !productCategories ||
            !budget
        ) {
            alert("Please fill in all fields.");
            return;
        }

        // const user = auth.currentUser;
        // if (user) {
        try {
            const queryData = {
                website,
                niche,
                targetAudience,
                productCategories,
                budget,
            };

            // Simulating a successful data submission
            console.log("Data submitted:", queryData);
            router.push("/businessdashboard");
        } catch (error) {
            console.error("Error saving query:", error);
        }
        // } else {
        //     alert("User not authenticated. Please log in.");
        // }
    };

    return (
        <Box
            width="100%"
            height="100vh"
            sx={{
                backgroundColor: "#2A263E",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: 4,
            }}>
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
                BrandSync
            </Box>
            <TextField
                label="Website"
                variant="outlined"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                sx={{
                    backgroundColor: "white",
                    marginBottom: 2,
                    width: "300px",
                }}
            />

            <TextField
                label="Niche"
                variant="outlined"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                sx={{
                    backgroundColor: "white",
                    marginBottom: 2,
                    width: "300px",
                }}
            />

            <TextField
                label="Target Audience"
                variant="outlined"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                sx={{
                    backgroundColor: "white",
                    marginBottom: 2,
                    width: "300px",
                }}
            />

            <TextField
                label="Product Categories"
                variant="outlined"
                value={productCategories}
                onChange={(e) => setProductCategories(e.target.value)}
                sx={{
                    backgroundColor: "white",
                    marginBottom: 2,
                    width: "300px",
                }}
            />

            <TextField
                label="Budget"
                variant="outlined"
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                sx={{
                    backgroundColor: "white",
                    marginBottom: 2,
                    width: "300px",
                }}
            />

            <Button
                onClick={handleSubmit}
                sx={{
                    background: "linear-gradient(90deg, #F1755F, #F15F9A)",
                    color: "white",
                    width: "300px",
                    marginTop: 2,
                    "&:hover": {
                        background: "linear-gradient(90deg, #F15F9A, #F1755F)",
                    },
                }}>
                Submit
            </Button>
        </Box>
    );
}

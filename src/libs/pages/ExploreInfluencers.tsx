"use client";
import { useState, ChangeEvent } from "react";
import {
    Button,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Box,
    Typography,
    Card,
    CardContent,
    CardHeader,
    CardActions,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from "@mui/material";

type Influencer = {
    id: string;
    name: string;
    followers: number;
    niche: string;
    engagement: number;
    videoUrl: string;
};

export default function ExploreInfluencers() {
    const [niche, setNiche] = useState("");
    const [targetAudience, setTargetAudience] = useState("");
    const [budget, setBudget] = useState("");
    const [promotionType, setPromotionType] = useState("");
    const [influencers, setInfluencers] = useState<Influencer[]>([]);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
    const [emailContent, setEmailContent] = useState<string | null>(null);
    const [selectedInfluencer, setSelectedInfluencer] =
        useState<Influencer | null>(null);

    const handleSearch = () => {
        // mock data
        const mockInfluencers: Influencer[] = [
            {
                id: "1",
                name: "Alice",
                followers: 100000,
                niche: "Beauty",
                engagement: 3.5,
                videoUrl: "https://example.com/video1",
            },
            {
                id: "2",
                name: "Bob",
                followers: 50000,
                niche: "Tech",
                engagement: 4.2,
                videoUrl: "https://example.com/video2",
            },
            {
                id: "3",
                name: "Charlie",
                followers: 200000,
                niche: "Fashion",
                engagement: 2.8,
                videoUrl: "https://example.com/video3",
            },
            {
                id: "4",
                name: "Diana",
                followers: 75000,
                niche: "Fitness",
                engagement: 5.1,
                videoUrl: "https://example.com/video4",
            },
        ];
        setInfluencers(mockInfluencers);
    };

    const generateEmail = (influencer: Influencer) => {
        const email = `Subject: Collaboration Opportunity with ${influencer.name}

Dear ${influencer.name},

We at [Your Company Name] are excited about your work in the ${influencer.niche} niche. We would love to collaborate with you on promoting our latest products.

With your audience of ${influencer.followers.toLocaleString()} followers and impressive engagement rate of ${influencer.engagement}%, we believe this could be a mutually beneficial partnership.

Looking forward to hearing from you!

Best regards,
[Your Name]
[Your Company Name]
`;

        setSelectedInfluencer(influencer);
        setEmailContent(email);
    };

    const handleClose = () => {
        setEmailContent(null);
        setSelectedInfluencer(null);
    };

    const sortedInfluencers = [...influencers].sort((a, b) =>
        sortOrder === "asc"
            ? a.followers - b.followers
            : b.followers - a.followers,
    );

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: 1200,
                margin: "auto",
                padding: 2,
            }}>
            <Typography
                variant="h4"
                gutterBottom>
                Explore Influencers
            </Typography>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        md: "1fr 1fr",
                        lg: "1fr 1fr 1fr 1fr",
                    },
                    gap: 2,
                    marginBottom: 4,
                }}>
                <FormControl
                    variant="outlined"
                    fullWidth>
                    <InputLabel htmlFor="niche">Niche</InputLabel>
                    <TextField
                        id="niche"
                        value={niche}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setNiche(e.target.value)
                        }
                        placeholder="e.g. Beauty, Tech"
                        variant="outlined"
                        label="Niche"
                    />
                </FormControl>
                <FormControl
                    variant="outlined"
                    fullWidth>
                    <InputLabel htmlFor="targetAudience">
                        Target Audience
                    </InputLabel>
                    <TextField
                        id="targetAudience"
                        value={targetAudience}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setTargetAudience(e.target.value)
                        }
                        placeholder="e.g. 18-24, US"
                        variant="outlined"
                        label="Target Audience"
                    />
                </FormControl>
                <FormControl
                    variant="outlined"
                    fullWidth>
                    <InputLabel htmlFor="budget">Budget</InputLabel>
                    <TextField
                        id="budget"
                        value={budget}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setBudget(e.target.value)
                        }
                        placeholder="e.g. $500-$1000"
                        variant="outlined"
                        label="Budget"
                    />
                </FormControl>
                <FormControl
                    variant="outlined"
                    fullWidth>
                    <InputLabel htmlFor="promotionType">
                        Promotion Type
                    </InputLabel>
                    <Select
                        id="promotionType"
                        value={promotionType}
                        onChange={(e) =>
                            setPromotionType(e.target.value as string)
                        }
                        label="Promotion Type">
                        <MenuItem value="product">Product Giveaway</MenuItem>
                        <MenuItem value="sponsored">Sponsored Post</MenuItem>
                        <MenuItem value="affiliate">
                            Affiliate Marketing
                        </MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Button
                variant="contained"
                color="primary"
                onClick={handleSearch}
                sx={{ marginBottom: 4 }}>
                Find Influencers
            </Button>

            {influencers.length > 0 && (
                <>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 4,
                        }}>
                        <Typography variant="h6">
                            Matched Influencers
                        </Typography>
                        <FormControl
                            variant="outlined"
                            sx={{ minWidth: 180 }}>
                            <InputLabel htmlFor="sortOrder">
                                Sort by followers
                            </InputLabel>
                            <Select
                                id="sortOrder"
                                value={sortOrder}
                                onChange={(e) =>
                                    setSortOrder(
                                        e.target.value as "asc" | "desc",
                                    )
                                }
                                label="Sort by followers">
                                <MenuItem value="asc">
                                    Followers (Low to High)
                                </MenuItem>
                                <MenuItem value="desc">
                                    Followers (High to Low)
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                md: "1fr 1fr",
                                lg: "1fr 1fr 1fr",
                            },
                            gap: 2,
                        }}>
                        {sortedInfluencers.map((influencer) => (
                            <Card
                                key={influencer.id}
                                sx={{
                                    backgroundColor: "black",
                                    color: "white",
                                }}>
                                <CardHeader
                                    title={influencer.name}
                                    sx={{ backgroundColor: "#3A3A3A" }}
                                />
                                <CardContent>
                                    <Typography variant="body1">
                                        Followers:{" "}
                                        {influencer.followers.toLocaleString()}
                                    </Typography>
                                    <Typography variant="body1">
                                        Niche: {influencer.niche}
                                    </Typography>
                                    <Typography variant="body1">
                                        Engagement Rate: {influencer.engagement}
                                        %
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        variant="outlined"
                                        color="inherit"
                                        href={influencer.videoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        View Sample Video
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() =>
                                            generateEmail(influencer)
                                        }>
                                        Generate Email
                                    </Button>
                                </CardActions>
                            </Card>
                        ))}
                    </Box>
                </>
            )}

            {emailContent && selectedInfluencer && (
                <Dialog
                    open={!!emailContent}
                    onClose={handleClose}
                    aria-labelledby="email-dialog-title">
                    <DialogTitle id="email-dialog-title">
                        Email to {selectedInfluencer.name}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>{emailContent}</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={handleClose}
                            color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </Box>
    );
}

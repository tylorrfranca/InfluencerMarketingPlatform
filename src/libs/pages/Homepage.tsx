'use client';
import React, { useEffect, useState } from 'react';
import { Box, HStack, VStack } from 'panda';
import { Block } from '../components/core/Block';
import Graph02 from '../components/features/Graph02';
import { SideBlock } from '../components/core/SideBlocks';
import LatestPosts from '../components/features/LatestPosts';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './../../libs/firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from './../../libs/firebase/config';

// Define TypeScript interfaces for your user data structure
interface SurveyData {
    name: string,
    compensation: string;
    engagementRate: string;
    followerCount: string;
    genre: string;
    instagramName: string;
}

interface UserData {
    createdAt: Date;
    email: string;
    password: string;
    surveyCompleted: boolean;
    surveyData: SurveyData;
}

const HomePage: React.FC = () => {
    const [isClient, setIsClient] = useState(false);
    const [user, loading] = useAuthState(auth);
    const [userData, setUserData] = useState<UserData | null>(null); // Allow both UserData and null

    // Ensure client-side rendering is complete (set isClient flag)
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Fetch user data from Firestore when the user is authenticated
    useEffect(() => {
        if (user) {
            const fetchUserData = async () => {
                const docRef = doc(firestore, 'users', user.uid); // Replace 'users' with the correct collection name
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data() as UserData;
                    setUserData(data);
                } else {
                    console.log('No such document!');
                }
            };
            fetchUserData();
        }
    }, [user]);

    // Ensure no rendering until client-side hydration is done
    if (!isClient || loading) {
        return null; // No hooks are called inside this condition, just rendering logic
    }

    if (!userData) {
        return <p>Loading user data...</p>;
    }

    return (
        <Box
            width="100%"
            height="98%"
            bgColor="#2A263E"
            display="flex"
            justifyContent="center"
            alignItems="start"
        >
            <VStack gap={50}>
                <Box display="flex" flexDir="row" gap={50}>
                    <Block
                        color={true}
                        title="Followers"
                        info={userData.surveyData.followerCount} // Use data from Firestore
                        Pgrowth="40%"
                        Ngrowth="8k"
                        cirColor={false}
                    />
                    <Block
                        color={true}
                        title="Match Percentage"
                        info="40k"
                        Pgrowth="40%"
                        Ngrowth="8k"
                        cirColor={false}
                    />
                    <Block
                        color={true}
                        title="Accounts Reached"
                        info="40k"
                        Pgrowth="40%"
                        Ngrowth="8k"
                        cirColor={false}
                    />
                </Box>
                <Box display="flex" flexDir="row" gap={50}>
                    <Block
                        color={false}
                        title="Accounts Engagement"
                        info={userData.surveyData.engagementRate} // Use data from Firestore
                        Pgrowth="40%"
                        Ngrowth="8k"
                        cirColor={true}
                    />
                    <Block
                        color={false}
                        title="Total Likes"
                        info="40k"
                        Pgrowth="40%"
                        Ngrowth="8k"
                        cirColor={true}
                    />
                    <Block
                        color={false}
                        title="Total Views"
                        info="40k"
                        Pgrowth="40%"
                        Ngrowth="8k"
                        cirColor={true}
                    />
                </Box>
                <HStack>
                    <Graph02 />
                    <VStack paddingX={10} spaceY={25}>
                        <SideBlock title="Likes" info="5k" />
                        <SideBlock title="Comments" info="5k" />
                        <SideBlock title="Share" info="5k" />
                    </VStack>
                </HStack>
                <Box
                    bgColor="#2A263E"
                    display="flex"
                    justifyContent="center"
                    alignItems="start"
                >
                    <Box>
                        <LatestPosts />
                    </Box>
                </Box>
            </VStack>
        </Box>
    );
};

export default HomePage;

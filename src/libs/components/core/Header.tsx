'use client'
import { Box, HStack } from "panda"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from 'react';
import UserProfileDD from "../features/UserProfileDD";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './../../../libs/firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from './../../../libs/firebase/config';


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


export function Header(){
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


    return(

    
    <Box 
    bg={'#2A263E'}
    display={'flex'}
    flexDir={'row'}
    justifyContent={'space-between'}
    alignItems={'space-between'}
    paddingRight={100}>
        <Link href={'/'}>
            <Image src={'/logo.png'}
            alt="BrandSync"
            width={200}
            height={200}>
            </Image>
        </Link>
        <UserProfileDD>
        {userData.surveyData.name}
        </UserProfileDD>
    </Box>
    );
} 
'use client'

import {auth} from './../libs/firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignUpPage  from "@/libs/pages/SignUp";
import { Box } from "panda";
import HomePage from '@/libs/pages/Homepage';
import { FirstPage } from '@/libs/pages/FirstPage';
import { Header } from '@/libs/components/core/Header';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
    const [user, loading] = useAuthState(auth)
    console.log({user})
    const router = useRouter(); 

    if (!loading && user) {
        return (
        <>
        <Header/>
        <HomePage/>
        </>

        );
    }
    
    if (loading) {
        return <div>Loading...</div>
    }
    
    if (!user) {
        return <FirstPage />
    }
    
    return null;
}

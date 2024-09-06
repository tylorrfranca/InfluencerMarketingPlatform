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

    useEffect(() => {
        if (!loading && user) {
            router.push('/homepage');
        }
    }, [loading, user, router]);
    
    if (loading) {
        return <div>Loading...</div>;  // Ensure the same content is rendered on both server and client during loading
    }
    
    if (!user) {
        return <FirstPage />;  // Render the login/signup page if not authenticated
    }
    
    return null;
}

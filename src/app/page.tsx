'use client'

import {auth} from './../libs/firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignUpPage  from "@/libs/pages/SignUp";
import { Box } from "panda";
import HomePage from '@/libs/pages/Homepage';
import { FirstPage } from '@/libs/pages/FirstPage';
import { Header } from '@/libs/components/core/Header';


export default function Home() {
    const [user] = useAuthState(auth)
    console.log({user})

    if(user){
        return (
        <>
            <Header/>
            <HomePage/>
        </>
        );
    }
    else{
        return (
        <>
            <FirstPage/>
        </>
        );  
    }
}


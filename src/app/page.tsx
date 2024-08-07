'use client'

import {auth} from './../libs/firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignUpPage  from "@/libs/pages/SignUp";
import { Box } from "panda";


export default function Home() {
    const [user] = useAuthState(auth)
    console.log({user})

    if(user){
        return (
        <>
            <Box>
            User Succesfully Logged In!
            </Box>
        </>
        );
    }
    else{
        return (
        <>
            <SignUpPage/>
        </>
        );  
    }
}


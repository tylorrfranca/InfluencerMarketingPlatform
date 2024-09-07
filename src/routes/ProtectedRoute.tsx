import React from 'react'
import {auth} from './../libs/firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Navigate, useLocation} from "react-router-dom"

type Props = {children:React.ReactNode};

const ProtectedRoute = ({children}: Props) => {
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    return user ? (
        <>{children}</>  ) : (
        <Navigate to="/firstpage" state ={{ from: location}} replace />
        )
};

export default ProtectedRoute;
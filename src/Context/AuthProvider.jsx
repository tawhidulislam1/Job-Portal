/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.init';
const GoogleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }
    const loginWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth ,GoogleProvider)
    }
    const logOutUser=() =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])
    const appInfo = {
        user,
        loading,
        createUser,
        logOutUser,
        loginWithGoogle,
        logInUser
    }
    return (
        <AuthContext.Provider value={appInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.init';




export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const googelProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);




    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const nameUpdate = (name, photoURI) => {
        setLoading(true)
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photoURI });
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googelProvider)
    }

    const logOut = () => {
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscibe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscibe();
        }
    }, [])



    const authInfo = {
        user, loading,
        createUser,
        nameUpdate,
        googleSignIn,
        signIn,
        logOut,


    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
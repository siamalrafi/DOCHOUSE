import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { createContext, useState } from 'react';
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

    const nameUpdate = (name) => {
        setLoading(true)
        return updateProfile(auth.currentUser, { displayName: name });
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }



    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googelProvider)
    }




    const authInfo = {
        user,
        createUser,
        nameUpdate,
        googleSignIn,
        signIn,

        
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
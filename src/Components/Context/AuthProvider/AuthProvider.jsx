import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider } from 'firebase/auth';
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



    const userna = {
        name: 'Jone',
        email: 'example@example.com'
    }


    const authInfo = {
        user,
        userna,
        createUser

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
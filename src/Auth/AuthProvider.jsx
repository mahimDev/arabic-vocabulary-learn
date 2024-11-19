import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = (prop = {}) => {
    const { children } = prop || {}
    const googleProvider = new GoogleAuthProvider()
    const [user, SetUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const passwordReset = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            SetUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
        updateUserProfile,
        passwordReset
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
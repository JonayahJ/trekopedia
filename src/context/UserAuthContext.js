import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase.config";

// set user authorization context
const userAuthContext = createContext();

// create provider fx
export function UserAuthContextProvider({children}) {
    // user state
    const [user, setUser] = useState("");

    // signup Fx
    function signup(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    // login Fx
    function login(email, password){
        console.log("Email", email);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Logout Fx
    function logout() {
        return signOut(auth);
    }

    // Google Sign In Fx
    function googleSignIn(){
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider)
    }

    // Set current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <userAuthContext.Provider value={{ user, signup, login, logout, googleSignIn }}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext);
}
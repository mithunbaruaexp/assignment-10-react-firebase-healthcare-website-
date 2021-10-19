import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider  } from "firebase/auth";
import initializeAuthentication from "../pages/Login/firebse/firebase.init";

initializeAuthentication()

const gitHubProvider = new GithubAuthProvider();


const useFirebase =()=>{
    const [user, setUser]=useState({})
    const [isLoading, setIsLoading]= useState(true)

    const auth= getAuth()
   
    const signInUsingGitHub = ()=>{
       return signInWithPopup(auth, gitHubProvider)
    }
    const signInUsingGoogle =()=>{
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth, googleProvider)
        .finally(()=>setIsLoading(false))
    }

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
        return ()=> unsubscribed;
    },[])

    const logOut =()=>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{})
        .finally(setIsLoading(false))
    }
    return{
        user,
        signInUsingGoogle,
        logOut,
        isLoading,
        signInUsingGitHub
    }



}

export default useFirebase;
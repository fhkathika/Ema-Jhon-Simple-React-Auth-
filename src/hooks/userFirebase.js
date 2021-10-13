import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect } from "react/cjs/react.development";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const useFirebase =()=>{
    const [user,setUser]= useState({})

    const auth=getAuth();
     const googleAuthProvider=new GoogleAuthProvider();
      const signInUsingGoogle=()=>{
        return signInWithPopup(auth,googleAuthProvider) 
       
      }
      const logOut=()=>{
        signOut(auth)
        .then(()=>{
            setUser({})        })
      }
      useEffect(()=>{
          onAuthStateChanged(auth,(user)=>{
if(user){
setUser(user)
}
          })
      },[])
      return {
          user,
          signInUsingGoogle,
          logOut
      }
}
export default useFirebase
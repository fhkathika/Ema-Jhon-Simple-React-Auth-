
import firebaseConfig from "./firebase.config"
import {initializeApp}from "firebase/app"

const initializeAuthentication=()=>{

initializeApp(firebaseConfig)
}
export default initializeAuthentication;
/*
// step for Authentication
// ------------------------------------
// step 1: Initial Setup
// 1. firebase:create Project
// 2.create web app 
// 3.get Configuration 
// 4.initialize firebase
// 5.Enable auth method

// step 2: 
// 1.create login Component 
// 2. create register Component
// 3. create route for register and login
// step 3:
// 1.set up sign in Method
// 2.set up sign up Method
// 3.user state 
// 4. added special observer(onAuthStateChanged method)
5.return necesary methods and states from useFirebase
---------------------
step 4: create auth contexr hook (useAuth)
1.create a auth context
2.create context provider
3.set context Provider context value
4. craete useAuth provider
5.create useAuth Hook
-------------------------
step 5:
1.create private route
2.set private route
-----------------------
step 6:
1.after login redirect user to their desired destination
*/
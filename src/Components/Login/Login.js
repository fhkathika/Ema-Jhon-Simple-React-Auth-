import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import   './Login.css'

const Login = () => {
    const {signInUsingGoogle}=useAuth()
    const location=useLocation();
    const history=useHistory()
    const redirect_uri=location.state?.from || '/shop'
    console.log('came from',location.state?.from)
    const handleSignInGoogle=()=>{
     signInUsingGoogle()
     .then(result =>{
        console.log(result.user)
        history.push(redirect_uri)

    })
    }
    return (
        <div className="login-form">
            <div>
                <h2>Log in Form</h2>
                <form >
                    <input type="email" name="" id="" placeholder="Your Email"></input>
                    <br />
                <input type="password" name="" id=""></input>
                    <br />
                    <input type="submit" value="Submit"></input>
                </form>
                <p>new to ema-jhon?
                    <Link to="/register">Create Account</Link>
                </p>
                <div>-------------------or--------------</div>
                <button
                onClick={handleSignInGoogle} 
                className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;
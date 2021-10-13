import React from 'react';
import { Link } from 'react-router-dom';
import "../Login/Login.css"

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Registration Form</h2>
            <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email"></input>
                    <br />
                <input type="password" name="" id=""></input>
                <br />
                <input type="Re-enter password" name="" id=""></input>
                    <br />
                    <input type="submit" value="Submit"></input>
                </form>
               
                <div>-------------------or--------------</div>
                <button className="btn-regular">Google Sign In</button>
                <p>Already have an account?
                    <Link to="/login">Go to Log in</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
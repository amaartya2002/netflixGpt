import React from 'react';
import {useState, useRef} from 'react';
import Header from "./Header";
import { checkvalidate } from "./Validate";
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";// TODO: Add SDKs for Firebase products that you want to use
import { initializeApp } from 'firebase/app';
import { app } from "./Firebase.js"
import { getAnalytics } from "firebase/analytics";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "./Firebase.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { addUser } from './userSlice.js';



const Login = () => {

    const [isSignInForm,setIsSignInForm]=useState("true");
    const [errorMessage,setErrorMessage]=useState(null);
    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const firebaseConfig = {
      apiKey: "AIzaSyD1i5fBchw4DS_8vxTlWsgkGo-4ZrlkEkA",
      authDomain: "netpt-32cfd.firebaseapp.com",
      projectId: "netpt-32cfd",
      storageBucket: "netpt-32cfd.appspot.com",
      messagingSenderId: "554356263243",
      appId: "1:554356263243:web:ef2bf453a3803b5a0600ce",
      measurementId: "G-63RY700T7T"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth();




    const toggleSignInForm = () =>
    {
    setIsSignInForm(!isSignInForm);
};

    const Checkit = () =>
    {
        console.log(email.current.value);
        console.log(password.current.value);
        const message=checkvalidate(email.current.value,password.current.value);
        setErrorMessage(message);

        if(message) {
          return null;
        }

        if(!isSignInForm){
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              const user = userCredential.user;
              updateProfile(user, {
                displayName: name.current.value,
                photoURL: 'https://static.toiimg.com/thumb/msid-50379034,imgsize-39752,width-400,resizemode-4/50379034.jpg'
              }).then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(addUser({ uid, email, displayName, photoURL }));
                navigate('/browse');
              }).catch((error) => {
                setErrorMessage(error.message);
              });
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorMessage + '-' + errorCode);
            });
        }

        else{
          signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user);
              navigate("/browse");
              
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errormessage = error.message;
              setErrorMessage(errormessage + "-" + errorCode);
            });
          
        }


    };
  return (
    <>
    
    
    <Header/>
    <div class="head">
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
    
    
    </div>
    <form onSubmit={(e) => e.preventDefault()}class="signin">
        <div class="sign-text">{isSignInForm ? "Sign In" : "Sign Up"}</div>
        <div>
        <input ref={email} type="text" class="email" placeholder="Email Address" /> 
        </div>
        <div>
        {!isSignInForm && (<input ref={name} type="text" class="pw" placeholder="Full Name"></input>)}
        </div>
        <div>
        <input ref={password} type="password" class="pw" placeholder="password" />
        </div>
        <p class="errmess">{errorMessage}</p>
        <button class="sign" onClick={Checkit}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p class="newsign">{isSignInForm ? "New to Netflix?" : "Already have an account?"}</p> <p class="newsignlink" onClick={toggleSignInForm}>{isSignInForm ? "Sign Up Now" : "Sign in   "}</p>
    </form>
    </> 
  )
}

export default Login;
import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { formValidation } from "../utils/FormValidate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { user_profilepic } from "../utils/constants";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true),
    [errorMessage, setErrorMessage] = useState(null),
  
    dispatch = useDispatch();

  const email = useRef(null),
    password = useRef(null),
    name = useRef(null);

  const toggleSignInForm = () => {
      setIsSignInForm(!isSignInForm);
    },
    handleButtonClick = () => {
      const message = formValidation(
        email.current.value,
        password.current.value
        // name.current.value
      );
      setErrorMessage(message);
      if (message) return;
      // sign in or sign up logic
      if (!isSignInForm) {
        // sign up logic
        // create a new user
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            // update the userprofile with the name and profile picture
            updateProfile(auth.currentUser, {
              displayName: name.current.value,
              photoURL: user_profilepic,
            })
              .then(() => {
                // Profile updated!
                // if user is successfully logged in navigate to browse page
                // when the new user is created and we update the profile then we need to update the store --do this we need to dispatch the action
                const { uid, email, displayName, photoURL } = auth.currentUser; //get the updated user data from auth
                dispatch(addUser({ uid, email, displayName, photoURL }));
                // navigate("/browse");-this is no longer needed as we are using the onAuthStateChanged to navigate to the browse page inside the header component
              })
              .catch((error) => {
                // An error occurred
                console.log(error);
                setErrorMessage(error.message);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " : " + errorMessage);
            console.log(errorMessage);
          });
      } else {
        // sign in logic
        // login the user

        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            console.log(user);

            // navigate("/browse");-this is no longer needed as we are using the onAuthStateChanged to navigate to the browse page inside the header component
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " : " + errorMessage);
            console.log(errorMessage);
          });
      }
    },
    isSignInSignUpLabel = isSignInForm ? "Sign In" : "Sign Up";

  return (
    <div>
      <Header />

      <div className="absolute">
        <img src={BG_URL} alt="background-image" />
      </div>
      {/* create a login form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-4/12 bg-black mx-auto right-0 left-0 my-36 p-12 rounded-lg bg-opacity-70"
      >
        <h1 className="font-bold text-3xl py-4 text-white ">
          {isSignInSignUpLabel}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-2 my-4 w-full rounded bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          ref={email}
          className="p-2 my-4 w-full rounded bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="p-2 my-4 w-full rounded bg-gray-700"
        />
        <p className="font-bold text-red-600">{errorMessage}</p>
        <button
          className="bg-red-600 text-white p-4 my-6 w-full rounded"
          onClick={handleButtonClick}
        >
          {isSignInSignUpLabel}
        </button>
        <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix ? Sign Up now."
            : "Already Registered ? Sign In now."}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;

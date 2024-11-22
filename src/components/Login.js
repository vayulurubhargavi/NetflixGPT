import React from 'react'
import Header from './Header';
import { useState } from 'react';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true),
     toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
        },
     isSignInSignUpLabel=isSignInForm? "Sign In":"Sign Up"


  return (
      <div >
          <Header />
          <div className='absolute px-8 py-4 bg-gradient-to-b from-black w-full'>       
          <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='netflix-logo'/>
    </div>
          <div className='absolute' >
              <img src='https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/98533523-112a-488c-a711-d0517920cdb5/US-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_31571788-f022-43e9-904f-9ad7e6d57bde_small.jpg' alt='background-image' />
          </div>
          {/* create a login form */}
          <form className='absolute w-4/12 bg-black mx-auto right-0 left-0 my-36 p-12 rounded-lg bg-opacity-70'>
              <h1 className='font-bold text-3xl py-4 text-white '>{isSignInSignUpLabel}</h1>
              {!isSignInForm &&    <input type='text' placeholder='Full Name' className='p-2 my-4 w-full rounded bg-gray-700' />}
              <input type='text' placeholder='Email' className='p-2 my-4 w-full rounded bg-gray-700' />
              <input type='password' placeholder='Password' className='p-2 my-4 w-full rounded bg-gray-700' />
              <button className='bg-red-600 text-white p-4 my-6 w-full rounded' >{isSignInSignUpLabel}</button>
              <p className='text-white cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix ? Sign Up now." :"Already Registered ? Sign In now."} </p>
          </form>
      </div>
  )
}

export default Login;




import React from 'react'
import signInImage from "../../public/signin-g.svg"

export default function SignIn() {


  return (
    <div className='w-8/12 mx-auto grid grid-cols-2' >
        <img src={signInImage} alt="" />
        

        <div className='mt-10'>
            <p className='text-3xl font-semibold'>Sign in to FreshCart</p>
            <p className='opacity-60'>Welcome back to FreshCart! Enter your email to get started.</p>
            <input
             type="email"
             placeholder="Email"
             className=" mt-8 border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-green-500 transition duration-200"
        />
        <input type="password"
        placeholder='Password'
        className=" mt-8 border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-green-500 transition duration-200"
         />

         <div className='grid grid-cols-2 opacity-60 mt-2'>
            <div className= "flex items-center gap-2">
                <input type="checkbox" 
                id='rememberme'
                />
            <p>Remember me</p>
            </div>
            <p>Forgot password <span className='text-green-500'>Reset It</span></p>
         </div>

         <button type="submit"
            className=" mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200">
            Sign In
            </button>
        <p className='text-xs mt-4 opacity-70 '>Don’t have an account? <span className='text-green-600'>Sign Up</span></p>



        </div>
    </div>
  )
}

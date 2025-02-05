import React from 'react'
import signUpImage from "../../public/signup-g.svg"

export default function SignUp() {
  return (
    <div className='w-8/12 mx-auto grid grid-cols-2' >
        <img src={signUpImage} alt="" />
        

        <div className='mt-10'>
            <p className='text-3xl font-semibold'>Sign in to FreshCart</p>
            <p className='opacity-60'>Welcome back to FreshCart! Enter your email to get started.</p>
            <div className='grid grid-cols-2 gap-4'>
                <input type="text" 
                placeholder='First Name'
                className="mt-8 border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-green-500 transition duration-200"
               />
               <input type="text" 
                placeholder='Last Name'
                className="mt-8 border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-green-500 transition duration-200"
               />
            </div>
            
            <input
             type="email"
             placeholder="Email"
             className=" mt-8 border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-green-500 transition duration-200"
        />
        <input type="password"
        placeholder='Password'
        className=" mt-8 border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-green-500 transition duration-200"
         />

         <button type="submit"
            className=" mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200">
            Register
            </button>
        <p className='text-xs mt-4 opacity-70 '>By continuing, you agree to our <span className='text-green-600'>Terms of Service</span> & <span className='text-green-600'>Privacy Policy</span></p>



        </div>
    </div>
  )
}

import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-orange-100 w-full flex flex-col md:flex-row xl:flex-row  2xl:flex-row'>
        {/* menu section */}
        <div className='w-full  p-5 flex flex-col gap-3'>
            <div className='text-xl font-semibold'>Menu</div>
            <div className='text-gray-500 hover:text-black'>Home</div>
            <div className='text-gray-500 hover:text-black'>Why Choose</div>
            <div className='text-gray-500 hover:text-black'>Special Menu</div>
            <div className='text-gray-500 hover:text-black'>Regular Food</div>
            <div className='text-gray-500 hover:text-black'>Special Chef's</div>
        </div>
        {/* help section */}
        <div className='w-full  p-5 flex flex-col gap-3'>
            <div className='text-xl font-semibold'>Help</div>
            <div className='text-gray-500 hover:text-black'>Privacy</div>
            <div className='text-gray-500 hover:text-black'>Terms & Condition</div>
            <div className='text-gray-500 hover:text-black'>Policy</div>
          
        </div>
        {/* contact section */}
       <div className='w-full  p-5 flex flex-col gap-3'>
            <div className='text-xl font-semibold'>Contact</div>
            <div className='text-gray-500 hover:text-black'>+123-456-789</div>
            <div className='text-gray-500 hover:text-black'>info@PetPooja.com</div>
            <div className='text-gray-500 hover:text-black'>Shastri Nagar,</div>
            <div className='text-gray-500 hover:text-black'>Jaipur (Rajasthan)</div>
         
        </div>
        {/* socail section */}
       <div className='w-full  p-5 flex flex-col gap-3'>
            <div className='text-xl font-semibold mb-2'>Social</div>
            <div className='flex flex-wrap gap-2'>
                <div className='text-gray-500  hover:text-black'><BsInstagram className='w-10 h-10' /></div>
                <div className='text-gray-500 hover:text-black'><CiFacebook className='w-10 h-10' /></div>
                <div className='text-gray-500 hover:text-black'><CiLinkedin className='w-10 h-10' /></div>
                <div className='text-gray-500 hover:text-black'><FaXTwitter className='w-10 h-10' /></div>
            </div>
        
        </div> 
    </div>
  )
}

export default Footer
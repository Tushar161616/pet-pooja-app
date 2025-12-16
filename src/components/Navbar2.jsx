import React from 'react'
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { MdRestaurantMenu } from "react-icons/md";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PiUserCircleThin } from "react-icons/pi";
import { useContext,useEffect } from 'react';
import { dataContext } from '../context/FoodContext';
import { useSelector } from 'react-redux';
import { CiShoppingCart } from "react-icons/ci";
import FoodData from '../FoodData';
import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {
    
    let [open,setOpen] = useState(false);

    let {input,setInput,cat,setCat,scart,setScart,srch,setSrch} = useContext(dataContext);

     function clickSearch(value){
    setSrch(!value)
    console.log(srch);
    
   }

    useEffect(()=>{
    let AnotherList = FoodData.filter((item)=>item.food_name.toLowerCase().includes(input.toLowerCase()))
    setCat(AnotherList);

  },[input])

  const uitem = useSelector((state)=>state.cart);
  const navigate = useNavigate();

  return (
    <div className='w-full h-20 border-b-2 border-gray-300 flex justify-evenly items-center sticky top-0 right-0 bg-white z-100'>


        {/* logo section */}
        <div className='w-[60%]  h-full flex items-center justify-between pl-4 xl:w-[40%] 2xl:w-[40%] 2xl:justify-start xl:justify-start'>
            {/* burger menu */}
            <SlMenu onClick={()=>setOpen(true)} className='w-8 h-8 xl:hidden  2xl:hidden'/>

            {/* sidebar */}
            <div className={`${open ? "translate-y-0" : "translate-y-full"} w-[70%] bg-orange-100 h-full fixed top-0 left-0 flex flex-col p-3 gap-10`}>
                
                {/* sidebar nav */}
                <div className='flex items-center justify-between'>
                    <div className='text-3xl font-light text-orange-400'>Pet-Pooja</div>
                    <MdRestaurantMenu onClick={()=>setOpen(false)} className='w-8 h-8 text-orange-400'/>
                </div>

                {/*sidebar menu  */}
                <div className='w-full h-full text-lg  text-orange-400 flex flex-col gap-5'>
                        <div className='hover:font-bold'> <NavLink to={"/"}>Home</NavLink></div>
                        <div className='hover:font-bold'><NavLink to={"/foodcorner"}>FoodCorner</NavLink> </div>
                        <div className='hover:font-bold'><NavLink to={"/dineout"}>DineOut</NavLink> </div>
                        <div className='hover:font-bold'><NavLink to={"/contact"}>Contact</NavLink> </div>
                </div>

            </div>

            {/* logo  */}
            <div onClick={()=>navigate("/")} className='text-4xl font-bold text-orange-400 xl:ml-20 2xl:ml-20'>Pet-Pooja</div>

        </div>



        {/* main-menu section */}
        <div className='hidden  h-full text-lg  text-orange-400 flex items-center justify-end gap-15 xl:flex 2xl:flex  xl:w-[40%] 2xl:w-[40%]'>
                        <div className='hover:font-bold'> <NavLink to={"/"}>Home</NavLink></div>
                        <div className='hover:font-bold'><NavLink to={"/foodcorner"}>FoodCorner</NavLink> </div>
                        <div className='hover:font-bold'><NavLink to={"/dineout"}>DineOut</NavLink> </div>
                        <div className='hover:font-bold'><NavLink to={"/contact"}>Contact</NavLink> </div>
        </div>



        {/* signup btn section */}
        <div className='w-[40%]   h-full flex items-center justify-end px-5 gap-5 xl:w-[20%] 2xl:w-[20%] md:gap-10 xl:gap-4 2xl:gap-5'>
            {/* search button */}
            <div onClick={()=>clickSearch(srch)} className='cursor-pointer   border border-orange-400  rounded-full p-2  hover:bg-orange-100 '>
                <IoIosSearch className=' text-orange-400' />
            </div>

            {/* cart btn */}
            <div onClick={()=>navigate("/cart")} className='cursor-pointer  w-10 h-10 flex items-center justify-center relative md:h-20 md:w-20'>
                            <span className='absolute top-0 right-1 font-medium text-orange-400 md:top-3 md:right-2 md:font-bold'>{uitem.length}</span>
                            <CiShoppingCart className='w-6 h-6 text-orange-400 md:w-10 md:h-10' />
            </div>
           


            {/* login btn */}
                <PiUserCircleThin className='cursor-pointer  text-orange-400 w-11 h-11 hover:bg-orange-100 2xl:hidden xl:hidden md:hidden' />

            <button className='border hidden border-orange-400 cursor-pointer  text-orange-400 h-10 w-20 rounded-2xl font-semibold hover:border-black hover:text-black xl:w-30 xl:text-xl 2xl:w-40 2xl:block xl:block md:block'>Login</button>
        </div>


        {/* searchbar */}
                    <form onSubmit={(e)=>(e.preventDefault())} className={`${srch === true ? "block" : 'hidden'} shadow-2xl  absolute top-20 left-15 2xl:left-100 xl:left-100 md:left-80 mt-3 border border-orange-400 bg-white rounded-4xl w-80 h-10 flex items-center gap-3 pl-5 2xl:w-200 md:w-150 md:h-15`}>
                        <div><IoIosSearch className='w-5 h-5 text-orange-400 md:w-8 md:h-8' /></div>
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Search Food...' className='text-lg h-full w-full outline-0 p-2 md:text-xl'></input>
                    </form>
        
    </div>
  )
}

export default Navbar2
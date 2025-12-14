import React, { useContext, useEffect } from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { dataContext } from '../context/FoodContext';
import FoodContext from '../context/FoodContext';
import FoodData from '../FoodData';
import { useSelector } from 'react-redux';

const Navbar = () => {
  let {input,setInput,cat,setCat,scart,setScart} = useContext(dataContext);

  useEffect(()=>{
    let AnotherList = FoodData.filter((item)=>item.food_name.toLowerCase().includes(input.toLowerCase()))
    setCat(AnotherList);

  },[input])

  const uitem = useSelector((state)=>state.cart);
  // console.log(uitem);
  
  return (
    <div className='bg-slate-400 w-full h-40 flex flex-col items-center justify-center 2xl:h-24  '>

      <div className='mt-2  w-60 h-20  flex items-center justify-center 2xl:hidden '>
                <span className='text-4xl font-semibold text-red-500'>Food<sup className='font-light'>Corner</sup></span>  
      </div>


      <div className='flex  items-center justify-around w-full h-full'>

            <div className='rounded shadow-2xl hidden w-60 h-20 bg-white flex items-center justify-center 2xl:flex '>
                <span className='text-lg font-semibold text-red-500 md:text-5xl'>Food<sup className='font-light'>Corner</sup></span>  
            </div>

            {/* searchbar */}
            <form onSubmit={(e)=>(e.preventDefault())} className=' bg-white rounded w-50 h-10 flex items-center gap-3 pl-5 2xl:w-200 md:w-100 md:h-15'>
                <div><IoIosSearch className='w-5 h-5 text-red-500 md:w-8 md:h-8' /></div>
                <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Search Food...' className='text-lg h-full w-full outline-0 p-2 md:text-xl'></input>
            </form>
            
            <div onClick={()=>setScart(true)} className='bg-white rounded shadow-2xl w-10 h-10 flex items-center justify-center relative md:h-20 md:w-20'>
                <span className='absolute top-0 right-1 font-medium text-red-500 md:top-1 md:right-2 md:font-bold'>{uitem.length}</span>
                <CiShoppingCart className='w-6 h-6 text-red-500 md:w-12 md:h-12' />
            </div>

        </div>

    </div>
  )
}

export default Navbar
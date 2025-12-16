import React from 'react'
import FoodData from '../FoodData'
import { MdOutlineStar } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { CiBookmarkCheck } from "react-icons/ci";
import { RiEBike2Line } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import { AddItem,RemoveItem } from "../redux/features/cartSlice";


const Home = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  

  return (
    <div>
        
        

        {/* hero section */}
        <div className='w-full h-full flex flex-col gap-2 2xl:flex-row xl:flex-row md:flex-row 2xl:h-[70vh] xl:h-[50vh] md:h-[40vh] 2xl:py-5 xl:py-5'>

          {/* text section */}
          <div className='flex w-full h-full    flex-col justify-around gap-5  py-10 px-5 2xl:px-10 '>

            <div className='border w-20 h-5 rounded-2xl text-sm flex justify-center items-center 2xl:w-35 2xl:h-8 2xl:text-lg xl:w-35 xl:h-8 xl:text-sm'>Hungry?</div>
            {/* title */}
            <div className='text-3xl font-bold text-orange-400 2xl:text-6xl xl:text-4xl'>JUST COME TO<br/> PET-POOJA & ORDER</div>
            {/* description */}
            <div className='text-sm text-gray-500 2xl:text-xl xl:text-lg'>Here You Will Find All The Best Quality<br/> And Pure Food Order Now</div>
            {/* btn */}
            <div className='flex items-center  gap-5'>
              <button className='border bg-orange-400 text-white w-30 h-10 rounded-3xl 2xl:w-50 2xl:h-15 2xl:rounded-4xl 2xl:text-xl xl:w-45 xl:h-15 xl:rounded-4xl xl:text-lg'>Order Now</button>
              <button onClick={()=>navigate("/foodcorner")} className='border border-black  w-35 h-10 rounded-3xl flex items-center justify-center gap-2 2xl:w-55 2xl:h-15 2xl:rounded-4xl 2xl:text-xl xl:w-50 xl:h-15 xl:rounded-4xl xl:text-lg'>Explore More <FaLongArrowAltRight className='text-orange-400' /></button>
            </div>

          </div>

          {/* img section */}
          <img className='w-200 2xl:pr-30' src="src/assets/hero-img.png" />

        </div>


        {/* why choose section */}
         <div className='w-full h-full py-30 flex flex-col items-center justify-around gap-15 '>
          {/* title section */}
          <div className='flex flex-col justify-center items-center gap-2 '>
            <h1 className='text-3xl font-semibold text-center 2xl:text-5xl xl:text-5xl'>WHY CHOOSE US?</h1>
            <p className='text-sm text-center text-gray-500 2xl:text-lg xl:text-lg'>You will choose us because you get the best quality<br/> food from us and we deliver fast</p>
          </div>

          {/* img section */}
          <div className='h-full w-full flex flex-col items-center justify-center gap-20 2xl:flex-row xl:flex-row md:flex-row'>

            
            <div className='shadow-2xl  w-70 h-50 rounded-2xl flex flex-col items-center justify-center gap-2'>
              <IoFastFoodOutline className='w-15 h-15 text-orange-400' />
              <div className='text-xl font-semibold'>Serve Healthy Food</div>
              <div className='text-sm text-center text-gray-400'>We serve all healthy food here you can choose any food you like</div>
            </div>

             <div className='shadow-2xl  w-70 h-50 rounded-2xl flex flex-col items-center justify-center gap-2'>
              <CiBookmarkCheck  className='w-15 h-15 text-orange-400' />
              <div className='text-xl font-semibold'>Best Quality</div>
              <div className='text-sm text-center text-gray-400'>Our food quality is excellent you will get exectly what you want here </div>
            </div>


             <div className='shadow-2xl  w-70 h-50 rounded-2xl flex flex-col items-center justify-center gap-2'>
              <RiEBike2Line className='w-15 h-15 text-orange-400' />
              <div className='text-xl font-semibold'>Fast Delivery</div>
              <div className='text-sm text-center text-gray-400'>We provide fast delivery you will recive it shortly after ordering</div>
            </div>


           
          </div>

        </div>

        {/* special food section */}
         <div className='w-full h-full py-10 flex flex-col items-center justify-around gap-15 '>
          {/* title section */}
          <div className='flex flex-col justify-center items-center gap-2 '>
            <h1 className='text-3xl font-semibold text-center 2xl:text-5xl xl:text-5xl'>OUR SPECIAL FOOD</h1>
            <p className='text-sm text-center text-gray-500 2xl:text-lg xl:text-lg'>This is our daily food list. Here you will find all kinds of<br/> food choose your favorite food and order</p>
          </div>

          {/* card section */}
          <div className='h-full w-full px-10 flex flex-col  flex-wrap items-center justify-center gap-20 2xl:flex-row xl:flex-row md:flex-row'>
            
          {
            FoodData.map((item,index)=>{
              return item.id < 7 ? 

              <div key={index} className='w-90 h-110  rounded-2xl shadow-2xl flex flex-col items-center justify-evenly'>

                    {/* card img */}
                    <img className='border-15 border-orange-400 rounded-full w-60 h-60' src={item.food_image} />
                    {/* title */}
                    <div className='text-3xl font-semibold'>{item.food_name}</div>
                   
                    {/* rating */}
                    <div className='flex items-center justify-center gap-2'>
                      <MdOutlineStar className='text-yellow-400 w-6 h-6' />
                      <MdOutlineStar className='text-yellow-400 w-6 h-6' />
                      <MdOutlineStar className='text-yellow-400 w-6 h-6' />
                      <MdOutlineStar className='text-yellow-400 w-6 h-6' />
                      <MdOutlineStar className='text-yellow-400 w-6 h-6' />
                     
                    </div>

                    {/* btn */}
                    <div className='w-full flex items-center justify-around '>
                      <div className='text-md font-semibold border rounded-2xl text-center w-20 h-10 flex items-center justify-center'>Rs.{item.price}/-</div>
                      <div onClick={()=>{dispatch(AddItem({id:index,name:item.food_name,image:item.food_image,price:item.price,qty:item.food_quantity}));toast.success("item added succesfully!")}} className='text-md font-semibold text-white hover:bg-orange-500 rounded-2xl text-center w-30 h-10 flex items-center justify-center bg-orange-400'>Order Now</div>
                    </div>

              </div>  : null

})
              

          }
           
          </div>

        </div>




        {/* chef section */}
        <div className='w-full h-full py-10 flex flex-col items-center justify-around gap-15 '>
          {/* title section */}
          <div className='flex flex-col justify-center items-center gap-2 '>
            <h1 className='text-3xl font-semibold text-center 2xl:text-5xl xl:text-5xl'>OUR SPECIAL CHEF'S</h1>
            <p className='text-sm text-center text-gray-500 2xl:text-lg xl:text-lg'>Featured below are some of our special chef's<br/> who work to prepare your meals</p>
          </div>

          {/* img section */}
          <div className='h-full w-full flex flex-col items-center justify-center gap-20 2xl:flex-row xl:flex-row md:flex-row'>
            <img className='w-70 rounded-2xl shadow-2xl' src="https://media.istockphoto.com/id/576597004/photo/portrait-of-handsome-and-cheerful-indian-male-chef.jpg?s=612x612&w=0&k=20&c=A5vZCoszBCsxGsJg9YyRw6Ho4GaSeYxCYa7Up6ylvl4="  />
            <img className='w-70 rounded-2xl shadow-2xl' src="https://thumbs.dreamstime.com/b/female-chef-her-roasted-chicken-7879874.jpg"  />
            <img className='w-70 rounded-2xl shadow-2xl ' src="https://www.shutterstock.com/image-photo/female-indian-asian-chef-presenting-600nw-2495353419.jpg"  />
           
          </div>

        </div>

    </div>
  )
}

export default Home
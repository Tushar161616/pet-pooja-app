import React from 'react'
import Restaurent from '../Restaurent'


const DineOut = () => {
  return (
    <div>
      <div className='text-3xl text-orange-400 pt-10 font-bold text-center w-full h-20 2xl:text-5xl xl:text-4xl'>Top Rated Restaurent</div>

      <div className='w-full h-full mt-10 p-5 flex flex-wrap gap-15 items-center justify-center'>
        {
          Restaurent.map((item,index)=>(
             <div key={index} className='w-80 h-90 border border-gray-300 shadow-2xl rounded p-3 flex flex-col justify-evenly'>
                  <img src={item.image} className=' w-full h-[40%]'  />
                  <div className='text-2xl font-semibold'>{item.name}</div>
                  <div className='text-lg'>Location : {item.location}</div>
                  <div className='text-lg'>Distance : {item.distance}</div>

                  <div className='flex items-center justify-between text-lg'>
                    <div className={`${item.is_open === true ? "text-green-400" : "text-red-400"} font-semibold`}>{item.is_open === true ? "Open" : "Closed"}</div>
                    <div className='text-yellow-400'>Rating: {item.rating}</div>
                  </div>

                  <button className='bg-orange-400 text-white w-full h-10 rounded text-lg hover:bg-orange-500'>More Details</button>
                    
       
        </div>
          ))
        }

      

      </div>
    </div>
  )
}

export default DineOut
import React from 'react'
import { ImBin } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { AddItem,RemoveItem,IncQty,DecQty } from '../redux/features/cartSlice';

const Checkout = ({id,name,price,image,qty}) => {
    const dispatch = useDispatch();

  return (
    <div className='px-2 rounded shadow-2xl w-full h-[20vh] flex  justify-between items-center  mb-5'>
        {/* left section */}
        <div className=' w-full h-full flex flex-col items-center justify-between 2xl:flex-row 2xl:w-[60%]'>
            <img src={image}  className=' h-[80%] w-[60%] rounded-xl ' />

            {/* name div */}
            <div className=' flex flex-col  h-full justify-around w-full items-center 2xl:w-[40%]'>
                <div className='text-lg  pl-2'>{name}</div>

                {/* plus/minus button */}
                <div className='text-lg text-red-500 shadow-2xl flex items-center border justify-around w-25 h-10 rounded-xl '>
                    <button onClick={()=> qty>1 ? dispatch(DecQty(id)): 1} className='rounded-l-xl h-full w-full hover:bg-red-200'>-</button>
                    <div>{qty}</div>
                    <button onClick={()=>dispatch(IncQty(id))} className='rounded-r-xl h-full w-full hover:bg-red-200'>+</button>
                </div>
            </div>
        </div>

        {/* right section */}
        <div className=' w-[40%] h-full flex  flex-col gap-4 justify-start items-end p-2'>
            <div className='text-xl text-green-500'>Rs.{price}/-</div>
            <div><ImBin onClick={()=>dispatch(RemoveItem(id))} className='text-red-500 w-5 h-5 hover:text-red-300' /></div>
        </div>
    </div>
  )
}

export default Checkout
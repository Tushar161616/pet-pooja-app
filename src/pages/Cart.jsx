import React from 'react'
import { useContext,useEffect } from 'react';
import { dataContext } from '../context/FoodContext';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Checkout from '../components/Checkout';
import { toast } from "react-toastify";



const Cart = () => {

   let {input,setInput,cat,setCat,scart,setScart,srch,setSrch} = useContext(dataContext);
   const citem = useSelector((state)=>state.cart);
   let subtotal = citem.reduce((total,item)=>total+(item.qty*item.price),0);
   let gst = Math.round(subtotal * 0.05);
   let delivery = subtotal >= 500 ? 0 : 40;
   let total = Math.floor(subtotal+gst+delivery)
   const navigate = useNavigate();

  return (
    <div className={`px-10 w-full h-full  bg-white flex flex-col gap-2 `}>
                    
                    {/* cart navbar */}
                    <div className="w-full h-full p-10 flex justify-center items-end ">
                        <div className="text-4xl font-bold text-orange-400">Order Items</div>
                      
                    </div>
                    
                    {/* cart card */}
                    <div className="border-b-2 pb-5 "> 
                      {
                            citem.map((item)=>(
                                <Checkout id={item.id} name={item.name} price={item.price} image={item.image} qty={item.qty} /> 
                            ))
                        } 
                        
                    </div>
    
                    {subtotal ? <div>
    
                         {/* product calculation */}
                   <div className="border-b-2 h-40 w-full">
    
                            {/* for subtotal */}
                            <div className="text-xl font-semibold flex justify-between items-center p-2">
                                <div className="text-orange-400">Subtotal</div>
                                <div className="text-green-500">Rs.{subtotal}/-</div>
                            </div>
    
                            {/* for delivery */}
                            <div className="text-xl font-semibold flex justify-between items-center p-2">
                                <div className="text-orange-400">Delivery Fee {delivery === 0 ? <span className="text-sm"> (FREE)</span> : ""}</div>
                                <div className="text-green-500">Rs.{delivery}/-</div>
                            </div>
    
    
                            {/* for gst */}
                            <div className="text-xl font-semibold flex justify-between items-center p-2">
                                <div className="text-orange-400">GST</div>
                                <div className="text-green-500">Rs.{gst}/-</div>
                            </div>
    
                   </div>
    
    
    
                   {/* button section */}
                   <div className="flex flex-col gap-2 ">
    
                     {/* for total calculation */}
                            <div className="text-2xl font-semibold flex justify-between items-center p-2">
                                <div className="text-orange-400">Total</div>
                                <div className="text-green-500">Rs.{total}/-</div>
                            </div>
    
                            {/* place order button */}
    
                            <button onClick={()=>toast.success("Order Placed Succesfully!")} className="bg-orange-400 text-white w-full h-10 rounded text-lg font-semibold hover:bg-orange-500">Place Order</button>
    
                   </div>
    
                    </div> : 
                    
                    // empty cart section
                    <div className="flex flex-col mt-10 gap-2 items-center justify-evenly w-full h-full">
                        <div className="text-2xl font-semibold">Empty Cart</div>
                        <button onClick={()=>navigate("/foodcorner")} className="bg-orange-400 text-white w-40 h-10 hover:bg-orange-500">Browse Food</button>
                            </div>}
    
                   
    
    
    
                </div>
  )
}

export default Cart
import React, { useContext, useState } from "react";
import Categroy from "../Categroy";
import FoodData from "../FoodData";
import { RiLeafLine } from "react-icons/ri";
import { dataContext } from "../context/FoodContext";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Checkout from "../components/Checkout";
import { useDispatch,useSelector } from "react-redux";
import { AddItem,RemoveItem } from "../redux/features/cartSlice";
import { toast } from "react-toastify";

const Home = () => {

    const {cat,setCat,input,scart,setScart} = useContext(dataContext)

    function filterData(name){
        if(name === "All"){
            setCat(FoodData);
        }else{
            let NewList = FoodData.filter((item)=>(item.food_categroy === name));
            setCat(NewList);
        }
    }
    const dispatch = useDispatch();
      const citem = useSelector((state)=>state.cart);
      let subtotal = citem.reduce((total,item)=>total+(item.qty*item.price),0);
      let gst = Math.round(subtotal * 0.05);
      let delivery = subtotal >= 500 ? 0 : 40;
      let total = Math.floor(subtotal+gst+delivery)
    //   console.log(subtotal);
      console.log(gst);
    //   console.log(delivery);
    //   console.log(total);
      

    return(
        <div className="bg-slate-200 min-h-screen w-full">
            {/* categroy section */}
            <div className="flex flex-wrap items-center justify-center gap-5  py-5">
                {
                   !input ? Categroy.map((item,index)=>(
                        <div key={index} onClick={()=>filterData(item.name)} className=" bg-white shadow-2xl rounded-2xl w-20 h-20 flex flex-col items-center justify-center hover:bg-red-300 transition-all duration-300">
                            {item.icon}
                            {item.name}
                        </div>
                    )) : ""
                }
            </div>


            {/* cards section */}
            <div className="h-full w-full flex flex-wrap gap-10 justify-center py-10">

              {cat.length>1 ? 
            
                cat.map((item,index)=>(
                    <div key={index} className="bg-white h-80 w-60 shadow-2xl  rounded-xl p-3 flex flex-col justify-around">
                    
                    <img src={item.food_image} className="w-full h-35  rounded-xl" />
                    <div className="text-xl font-medium">{item.food_name}</div>

                    <div className="flex justify-between items-center">
                        {/* price div */}
                        <div className="font-medium text-green-400">Rs.{item.price}/-</div>

                        <div className="flex items-center  font-medium" >{item.food_type === "Veg" ? <RiLeafLine /> : ""} <span >{item.food_type}</span></div>
                    </div>

                    <button onClick={()=>{dispatch(AddItem({id:index,name:item.food_name,image:item.food_image,price:item.price,qty:item.food_quantity}));toast.success("item added succesfully!")}} className="bg-red-300 text-lg font-medium w-full h-10 rounded hover:bg-red-500 transition-all  ">Add To Cart</button>

                     </div>
                ))
            

            : <div className="text-2xl ">no dish found</div>

            }  

            </div>


            {/* cart section */}
            <div className={`${scart === true ? "translate-x-0": "translate-x-full"} transition-all duration-500 ease-in-out  w-full h-full shadow-2xl bg-white flex flex-col gap-2 fixed top-0 right-0 px-5 2xl:w-[40%] overflow-scroll `}>
                
                {/* cart navbar */}
                <div className="w-full flex justify-between items-center sticky bg-white top-0 ">
                    <div className="text-2xl font-semibold text-red-500">Order Items</div>
                    <div><IoIosCloseCircleOutline onClick={()=>setScart(false)} className="w-10 h-10 hover:text-red-500" /></div>
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
                            <div className="text-red-500">Subtotal</div>
                            <div className="text-green-500">Rs.{subtotal}/-</div>
                        </div>

                        {/* for delivery */}
                        <div className="text-xl font-semibold flex justify-between items-center p-2">
                            <div className="text-red-500">Delivery Fee {delivery === 0 ? <span className="text-sm"> (FREE)</span> : ""}</div>
                            <div className="text-green-500">Rs.{delivery}/-</div>
                        </div>


                        {/* for gst */}
                        <div className="text-xl font-semibold flex justify-between items-center p-2">
                            <div className="text-red-500">GST</div>
                            <div className="text-green-500">Rs.{gst}/-</div>
                        </div>

               </div>



               {/* button section */}
               <div className="flex flex-col gap-2 ">

                 {/* for total calculation */}
                        <div className="text-2xl font-semibold flex justify-between items-center p-2">
                            <div className="text-red-500">Total</div>
                            <div className="text-green-500">Rs.{total}/-</div>
                        </div>

                        {/* place order button */}

                        <button onClick={()=>toast.success("Order Placed Succesfully!")} className="bg-red-500 text-white w-full h-10 rounded text-lg font-semibold hover:bg-red-600">Place Order</button>

               </div>

                </div> : 
                
                // empty cart section
                <div className="flex flex-col gap-2 items-center justify-evenly w-full h-full">
                    <div className="text-2xl font-semibold">Empty Cart</div>
                    <button className="bg-red-500 text-white w-40 h-10 hover:bg-red-600">Browse Food</button>
                        </div>}

               



            </div>


            
        </div>
    )
}

export default Home;
import React from 'react'
import { useState } from 'react';
import { GoPaperAirplane } from "react-icons/go";





const Contact = () => {

  const [user,setUser] = useState({name:"",email:"",contact:"",subject:"", masg:""});
     const {name,contact,email,subject,masg} = user;
     const [msg,setMsg] = useState("");

    function updateUser(e){
      
        let key = e.target.name;

        setUser({...user,[key]: e.target.value});

        console.log(user);
        
    }

    function SubmitUser(e){
        e.preventDefault();
        if(!name || !contact || !email || !subject){
            alert("Please Fill All Fields!");
        }
        else{
            setMsg("Message Sent Succesfully we'll get back to you as soon as possible!");
           
            
        }
    }


  return (
        <div className='flex flex-col items-center justify-center pt-10 '>
              
              <div className='text-5xl font-bold text-orange-400'>Contact Us</div>


            <div className="conS w-full flex flex-col items-center  justify-around p-[50px] 2xl:flex-row xl:flex-row md:flex-row">


                <div className="conleft h-full  w-[350px] flex flex-col gap-5">
                    
                    {/* phone div */}
                    <div className="w-full h-[120px] shadow-2xl rounded-2xl p-3">
                        <div><span className="text-2xl font-semibold"> Phone</span></div>
                        <div><div className="text-xl">+91-905-722-8494</div><div className="text-xl ">+91-905-722-8494</div></div>
                    </div>


                    {/* email div */}
                    <div className="w-full h-[120px] shadow-2xl rounded-2xl p-3">
                        <div><span className="text-2xl font-semibold"> Email</span></div>
                        <div><div className="text-xl">info@petpooja.com</div><div className="text-lg text-gray-600 ">We'll respond within 24 hours</div></div>
                    </div>

                    {/* office div */}
                    <div className="w-full h-[120px] shadow-2xl rounded-2xl p-3">
                        <div><span className="text-2xl font-semibold">Office</span></div>
                        <div><div className="text-xl">Bangalore,Tamilnadu</div><div className="text-lg text-gray-600 ">Shastri Nagar, Jaipur, Rajasthan 302016</div></div>
                    </div>

                    {/* business hrs */}
                    <div className="w-full h-[120px] shadow-2xl rounded-2xl p-3">
                        <div><span className="text-2xl font-semibold">Business Hours</span></div>
                        <div><div className="text-lg text-gray-600 ">Monday - Friday 09:00 AM - 07:00 PM</div><div className="text-lg text-gray-600 ">Saturday 09:00 AM - 08:00 PM</div></div>
                    </div>

                </div>



                <form onSubmit={SubmitUser} className="shadow-2xl border mt-20  border-gray-300  w-full h-full rounded-2xl p-5 flex flex-col gap-5 2xl:w-[800px] xl:w-[700px] md:w-[600px]">
                    {/* for text message */}
                    <div >
                        <div className="text-3xl font-bold mb-1.5">Send us a Message</div>
                        <p>Fill out the form below and we'll get back to you as soon as possible</p>
                    </div>

                    {/* first row */}
                    <div className="conrow gap-5 flex flex-col justify-between 2xl:flex-row xl:flex-row md:flex-row">
                        <div className="w-full">
                            <label for="name" className="font-semibold">Full Name *</label>
                         <input id="name" className="outline-0 pl-5 border border-gray-500 rounded-xl bg-transparent w-full h-[50px] text-xl placeholder:text-lg " onChange={updateUser}  type="text" placeholder="Enter your full name" name="name" value={name} ></input>

                        </div>


                        <div className="w-full">
                            <label for="name" className="font-semibold">Email Address *</label>
                         <input id="email" className="outline-0 pl-5 border border-gray-500 rounded-xl bg-transparent w-full h-[50px] text-xl placeholder:text-lg"  onChange={updateUser}  type="email" placeholder="Enter your email" name="email" value={email} ></input>

                        </div>
                        
                         
                    </div>

                    {/* second row */}
                    <div className="conrow gap-5 flex flex-col justify-between 2xl:flex-row xl:flex-row md:flex-row">

                        
                        <div className="w-full">
                            <label for="ph" aria-required className="font-semibold">Phone Number *</label>
                         <input id="ph" className="outline-0 pl-5 border border-gray-500 rounded-xl bg-transparent w-full h-[50px] text-xl placeholder:text-lg " onChange={updateUser}  type="text" placeholder="Enter your number" name="contact" value={contact} ></input>

                        </div>


                        <div className="w-full">
                            <label for="subject" className="font-semibold">Subject *</label>
                          <select id="subject" onChange={updateUser} name="subject" value={subject}  className="outline-0 pl-5 border border-gray-500 rounded-xl bg-transparent w-full h-[50px] text-xl">
                            <option className="text-lg text-gray-500">Selact a Subject</option>
                            <option>General Inquiry</option>
                            <option>Order Assitence</option>
                            <option>Custom Package</option>
                            <option>Event Booking</option>
                            <option>Complaint</option>
                            <option>Feedback</option>
                        </select>

                        </div>
                        

                       
                    </div>


                    <div className=" w-full flex flex-col">
                            <label for="textarea" className="font-semibold">Message *</label>
                         <textarea id="textarea" name="masg" onChange={updateUser}  placeholder="write here any questions you have..."   value={masg}  className="h-[150px] p-2 border border-gray-500 rounded-xl bg-transparent w-full  text-[16px] outline-0"></textarea><br/>

                        </div>

                    

                    <button type="submit" className="bg-orange-400 text-white h-[50px] w-full rounded-xl text-xl font-semibold hover:bg-orange-500 flex items-center justify-center gap-3"> Send Message <GoPaperAirplane /></button>

                { msg ? <div className="text-2xl " ><span>Thank You</span> <span className="text-2xl font-bold">{name}</span> <span>Your Message Sent Succesfully we'll get back to you as soon as possible!</span> </div> : null }

                </form>

            </div>
        </div>
  
  )
}

export default Contact
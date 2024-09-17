import React, { useContext, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import AppContext from '../appContext';



export default function MAddNew(){
  // pointer-events-auto
  
  const context=useContext(AppContext);

  if (!context) {
    return <div>Error: Context is not available</div>;
  }

  const {setShowAddManageUsers} = context;



  return (
<div className="
h-screen
sm:h-full
lg:h-fit
overflow-scroll
bg-[#F8F9FC] rounded-lg w-full sm:w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12  
 h-auto max-h-4/5 flex justify-center absolute top-0 rounded-none sm:rounded-lg md:top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-y-1/2  p-4 sm:p-6 md:p-8 lg:p-10">
  <div className="w-full   h-5/6">

  
    <div className="flex justify-between items-center  p-2">
      <span className="text-lg font-bold">Add New User</span>
      <span onClick={()=>{setShowAddManageUsers(false)}}   className="cursor-pointer text-lg"><IoMdClose /></span>
    </div>

  
    <div className=" rounded-lg mt-2 bg-white flex items-center">
      <div className="flex flex-col p-4 w-full">
        <label className="text-[#B58C43] text-lg font-bold">Username</label>
        <input className="text-sm p-2 mt-2 bg-[#F8F9FC]  text-[#8C8C8C] rounded-lg w-full" placeholder="Write the Username" />
      </div>
    </div>

    
    <div className=" rounded-lg mt-2 bg-white flex items-center">
      <div className="flex flex-col p-4 w-full">
        <label className="text-[#B58C43] text-lg font-bold">Email</label>
        <input className="text-sm p-2 mt-2 bg-[#F8F9FC] text-[#8C8C8C]  rounded-lg w-full" placeholder="Write the email" />
      </div>
    </div>

   
    <div className=" rounded-lg mt-2 bg-white  flex items-center">
      <div className="flex flex-col p-4 w-full">
        <label className="text-[#B58C43] text-lg font-bold">Password</label>
        <input className="text-sm p-2 mt-2 bg-[#F8F9FC] text-[#8C8C8C] rounded-lg w-full" placeholder="Write the password" />
      </div>
    </div>

    <div className=" rounded-lg mt-2 pt-4  flex  justify-end items-center w-full ">
    <button className='p-2 px-4 text-lg font-bold font-black bg-[#281D14] text-white rounded-lg flex justify-center items-center whitespace-nowrap'>Save Changes</button>
    </div>
  </div>
</div>


  )}

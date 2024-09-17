import React, { useEffect, useState, useContext } from 'react'
import AddCategory from './addCategory'
import CategoryHelper from './categoryHelper';
import AppContext from '../appContext';


export default function Categories() {

   const context = useContext(AppContext);
   if (!context) {
      return <div>Error: Context is not available</div>;
   }
   const { setShowAddCategory, showAddCategory } = context


   return (
      <div className='bg-[#F8F9FC] relative z-50 ladna '>
         <div className={showAddCategory ? "block fixed inset-0 bg-black bg-opacity-50  " : "hidden"} >
            <AddCategory  ></AddCategory>
         </div>

         <div className=' dMain flex-col  font-mulish sm:mx-10  grid-col gap-5 shadow-md '>

            <div className='grid bg-white items-center grid-cols-3 ps-1 pe-1 sm:p-8 text-[#B58C43] font-bold pb-3'>
               <p className=' '>Title</p>
               <p className=' text-center'>Image</p>
               <div className='flex justify-end pe-1 sm:pe-0'>
                  <button onClick={() => { setShowAddCategory(true) }} className=' p-1 sm:p-3   text-black bg-[#FFB01D] rounded-lg w-28 flex justify-center items-center whitespace-nowrap'>Add New</button>
               </div>
            </div>
            <hr className='flex mx-auto w-[97%] '></hr>
            <CategoryHelper></CategoryHelper>

            <div className='flex  justify-end bg-white  py-6 px-2 sm:px-8 '>


               <button className='p-2  px-4 font-black bg-[#281D14] text-white rounded-lg flex justify-center items-center whitespace-nowrap'>
                  Save Changes
               </button>

            </div>
         </div>
      </div>
   )
}

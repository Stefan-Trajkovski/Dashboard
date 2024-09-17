import React, { useContext, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { FiUploadCloud } from "react-icons/fi";
import AppContext from '../appContext';



export default function EditSubCategory() {
  const context = useContext(AppContext);

  if (!context) {
    return <div>Error: Context is not available</div>;
  }
  const { setShowEditSubCategory, editName } = context



  return (
    <div className={` h-screen
overflow-scroll
bg-[#F8F9FC] w-full sm:w-11/12 md:w-9/12 xl:w-6/12 font-mulish 
     min-h-screen sm:min-h-0 sm:h-auto sm:max-h-4/5  flex-col justify-center top-0 left-1/2 
     transform -translate-x-1/2 sm:top-auto  md:top-1/2 md:-translate-y-1/2 absolute z-50 
     p-4 sm:p-6 md:p-8 lg:p-10  connected 
  `}>
      <div className=' flex flex-col-reverse sm:flex-row sm:justify-between w-full '>
  <p className='text-md font-black w-12/12 md:w-6/12 xl:w-2/5 flex justify-center  tracking-tighter '>Edit Subcategory</p>
        <span onClick={() => { setShowEditSubCategory(false) }} className=' cursor-pointer text-lg w-12/12  xl:w-8/12  flex justify-end items-center pe-1'><IoMdClose /></span>
      </div>

      <div className=' w-full   flex flex-col  sm:flex-row 
    '>
 <div className='con w-full    space-y-5 bg-[#F8F9FC] flex-col mt-5 '  >

          <div className=' rounded p-6 pt-3 bg-white shadow-md'>
            <p className='py-2 text-[#B58C43] font-bold text-[18px]'>Subcategory</p>
            <div className='flex justify-between w-full  space-x-2 md:space-x-4'>
              <input className='px-4 py-3 rounded bg-[#F8F9FC] w-[99%] text-[#8C8C8C]' value={editName} placeholder='Write the subcategory' />

            </div>

          </div>
          <div className=' rounded p-6 pt-3 bg-white shadow-md '>
            <p className='py-2 text-[#B58C43] font-bold text-[18px]'>Main Category</p>

            <div className='flex justify-between w-full space-x-2 md:space-x-4'>

              <select className='w-[99%] px-4 py-3 rounded  text-[#8C8C8C] bg-[#F8F9FC]  focus:border-black 
       '>
                <option value="" disabled selected>Select </option>
              </select>

            </div>

          </div>

          <div className='flex justify-center  sm:justify-end   py-2 '>
            <button className='p-2 px-4 font-black bg-[#281D14] text-white rounded-lg flex justify-center items-center whitespace-nowrap'>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


























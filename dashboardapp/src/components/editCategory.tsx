import React, { useContext, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { FiUploadCloud } from "react-icons/fi";
import AppContext from '../appContext';




export default function EditCategory() {



  const context = useContext(AppContext);

  if (!context) {
    return <div>Error: Context is not available</div>;
  }

  const { setShowEditCategory, editName } = context;




  return (
    <div className={`h-screen
overflow-scroll

bg-[#F8F9FC] w-full sm:w-11/12 md:w-9/12 xl:w-6/12 font-mulish  shadow-lg 
     min-h-screen sm:min-h-0 sm:h-auto sm:max-h-4/5  flex-col justify-center top-0 left-1/2 
     transform -translate-x-1/2 sm:top-auto  md:top-1/2 md:-translate-y-1/2 absolute z-50 
     p-4 sm:p-6 md:p-8 lg:p-10  connected lg:rounded-lg 
  `}>




      <div className=' flex flex-col-reverse sm:flex-row sm:justify-between w-full '>




        <p className='text-md font-bold w-12/12 md:w-6/12 xl:w-2/5 flex justify-center  tracking-tighter'>Edit Category</p>
        <span onClick={() => { setShowEditCategory(false) }} className=' cursor-pointer text-lg w-12/12  xl:w-8/12  flex justify-end items-center pe-1'><IoMdClose /></span>
      </div>

      <div className=' w-full   flex flex-col  sm:flex-row '>




        <div className='flex  justify-center py-6  mt-5 w-12/12  sm:w-5/12 md:w-7/12 lg:w-5/12 xl:w-6/12  '>
          <div className=' rounded-divM'><img className='pey' src="bar.svg"></img></div>
        </div>





        <div className='xl:w-8/12  lg:w-8/12   md:w-7/12    space-y-5 bg-[#F8F9FC] flex-col mt-5'  >

          <div className=' rounded p-6 pt-3 bg-white'>
            <p className='py-2 text-[#B58C43] font-bold text-[18px]'>Change Image</p>
            <div className='flex justify-between w-full  space-x-2 md:space-x-4'>
              <input className='px-4 rounded bg-[#F8F9FC] w-[60%] ' placeholder='Upload Image' />
              <button className='p-3 font-bold bg-[#FFB01D] rounded-lg w-28 flex items-center'><FiUploadCloud className='mr-2' />Upload</button>
            </div>

          </div>
          <div className=' rounded p-6 pt-3 bg-white'>
            <p className='py-2 text-[#B58C43] font-bold text-[18px]'>Change Title</p>

            <div className='flex justify-between w-full space-x-2 md:space-x-4'>
              <input className='text-[#8C8C8C] px-4 rounded bg-[#F8F9FC] w-[100%] p-3 ' value={editName} placeholder='Write the title' />

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





















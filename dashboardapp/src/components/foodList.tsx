import React, { Dispatch, SetStateAction, useContext } from 'react'
import { PiLessThanLight } from "react-icons/pi";
import { PiGreaterThanLight } from "react-icons/pi";
import AppContext from '../appContext';
import SubcFoodList from "./subcFoodList"


import { IoEllipsisHorizontal } from "react-icons/io5";



export default function FoodList() {  


  const context = useContext(AppContext);
  

  if (!context) {
    return <div>Error: Context is not available</div>;
  }
  
  const { foodListData,setShowAddFoodList } = context;

  console.log(foodListData);

  return (
    <div className='bg-[#F8F9FC] relative z-50'>
      <div className='dMain flex-col font-mulish lg:mx-10 shadow-md'>
        <div className='grid text-[9px] sm:text-lg bg-white items-center grid-cols-6 px-1 p-4 lg:p-8 lg:py-5 text-[#B58C43] font-bold'>
          <p className=''>Title</p>
          <p className=''>Price</p>
          <p className=''>Category</p>
          <p className=''>Subcategory</p>
          <p className='text-center'>Image</p>
          <div className='flex justify-end'>
            <button onClick={()=>{setShowAddFoodList(true)}} className='text-[6px] px-2 py-1 sm:text-lg sm:p-3 text-black bg-[#FFB01D] rounded w-fit sm:w-28 flex justify-center items-center whitespace-nowrap'>
              Add New
            </button>
          </div>
        </div>

        <SubcFoodList /> 

        <hr className='flex mx-auto w-[97%]'></hr>

        <div className='flex justify-end items-center mx-10 mt-4 space-x-1 font-roboto text-[#8A8A8A]'>
          <span className='flex justify-center text-xl p-1 w-[25px] h-fit rounded-sm bg-white'>
            <PiLessThanLight />
          </span>
          <span className='flex justify-center text-sm p-1 w-[25px] h-fit rounded-sm bg-[#FFB01D] text-white'>1</span>
          <span className='flex justify-center text-sm p-1 w-[25px] h-fit rounded-sm bg-white'>2</span>
          <span className='flex justify-center text-sm p-1 w-[25px] h-fit rounded-sm bg-white'>3</span>
          <span className='flex justify-center text-sm p-1 w-[25px] h-fit rounded-sm bg-white'>4</span>
          <span className='flex justify-center items-end text-sm p-1 w-[25px] h-fit rounded-sm bg-white'>...</span>
          <span className='flex justify-center text-sm p-1 w-[25px] h-fit rounded-sm bg-white'>14</span>
          <span className='flex justify-center text-xl p-1 w-[25px] h-fit rounded-sm bg-white'>
            <PiGreaterThanLight />
          </span>
        </div>

        <div className='flex justify-end py-6 px-8'>
          <button className='p-2 px-4 font-black bg-[#281D14] text-white rounded-lg flex justify-center items-center whitespace-nowrap'>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

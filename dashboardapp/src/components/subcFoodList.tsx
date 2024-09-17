import React, { Dispatch, SetStateAction, useContext } from 'react'

import AppContext from '../appContext';

export default function SubcFoodList() {

function funkcija(e: React.MouseEvent<HTMLParagraphElement>){
  console.log(e.currentTarget.textContent );
}

const context = useContext(AppContext);
  

  if (!context) {
    return <div>Error: Context is not available</div>;
  }
  
  const { foodListData,setShowEditFoodList,setEditFoodListData } = context;

  return (

    
    <div>
      {foodListData.map((item, index: number) => (
        <div
          key={index}
          className='grid bg-white items-center grid-cols-6 p-1 lg:px-8 font-black tracking-tighter text-[8px] sm:text-lg'
        >
          <p onClick={funkcija}>{item.title}</p> 
          <p>{item.price}</p>
          <p>{item.category}</p>
          <p>{item.subcategory}</p>
          <p className='text-center flex justify-center'>
            <span className='rounded-divC'>
              <img className='pey min-w-full min-h-full' src='/coctail.svg' alt="Icon" />
            </span>
          </p>

          <div className='flex flex-col sm:flex-row items-center sm:justify-end space-x-1 xl:space-x-6 text-[#8A8A8A] space-y-1'>
            <button onClick={()=>{
              setShowEditFoodList(true)}} className='p-1 lg:p-3 font-black bg-[#F8F9FC] rounded-lg w-fit sm:w-28 flex justify-center items-center'>
              Edit
            </button>
            <button className='p-1 lg:p-3 font-black bg-[#F8F9FC] rounded-lg w-fit sm:w-28 flex justify-center items-center'>
              Delete
            </button>
          </div>
          <hr className='flex mx-auto w-[97%]' />
        </div>
      ))}
    </div>
  );
}

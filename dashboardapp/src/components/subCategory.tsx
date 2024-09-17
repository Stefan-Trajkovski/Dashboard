import React, { useContext, useEffect, useState } from 'react'
import SubCategoryHelper from './subCategoryHelper';
import AppContext from '../appContext';
import AddSubCategory from './addSubCategory';


 
 export default function SubCategory()  {



   const context=useContext(AppContext);

   if (!context) {
      return <div>Error: Context is not available</div>;
    }
    const {setShowAddSubCategory,showAddSubCategory}=context





   return (
      <div className='bg-[#F8F9FC] relative z-50 '>

<div className={showAddSubCategory ? "block fixed inset-0 bg-black bg-opacity-50 " : "hidden"} >
          <AddSubCategory  ></AddSubCategory>
        </div>

         <div className=' dMain flex-col  font-mulish sm:mx-10  grid-col gap-5 shadow-md '>



            <div className='grid bg-white items-center grid-cols-3 ps-1 pe-1 sm:p-8 text-[#B58C43] font-bold pb-3'>
               <p className=' '>Subcategory Name</p>
               <p className=' text-center'>Main Category</p>
               <div className='flex justify-end pe-1 sm:pe-0'>
                  <button onClick={()=>{setShowAddSubCategory(true)}} className=' p-1 sm:p-3   text-black bg-[#FFB01D] rounded-lg w-28 flex justify-center items-center whitespace-nowrap'>Add New</button>
               </div> 
            </div>
            <hr className='flex mx-auto w-[97%] '></hr>
            <SubCategoryHelper></SubCategoryHelper>

            <div className='flex  justify-end bg-white  py-6 px-2 sm:px-8 '>


               <button className='p-2  px-4 font-black bg-[#281D14] text-white rounded-lg flex justify-center items-center whitespace-nowrap'>
                  Save Changes
               </button>


            </div>







         </div>





      </div>
   )
}

import React, { useContext } from 'react'
import { FiUploadCloud } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import AppContext from './appContext';


export default function EditFoodListM() {

  const context = useContext(AppContext);

  if (!context) {
    return <div>Error: Context is not available</div>;
  }

  const { setShowEditFoodList } = context;

  return (
    <div className='flex items-center h-full '>
      <div className="
      h-screen
overflow-scroll
      dMain bg-[#F8F9FC] w-full xl:w-[97%] h-full xl:my-5 mx-auto pointer-events-auto font-mulish  
          flex flex-col xl:rounded-lg box-border  ">

        <div className=' leading-6   pb-6  sm:py-6 text-xl  flex justify-between items-center md:mx-5 '>
          <div className='font-black ps-2  sm:ps-0 '>
            Edit Lamb Chops
          </div>
          <div>
            <span onClick={() => { setShowEditFoodList(false) }} className=' cursor-pointer text-lg w-12/12  xl:w-8/12  flex justify-end items-center pe-1'><IoMdClose /></span>
          </div>
        </div>
        <div className='w-full flex flex-col xl:flex-row box-border space-y-5 xl:space-y-0 '>


          <div className='left w-full xl:w-8/12 space-y-4 px-5'>
            <div className='w-full flex flex-col md:flex-row gap-5'>
              <div className='edit logo w-full md:w-6/12 p-4 bg-white shadow-md'>
                <p className='ps-2 text-[#B58C43] font-bold text-lg'>Change Image</p>
                <div className='flex p-3 justify-between gap-8'>
                  <input className='rounded-md ps-4 pe-2 bg-[#F8F9FC] w-full' placeholder='Upload logo'></input>
                  <button className='p-3 font-bold bg-[#FFB01D] rounded-lg w-28 flex items-center'>
                    <FiUploadCloud className='mr-2' />Upload
                  </button>
                </div>
              </div>

              <div className='edit logo w-full md:w-6/12 p-4 bg-white shadow-md'>
                <p className='ps-2 text-[#B58C43] font-bold text-lg'>Title</p>
                <div className='p-3'>
                  <input className='rounded-md p-3 ps-4 pe-2 bg-[#F8F9FC] w-full' placeholder='Lamb Chops'></input>
                </div>
              </div>
            </div>


            <div className='w-full flex flex-col md:flex-row gap-5'>
              <div className='flex w-full md:w-6/12 shadow-md'>
                <div className='connected logo w-6/12 p-4 bg-white shadow-none'>
                  <p className='ps-2 text-[#B58C43] font-bold text-lg whitespace-nowrap'>Full Price</p>
                  <div className='p-3'>
                    <input className='rounded-md p-3 ps-4 pe-2 bg-[#F8F9FC] text-[#8C8C8C] w-full' value='AED185.00' placeholder='Write The Price'></input>
                  </div>
                </div>
                <div className='connected logo w-6/12 p-4 bg-white shadow-none'>
                  <p className='ps-2 text-[#B58C43] font-bold text-lg whitespace-nowrap'>One Piece</p>
                  <div className='p-3'>
                    <input className='rounded-md p-3 ps-4 pe-2 bg-[#F8F9FC] text-[#8C8C8C] w-full' value='AED95.00' placeholder='Write The Price'></input>
                  </div>
                </div>
              </div>

              <div className=' edit logo w-full md:w-6/12 p-4  flex flex-col  justify-center bg-white shadow-md  '>
                <p className='ps-2 text-[#B58C43] font-bold text-lg'>Select Category</p>
                <div className='flex p-3 justify-between space-x-8'>
                  <select className='w-[99%] px-4 py-3 rounded text-[#8C8C8C] bg-[#F8F9FC] border border-gray-300 focus:border-black 
       '>
                    <option value="" disabled selected>Select </option>
                  </select>

                </div>
              </div>
            </div>

            <div className='w-full flex flex-col md:flex-row border-box  md:space-x-5 space-y-5 md:space-y-0 '>
              <div className=' edit logo w-full md:w-6/12   flex flex-col  p-4 justify-center bg-white shadow-md'>
                <p className='ps-2 text-[#B58C43] font-bold text-lg'>Food Allergens</p>
                <div className='flex p-3 justify-between space-x-8'>
                  <select className='w-[99%] px-4 py-3 rounded text-[#8C8C8C] bg-[#F8F9FC] border border-gray-300 focus:border-black 
                '>
                    <option value="" disabled selected>Select </option>
                  </select>
                </div>
              </div>

              <div className='  logo w-full md:w-6/12  flex flex-col  p-4 justify-center bg-white shadow-md ms-0 '>
                <p className='ps-2 text-[#B58C43] font-bold text-lg'>Select Subcategory</p>
                <div className='flex p-3 justify-between space-x-8'>
                  <select className='w-[99%] px-4 py-3 rounded text-[#8C8C8C] bg-[#F8F9FC] border border-gray-300 focus:border-black 
                '>
                    <option value="" disabled selected>Select </option>
                  </select>
                </div>
              </div>
            </div>




            <div className='w-full flex flex-col md:flex-row gap-5 '>

              <div className='edit logo w-full md:w-6/12  flex flex-col  p-4 justify-center bg-white shadow-md '>
                <p className='ps-2 text-[#B58C43] font-bold text-lg'>Recommended Sides</p>
                <div className='flex p-3 justify-between space-x-8'>
                  <select className='w-[99%] px-4 py-3 rounded text-[#8C8C8C] bg-[#F8F9FC] border border-gray-300 focus:border-black 
       '>
                    <option value="" disabled selected>Select </option>
                  </select>
                </div>
              </div>

              <div className=' grid text-[#B58C43] justify-items-center  md:flex  grid-cols-3 pb-2  md:w-6/12 justify-around items-center bg-white space-x-1 space-y-2 shadow-md   '>

                <div className=' pt-2 '>
                  <p>
                    Kcal
                  </p>
                  <input className='bg-[#F8F9FC] text-[#8C8C8C] ps-1 py-2 rounded' value={'400'} size={4} placeholder='Type'></input>
                </div>

                <div>
                  <p>
                    Grams
                  </p>
                  <input className='bg-[#F8F9FC] text-[#8C8C8C] ps-1 py-2 rounded' value={'510'} size={4} placeholder='Type'></input>
                </div>

                <div>
                  <p>
                    Proteins
                  </p>
                  <input className='bg-[#F8F9FC] text-[#8C8C8C] ps-1 py-2 rounded' value={'30'} size={4} placeholder='Type'></input>
                </div>

                <div>
                  <p>
                    Carbs
                  </p>
                  <input className='bg-[#F8F9FC] text-[#8C8C8C]  ps-1 py-2 rounded' size={4} value={'56'} placeholder='Type'></input>
                </div>

                <div>
                  <p>
                    Fats
                  </p>
                  <input className='bg-[#F8F9FC] text-[#8C8C8C] ps-1 py-2 rounded' value={'24'} size={4} placeholder='Type'></input>
                </div>
              </div>
            </div>
          </div>






          <div className='right  w-full  xl:w-4/12 flex flex-col  space-y-5 border-box '>

            <div className=' h-3/6 flex flex-col p-4 bg-white border-box mx-5 shadow-md'>
              <p className='ps-2 text-[#B58C43] font-bold text-lg'>Description</p>
              <div className="flex p-3 justify-between space-x-8 h-full">
                <textarea
                  id="message"
                  className="block p-2.5 text-lg  resize-none  w-full text-sm text-[#8C8C8C] bg-gray-50 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write the description"
                  value={'Relish the tempting aroma of lamb chops filling the room. These melt in your mouth lamb cuts will take you on a wholesome savory journey.'}>

                </textarea>
              </div>
            </div>


            <div className=' h-3/6 flex flex-col p-4 bg-white mx-5 shadow-md'>
              <p className='ps-2 text-[#B58C43] font-bold text-lg'>Ingredients</p>
              <div className="flex p-3 justify-between space-x-8 h-full">
                <textarea
                  id="message"

                  className="text-[#8C8C8C] block p-2.5 text-lg   resize-none  w-full  h-fit 
     text-sm  bg-gray-50 rounded-lg shadow-md
      focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
       dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
       dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write the Ingredients" value={'Lamb Chops Meat | Lamb Tenderloin Meat | Teriyaki Sauce | Mixoil | Butter'}>
                </textarea>
              </div>
            </div>
     </div>

        </div>

      </div>
    </div>
  )
}

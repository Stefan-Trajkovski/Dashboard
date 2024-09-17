import React, { useContext } from 'react'
import { SlMagnifier } from "react-icons/sl";
import { PiDiscordLogoBold } from "react-icons/pi";
import AppContext from '../appContext';

export default function Navigation() {

  const context=useContext(AppContext);

  if (!context) {
    return <div>Error: Context is not available</div>;
  }
  
  const {showAddManageUsers,navigationName} = context;
  




  return (


    <div className={`    flex flex-col-reverse md:py-7  md:flex-row  mx-5 md:mx-10 justify-between 
    h-fit md:h-2/3 items-center   ${showAddManageUsers ? '' : 'relative z-50'} `}>

      <div className=' flex flex-col md:flex-row w-full md:justify-between items-center md:space-x-2'>
        <h1 className='text-left font-bold text-[20px] leading-[28px]  text-[#281D14]  font-mulish  pb-3 md:pb-0'>{navigationName}</h1>

        <div className='flex space-x-2 w-full md:fit md:justify-end pb-3 md:pb-0 md:pe-2'>
          <div className='text-base flex items-center  rounded-lg  bg-[#F8F9FC]  space-x-2 w-full md:w-fit '>

            <input placeholder="Search by anything" className='bg-[#F8F9FC] ps-5  pe-2 text-[#8A8A8A] w-full md:w-fit py-2'  ></input>
            <SlMagnifier className="text-blue-500 text-3xl bg-yellow-200 p-2 h-full " />
          </div>
        </div>



      </div>

      <div className=' flex w-full md:w-fit justify-end md:justify-none  items-center space-x-2 '>
        <p className='whitespace-nowrap' >Hello loremp!</p>
        <PiDiscordLogoBold className=' flex rounded-xl bg-white text-3xl ' size={28} />
      </div>
    </div>

  )
}

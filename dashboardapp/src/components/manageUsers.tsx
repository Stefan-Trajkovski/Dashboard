import React, { useContext, useState } from 'react'
import MAddNew from './mAddNew'
import AppContext from '../appContext';

export default function ManageUsers() {
  const context=useContext(AppContext);

  if (!context) {
    return <div>Error: Context is not available</div>;
  }
  
  const {setShowAddManageUsers,showAddManageUsers} = context;



  return (
    <div className='bg-[#F8F9FC] h-screen   pt-3 lg:pt-10 relative'>
      <div className='  flex-col pt-10 font-mulish lg:mx-10  grid-col gap-5 shadow-md bg-white'>



        <div className='flex justify-between items-center  w-full px-5  lg:px-8 pb-8 ' >
          <p className='text-[#B58C43] text-base lg:text-lg'>Manage user accounts and perform actions like deleting users</p>
          <button onClick={() => { setShowAddManageUsers(true) }} className='lg:p-3 font-black bg-[#FFB01D] rounded-lg w-28 flex justify-center items-center'>Add New</button>
        </div>

        <div className={showAddManageUsers ? "block fixed inset-0 bg-black bg-opacity-50 " : "hidden"} >
          <MAddNew  ></MAddNew>
        </div>

        <div className="overflow-x-auto  lg:px-8  pb-16">
          <table className="min-w-full divide-y divide-gray-200 hidden sm:table">
            <thead className="bg-gray-50">
              <tr>
                <th className="border-2 px-4 py-3 text-left text-sm lg:text-base font-medium text-gray-500 tracking-wider">User ID</th>
                <th className="border-2 px-4 py-3 text-left text-sm lg:text-base font-medium text-gray-500 tracking-wider">Username</th>
                <th className="border-2 px-4 py-3 text-left text-sm lg:text-base font-medium text-gray-500 tracking-wider">E-mail</th>
                <th className="border-2 px-4 py-3 text-left text-sm lg:text-base font-medium text-gray-500 tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-200">
              <tr>
                <td className="border-2 px-4 py-2 whitespace-nowrap text-sm lg:text-base">1</td>
                <td className="border-2 px-4 py-2 whitespace-nowrap text-sm lg:text-base">lorem ipsum</td>
                <td className="border-2 px-4 py-2 whitespace-nowrap text-sm lg:text-base">loremipsum@gmail.com</td>
                <td className="border-2 px-4 py-2 whitespace-nowrap">
                  <button className="p-2 lg:p-3 font-bold bg-[#FFB01D] rounded-lg w-24 lg:w-28 flex justify-center items-center text-sm lg:text-base">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border-2 px-4 py-2 whitespace-nowrap text-sm lg:text-base">2</td>
                <td className="border-2 px-4 py-2 whitespace-nowrap text-sm lg:text-base">lorem ipsum</td>
                <td className="border-2 px-4 py-2 whitespace-nowrap text-sm lg:text-base">loremipsum@gmail.com</td>
                <td className="border-2 px-4 py-2 whitespace-nowrap">
                  <button className="p-2 lg:p-3 font-bold bg-[#FFB01D] rounded-lg w-24 lg:w-28 flex justify-center items-center text-sm lg:text-base">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          {/* MOBILEN */}
          <div className="block sm:hidden">
            <div className="bg-white  mb-4 rounded-lg">
              <div className="px-4 py-2 space-y-3">
                <p className="font-medium text-sm space-x-1 "> <span className=' p-1'>User ID: </span> <span className="font-normal p-1">1</span></p>
                <p className="font-medium text-sm space-x-1"><span className=' p-1'>Username:</span> <span className="font-normal  p-1">lorem ipsum</span></p>
                <p className="font-medium text-sm space-x-1"><span className=' p-1'>E-mail: </span>   <span className="font-normal  p-1">loremipsum@gmail.com</span></p>
                <button className="p-2 mt-2 font-bold bg-[#FFB01D] rounded-lg  flex justify-start items-center text-sm">
                  Delete
                </button>
              </div>
            </div>
            <div className="bg-white  mb-4 rounded-lg">
              <div className="px-4 py-2 space-y-2">
                <p className="font-medium text-sm space-x-2"> <span className='p-1'>User ID: </span> <span className="font-normal p-1">2</span></p>
                <p className="font-medium text-sm space-x-2"><span className='p-1'>Username:</span> <span className="font-normal p-1">lorem ipsum</span></p>
                <p className="font-medium text-sm space-x-2"><span className='p-1'>E-mail: </span>   <span className="font-normal p-1">loremipsum@gmail.com</span></p>
                <button className="p-2 mt-2 font-bold bg-[#FFB01D] rounded-lg  flex justify-start items-center text-sm">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>





      </div>





    </div>
  )
}

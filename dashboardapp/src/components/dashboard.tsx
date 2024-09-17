import React from 'react'
import { FiUploadCloud } from "react-icons/fi";





export default function Dashboard() {
    return (
        <div className='bg-[#F8F9FC] w-full relative z-50 '>
            <div className='dMaind flex flex-col   sm:grid-cols-2 pt-10 font-mulish  gap-5 w-full shadow-md '>

                <div className='left flex flex-col gap-y-5 w-full  sm:px-10'>

                    <div className='kafen flex flex-col xl:flex-row w-full xl:space-x-2 gap-5'>

                        <div className='gold w-full xl:w-8/12 grid gap-5'>

                            <div className='zelen flex flex-col sm:flex-row gap-7'>
                                <div className='doors py-14 text-orange-900 w-full sm:w-2/6 text-6xl text-center bg-white shadow-md'>
                                    Doors
                                </div>

                                <div className=' edit logo w-full sm:w-4/6 flex flex-col p-4 justify-center bg-white shadow-md'>
                                    <p className='ps-2 text-[#B58C43] font-bold text-lg'>Edit Logo Image</p>
                                    <div className='flex p-3 justify-between space-x-2'>
                                        <input className='rounded-md ps-4 pe-2 bg-[#F8F9FC] w-full ' placeholder='Upload logo'></input>
                                        <button className='p-3 font-bold bg-[#FFB01D] rounded-lg w-28 flex items-center'>
                                            <FiUploadCloud className='mr-2' />Upload
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className='liljakovo bg-white p-4 ps-8 shadow-md'>
                                <p className='text-[#281D14] font-bold text-xl pb-2'>Main Title</p>
                                <input className='rounded-md ps-4 pe-2 bg-[#F8F9FC] py-4 w-full ' placeholder='A Momentous Journey'></input>
                            </div>

                        </div>
                        <div className='shadow-md flex flex-col  sm:flex-row  items-center  justify-center w-full  xl:w-2/6 bg-white space-x-0  2xl space-x-0'>
                            <div className='rounded-div '>
                                <img className=' pey min-w-full min-h-full ' src="/bar.svg"></img>
                            </div>

                            <div className='p-4    space-y-10 pt-12 '>
                                <div className='space-y-4'>
                                    <p className='text-[#B58C43] font-bold'>Edit Image</p>
                                    <p>Main Image</p>
                                </div>
                                <button className='p-3 font-bold rounded-lg  bg-[#FFB01D] flex items-center w-28'><FiUploadCloud className='mr-2' /> Upload</button>
                            </div>
                        </div>

                    </div>

                    <div className='descriptionMain flex flex-col xl:flex-row gap-5'>
                        <div className='bg-white p-4 ps-8 w-full xl:w-8/12 shadow-md'>
                            <p className='text-[#281D14] font-bold text-xl  pb-2'>Description</p>
                            <textarea className='rounded-md ps-4 pe-2 bg-[#F8F9FC] py-4 w-full resize-none' placeholder='Fusion Fine Dining in Dubai Amidst a Spellbinding Setting'></textarea>
                        </div>

                        <div className='p-4 ps-8 flex-col flex w-full xl:w-4/12 bg-white space-y-2 shadow-md'>
                            <p className='text-[#281D14] text-center font-bold text-xl'>Select Language</p>
                           
                            <div className='buttons  flex sm:flex-row flex-col space-x-1 items-center
                              justify-center  lg:items-center h-5/6 space-y-2 sm:space-y-0'>

                                <button className='bg-[#FFB01D]  p-2   font-bold w-24 rounded-lg '>English</button>
                                <button className='w-24 p-2 font-bold'>العربية</button>
                                <button className='w-24 p-2 font-bold' >Русский</button>
                            </div>
                        </div>
                    </div>

                    <div className='socialMediaMain flex flex-col xl:flex-row gap-5 '>
                        <div className='bg-white p-4 ps-8 w-full xl:w-8/12 shadow-md '>
                            <p className='text-[#281D14] font-bold text-xl'>Social Media Icons</p>
                            <div className='grid gap-y-3 py-2'>
                                <input className='rounded-md ps-4 pe-2 bg-[#F8F9FC] py-4 w-full' placeholder='Facebook'></input>
                                <input className='rounded-md ps-4 pe-2 bg-[#F8F9FC] py-4 w-full' placeholder='Instagram'></input>
                                <input className='rounded-md ps-4 pe-2 bg-[#F8F9FC] py-4 w-full' placeholder='Website'></input>
                                <input className='rounded-md ps-4 pe-2 bg-[#F8F9FC] py-4 w-full' placeholder='Twitter'></input>
                                <input className='rounded-md ps-4 pe-2 bg-[#F8F9FC] py-4 w-full' placeholder='Snapchat'></input>
                                <input className='rounded-md ps-4 pe-2 bg-[#F8F9FC] py-4 w-full' placeholder='Tripadvisor'></input>
                                <input className='rounded-md ps-4 pe-2 bg-[#F8F9FC] py-4 w-full' placeholder='Whatsapp'></input>
                                <input className='rounded-md ps-4 pe-2 bg-[#F8F9FC] py-4 w-full' placeholder='Linktr'></input>
                            </div>
                        </div>

                        <div className='p-2 ps-8  flex  justify-end w-full   xl:w-4/12 '>
                            <button className='p-4   my-20 bg-[#B58C43] h-fit w-44 rounded-xl text-white font-bold '>Save Changes</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

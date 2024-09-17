import React, { useContext } from 'react'
import AppContext from '../appContext';
import EditCategory from './editCategory';
export default function CategoryHelper() {

  const context = useContext(AppContext);


  if (!context) {
    return <div>Error: Context is not available</div>;
  }

  const { categoriesData, setEditName, setShowEditCategory, showEditCategory } = context;




  return (
    <div>
      <div className={showEditCategory ? "block fixed inset-0 bg-black bg-opacity-50 " : "hidden"} >
        <EditCategory />
      </div>
      {categoriesData.map((item, index: number) => (
        <div key={index}>
          <div className='grid bg-white items-center grid-cols-3 sm:p-3 sm:px-8'>
            <p className='font-bold  flex ps-1 sm:ps-0 sm:block whitespace-nowrap'>{item.title}</p>
            <p className=' text-center flex justify-center'><span className='rounded-divC '>
              <img className='pey min-w-full min-h-full' src="/coctail.svg"></img></span></p>
            <div className='flex justify-end space-x-1  pe-2 sm:pe-0 sm:space-x-6 text-[#8A8A8A] '>
              <button onClick={() => {
                setEditName(item.title)
                setShowEditCategory(true)
              }} name="Salads" className='p-1 sm:p-3   font-black bg-[#F8F9FC]  rounded-lg w-28 flex justify-center items-center'>Edit</button>
              <button className='p-1 sm:p-3   font-black bg-[#F8F9FC]  rounded-lg w-28 flex justify-center items-center'>Delete</button>
            </div>

          </div>
          <hr className='flex mx-auto w-[97%] '></hr>
        </div>
      ))}
    </div>
  )
}

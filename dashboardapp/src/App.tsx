import React, { useContext, useState, useEffect } from 'react';
import Navigation from './components/navigation';
import Dashboard from './components/dashboard';
import ManageUsers from './components/manageUsers';
import Categories from './components/categories';
import SubCategory from './components/subCategory';
import './App.css';

import FoodList from './components/foodList';
import FoodListM from './components/foodListM';
import EditFoodListM from './editFoodListM';
import AppContext from './appContext';
import MAddNew from './components/mAddNew';

interface FoodItem {
  title: string;
  category: string;
  subcategory: string;
  price: string | number;
}



function App() {
  const [selected, setSelected] = useState<string>('dashboard');
  const [showSub, setShowSub] = useState<boolean>(false);
  const [buttonsBlocked, setButtonsBlocked] = useState<boolean>(false);
  const [showDashboard, setShowDashboard] = useState<boolean>(true);
  const [openAddCategory, setOpenAddCategory] = useState<boolean>(false);
  const [openEditCategory, setOpenEditCategory] = useState<boolean>(false);


  const context = useContext(AppContext);
  if (!context) {
    return <div>Error: Context is not available</div>;
  }

  // Check if context is undefined (to handle the case where it's not wrapped by the provider)
  const { showAddSubCategory, showEditCategory, showAddCategory, showAddFoodList, showEditFoodList,
    showEditSubCategory, showAddManageUsers, navigationName, setNavigationName } = context || {};

  function handleClick(event: React.MouseEvent<HTMLLIElement | HTMLDivElement>, name: string) {

    if (name != "SubCategory") {
      setNavigationName(name);
    }

    if (name == "Categories" || name == "SubCategory") {
      setShowSub(true);
      setNavigationName('Categories')
    }
    else {
      console.log(name)
      setNavigationName(name)
    }
    if (name == "SubCategory") {
      setNavigationName(name)

    }
  }

  return (


    <div className={`w-full h-screen min-h-screen overflow-auto relative  flex flex-col sm:flex-row App 
  
    ${openAddCategory ? "pointer-events-none opacity-75" : "pointer-events-auto"}`}>

      <div className={` absolute min-h-full max-h-full my-0  w-full   ${showAddFoodList || showEditFoodList ? 'z-50' : ''}`} >
        <div className={(showAddFoodList || showEditFoodList) ? "block fixed inset-0 bg-black bg-opacity-50 " : "hidden"} >
          {showEditFoodList && <EditFoodListM></EditFoodListM>}
          {showAddFoodList && <FoodListM></FoodListM>}
        </div>
      </div>

      <div className=" mb-10 sm:mb-0  h-fit sm:h-screen   w-full   sm:w-1/5  sm:sticky top-0  sm:overflow-auto  bg-[#281D14] left 
        m-auto my-0 sm:flex items-center flex-col justify-between  sm:py-6 font-mulish  text-white">

        <div className=' justify-center w-full relative sm:w-full sm:ps-6 sm:pe-3'  >

          <div >
            <h1 className='text-5xl md:text-3xl lg:text-5xl text-[#b58c43] p-1 pt-0 sm:p-4 sm:pb-12 flex justify-center sm:justify-start '>Doors</h1>
          </div>

          <div className=' flex  '>
            <ul className=" w-full     sm:space-y-1 flex flex-row sm:flex-col  justify-between     ">

              <li data-name="dashboard" onClick={(e) => { handleClick(e, "Dashboard") }} className={` ps-1 sm:ps-5 py-2  cursor-pointer
            ${navigationName === 'Dashboard' ? "bg-[#B58C4314] text-[#B58C43]" : ""}`}>Dashboard</li>

              <div className=' w-fit  sm:w-full   flex flex-col  items-start space-y-1 sm:space-y-0'>
                <li
                  data-name="categories"
                  onClick={(e) => handleClick(e, "Categories")}
                  className={`ps-1 sm:ps-5  w-full py-2 cursor-pointer ${(navigationName === 'Categories' || navigationName === 'SubCategory') ? 'bg-[#B58C4314] text-[#B58C43]' : ''}`}
                >
                  Categories
                </li>
                <ul className={` self-center sm:self-end lg:self-start lg:ps-12   text-xs py-2 bg-[#281D14] ${(navigationName === 'Categories' || navigationName === 'SubCategory') ? 'block' : 'hidden'}`}>

                  <li className={`cursor-pointer ${navigationName === 'SubCategory' ? 'text-[#B58C43]' : ''}`} onClick={(e) => handleClick(e, "SubCategory")}>SubCategory</li>
                </ul>
              </div>
              <li data-name="foodList" onClick={(e) => { handleClick(e, "FoodList") }} className={`ps-1 sm:ps-5 py-2 pe-1 cursor-pointer 
            ${navigationName === 'FoodList' ? "bg-[#B58C4314] text-[#B58C43]" : ""}`}>Food List</li>
            </ul>

          </div>
        </div>


        <div className={` justify-center w-full relative sm:w-full sm:ps-6 sm:pe-3    `} >
          <div className={`w-fit sm:w-full ps-1 py-2 sm:ps-5 cursor-pointer ${navigationName === 'ManageUsers' ? "bg-[#B58C4314] text-[#B58C43]" : ""}`}
            onClick={(e) => { handleClick(e, "ManageUsers") }}>Manage Users</div>
        </div>
      </div>
      <div className={`right  w-full h-fit sm:w-4/5 sm:h-1/6  shadow-lg flex-col ${showAddFoodList || showEditFoodList ? 'z-20' : ''} `}>
        <Navigation ></Navigation>
        {navigationName == 'Dashboard' && <Dashboard />}
        {navigationName == 'Categories' && <Categories />}
        {navigationName == 'SubCategory' && <SubCategory />}
        {navigationName == 'FoodList' && <FoodList />}
        {navigationName == 'ManageUsers' && <ManageUsers />}

      </div>

    </div>


  );
}

export default App;

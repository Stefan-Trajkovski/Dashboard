import React, { useContext, useState,useEffect } from 'react';



import Navigation from './components/navigation';
import Dashboard from './components/dashboard';
import ManageUsers from './components/manageUsers';
import M_addNew from './components/mAddNew';
import Categories from './components/categories';
import SubCategory from './components/subCategory';
import './App.css';
import AddCategory from './components/addCategory';
import EditCategory from './components/editCategory';
import AddSubCategory from './components/addSubCategory';
import EditSubCategory from './components/editSubCategory';
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
  
  // Check if context is undefined (to handle the case where it's not wrapped by the provider)
  const { showAddSubCategory,showEditCategory,showAddCategory,showAddFoodList,showEditFoodList,showEditSubCategory,showAddManageUsers } = context || {};



  const [editName, setEditName] = useState<string>('');

  function blokirajKopcinja() {
    setButtonsBlocked(!buttonsBlocked);
  }


  function handleClick(event: React.MouseEvent<HTMLLIElement | HTMLDivElement>, name: string) {

    if (name != "subCategory") {
      setSelected(name);
    }

    if (name == "categories" || name == "subCategory") {
      setShowSub(true);
      setSelected('categories')
    }
    else {
      console.log(name)
      setSelected(name)
    }
    if (name == "subCategory") {
      setSelected(name)

    }

    console.log("Selected e " + selected);
  }

  function handleDataFromDashboard(data: boolean) {
    setShowDashboard(data);
  }


  function addCategoryChild(data: boolean) {
    console.log(data)
    setOpenAddCategory(data);

  }



  return (

    
    <div className={`w-full h-screen min-h-screen overflow-auto relative  sm:flex App 



    ${openAddCategory ? "pointer-events-none opacity-75" : "pointer-events-auto"}`}>

      <div className={` absolute min-h-full max-h-full my-0  w-full   ${showAddFoodList || showEditFoodList ? 'z-50' : ''}`} >
      <div className={(showAddFoodList || showEditFoodList) ? "block fixed inset-0 bg-black bg-opacity-50 " : "hidden"} >
        {showEditFoodList && <EditFoodListM></EditFoodListM>}
        {showAddFoodList &&  <FoodListM></FoodListM>}
        </div>
      </div>

      <div className="hidden  w-1/5 h-screen sticky top-0  overflow-auto  bg-[#281D14] left 
        m-auto my-0 sm:flex items-center flex-col justify-between py-8 font-mulish  text-white border-2 border-rose-500">

        <div className='justify-center'  >

          <div>
            <h1 className='text-5xl text-[#b58c43] p-4 pb-12  '>Doors</h1>
          </div>

          <ul className=" w-full space-y-1">

            <li data-name="dashboard" onClick={(e) => { handleClick(e, "dashboard") }} className={`ps-5 py-2  cursor-pointer 
            ${selected === 'dashboard' ? "bg-[#B58C4314] text-[#B58C43]" : ""}`}>Dashboard</li>


            <li
              data-name="categories"
              onClick={(e) => handleClick(e, "categories")}
              className={`ps-5 py-2 cursor-pointer ${(selected === 'categories' || selected === 'subCategory') ? 'bg-[#B58C4314] text-[#B58C43]' : ''}`}
            >
              Categories


            </li>
            <ul className={`ps-12 text-xs bg-[#281D14] ${(selected === 'categories' || selected === 'subCategory') ? 'block' : 'hidden'}`}>

              <li className={`cursor-pointer ${selected === 'subCategory' ? 'text-[#B58C43]' : ''}`} onClick={(e) => handleClick(e, "subCategory")}>SubCategory</li>
            </ul>

            <li data-name="foodList" onClick={(e) => { handleClick(e, "foodList") }} className={`ps-5 py-2  cursor-pointer 
            ${selected === 'foodList' ? "bg-[#B58C4314] text-[#B58C43]" : ""}`}>Food List</li>
          </ul>


        </div>

        <div className={`ms-5 py-2  cursor-pointer 
            ${selected === 'manageUsers' ? "bg-[#B58C4314] text-[#B58C43]" : ""}`} onClick={(e) => { handleClick(e, "manageUsers") }}>
          Manage Users
        </div>

      </div>



      <div className={`right  w-full h-fit sm:w-4/5 sm:h-1/6  shadow-lg flex-col ${showAddFoodList || showEditFoodList ? 'z-20' : ''} `}>
        <Navigation ></Navigation>
        {/* <AddCategory></AddCategory> */}
        {/* <EditCategory></EditCategory> */}
        {/* <FoodListM></FoodListM> */}
        {selected == 'dashboard' && <Dashboard />}

    
        

        {selected == 'categories' && <Categories  />}



        {selected == 'subCategory' && <SubCategory />}
        {selected == 'foodList' && <FoodList />}
        {selected == 'manageUsers' && <ManageUsers />}
        

  
 

       
       
 
        {/* <AddCategory></AddCategory> */}
        {/* <M_addNew></M_addNew> */}
      </div>

    </div>


  );
}

export default App;
import React, { createContext, useState, ReactNode } from 'react';


interface FoodItem {
  title: string;
  category: string;
  subcategory: string;
  price: string | number;
}

interface categoryItem {
  title: string,
}
interface subCategoryItem {
  subCategoryName: string;
  mainCategory: string;
}

interface editFoodListData {
  fullPrice: string;
  onePiece: string;
  title: string;
  kcal: string;
  grams: string;
  proteins: string;
  carbs: string;
  fats: string;
  description: string;
  ingredients: string;
}

interface AppContextProps {
  selected: string;
  setSelected: (value: string) => void;
  showSub: boolean;

  navigationName: string;
  setNavigationName: (value: string) => void;

  setShowSub: (value: boolean) => void;
  buttonsBlocked: boolean;
  setButtonsBlocked: (value: boolean) => void;
  openAddCategory: boolean;
  setOpenAddCategory: (value: boolean) => void;
  openEditCategory: boolean;
  setOpenEditCategory: (value: boolean) => void;
  editName: string;
  setEditName: (value: string) => void;
  foodListData: FoodItem[];
  setFoodListData: (data: FoodItem[]) => void;

  categoriesData: categoryItem[];
  setCategoriesData: (data: categoryItem[]) => void;

  subCategoriesData: subCategoryItem[];
  setSubCategoriesData: (data: subCategoryItem[]) => void;

  showAddSubCategory: boolean;
  setShowAddSubCategory: (value: boolean) => void;
  showEditSubCategory: boolean;
  setShowEditSubCategory: (value: boolean) => void;

  showEditCategory: boolean;
  setShowEditCategory: (value: boolean) => void
  showAddCategory: boolean;
  setShowAddCategory: (value: boolean) => void;
  showAddFoodList: boolean;
  setShowAddFoodList: (value: boolean) => void;

  showEditFoodList: boolean;
  setShowEditFoodList: (value: boolean) => void;

  showAddManageUsers: boolean;
  setShowAddManageUsers: (value: boolean) => void;



  editFoodListData: editFoodListData;
  setEditFoodListData: (value: editFoodListData) => void;


}


const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {

  const [navigationName, setNavigationName] = useState<string>('Dashboard');
  const [selected, setSelected] = useState<string>('dashboard');
  const [showSub, setShowSub] = useState<boolean>(false);
  const [buttonsBlocked, setButtonsBlocked] = useState<boolean>(false);
  const [openAddCategory, setOpenAddCategory] = useState<boolean>(false);
  const [openEditCategory, setOpenEditCategory] = useState<boolean>(false);
  const [editName, setEditName] = useState<string>('');
  const [showAddSubCategory, setShowAddSubCategory] = useState<boolean>(false);
  const [showEditCategory, setShowEditCategory] = useState<boolean>(false);
  const [showEditFoodList, setShowEditFoodList] = useState<boolean>(false);
  const [showEditSubCategory, setShowEditSubCategory] = useState<boolean>(false);
  const [showAddManageUsers, setShowAddManageUsers] = useState<boolean>(false);


  const [showAddCategory, setShowAddCategory] = useState<boolean>(false);
  const [showAddFoodList, setShowAddFoodList] = useState<boolean>(false);




  const [editFoodListData, setEditFoodListData] = useState<editFoodListData>({
    fullPrice: '',
    onePiece: '',
    title: '',
    kcal: '',
    grams: '',
    proteins: '',
    carbs: '',
    fats: '',
    description: '',
    ingredients: ''
  })
  const [foodListData, setFoodListData] = useState<FoodItem[]>([
    { title: 'Red Gem', price: 'AED 75.00', category: 'Salads', subcategory: 'None' },
    { title: 'Atlantis Burrata', price: 'AED 80.00', category: 'Salads', subcategory: 'None' },
    { title: 'EggPlant Salad', price: 'AED 75.00', category: 'Salads', subcategory: 'None' },
    { title: 'Tomato Salad', price: 'AED 65.00', category: 'Salads', subcategory: 'None' },
    { title: 'Apple Salad', price: 'AED 70.00', category: 'Salads', subcategory: 'None' },
    { title: 'Snowfall Salad', price: 'AED 170.00', category: 'Salads', subcategory: 'None' },
  ]);
  const [categoriesData, setCategoriesData] = useState<categoryItem[]>([
    { title: 'Salads' },
    { title: 'Starters' },
    { title: 'Sides' },
    { title: 'Main Course' },
    { title: 'Melt in Mouth' },
    { title: 'Desserts' },
    { title: 'Mixology Lab' },
    { title: 'Door Shisha' },
  ]);
  const [subCategoriesData, setSubCategoriesData] = useState<subCategoryItem[]>([
    { subCategoryName: 'Astonishing Fresh Concoction', mainCategory: 'Mixology Lab' },
    { subCategoryName: 'Savor The Zero-ALC Experience', mainCategory: 'Mixology Lab' },
    { subCategoryName: 'Natural Juices', mainCategory: 'Mixology Lab' },
    { subCategoryName: 'Coffee', mainCategory: 'Mixology Lab' },
    { subCategoryName: 'Tea', mainCategory: 'Mixology Lab' },
  ]);

  return (
    <AppContext.Provider value={{
      selected,
      setSelected,
      showSub,
      setShowSub,
      buttonsBlocked,
      setButtonsBlocked,
      openAddCategory,
      setOpenAddCategory,
      openEditCategory,
      setOpenEditCategory,
      editName,
      setEditName,
      foodListData,
      setFoodListData,
      categoriesData,
      setCategoriesData,
      subCategoriesData,
      setSubCategoriesData,
      showAddSubCategory,
      setShowAddSubCategory,
      showEditCategory,
      setShowEditCategory,
      showAddCategory,
      setShowAddCategory,
      showAddFoodList,
      setShowAddFoodList,
      editFoodListData,
      setEditFoodListData,
      showEditFoodList,
      setShowEditFoodList,
      showEditSubCategory,
      setShowEditSubCategory,
      showAddManageUsers,
      setShowAddManageUsers,
      navigationName,
      setNavigationName

    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

import React from 'react';
import { Box } from '@mui/material';

import { menLevelTwo } from '../../data/category/level two/menLevelTwo';
import { womenLevelTwo } from "../../data/category/level two/womenLevelTwo";
import { electronicsLevelTwo } from '../../data/category/level two/electronicLevelTwo';
import { furnitureLevelTwo } from '../../data/category/level two/furnitureLevelTwo';
import { womenLevelThree } from '../../data/category/level three/womenLevelThree';
import { menLevelThree } from '../../data/category/level three/menLevelThree';
import { electronicsLevelThree } from '../../data/category/level three/electronicLevelThree';
import { furnitureLevelThree } from '../../data/category/level three/furnitureLevelThree';
import { useNavigate } from 'react-router';

const categoryTwo = {
  men: menLevelTwo,
  women: womenLevelTwo,
  electronics: electronicsLevelTwo,
  home_furniture: furnitureLevelTwo,
};

const categoryThree = {
  men: menLevelThree,
  women: womenLevelThree,
  electronics: electronicsLevelThree,
  home_furniture: furnitureLevelThree
};

const CategorySheet = ({selectedCategory,showCategorySheet}) => {

  const navigate = useNavigate();

  const childCategory = (category, parentCategoryId) => {
    return category.filter((child) => child.parentCategoryId === parentCategoryId);
  };

  return (
    <div>
      <Box className="bg-[#eef0f3] shadow-lg lg:h-[500px] overflow-y-auto" sx={{ zIndex: 100 }}>
        <div className='flex text-sm flex-wrap'>
          {categoryTwo[selectedCategory]?.map((item,index) => (
            <div className = {`p-8 lg:w-[20%] rounded-md ${index%2 == 0 ? "bg-slate-50" : "bg-white"}`}  key={item.categoryId}>
              <p className='text-[var(--primary-color)] mb-5 font-semibold'>{item.name}</p>
              <ul className='space-y-3'>
                {childCategory(categoryThree[selectedCategory], item.categoryId).map((childItem) => (
                  <div key={childItem.categoryId}>
                    <li onClick={() => {navigate("/products/"+childItem.categoryId); showCategorySheet(false)}} className='hover:text-[var(--primary-color)] cursor-pointer'>
                      {childItem.name}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
};

export default CategorySheet;

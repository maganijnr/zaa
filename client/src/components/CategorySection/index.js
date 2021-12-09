import React from 'react'

import { categories } from '../../data/homeData'

import {
  CategoryContainer,
  CategoryCard,
  CategoryImage,
  CategoryInfo,
  CategoryH2,
  CategoryBtn
} from './CategoryStyles'


const CategorySection = () => {
  return (
    <CategoryContainer>
      {categories.map(category => (
        <CategoryCard key={category.id}>
          <CategoryInfo>           
              <CategoryImage src={category.bgImg} alt=""/>
            <CategoryH2>{category.infoH2}</CategoryH2>
            <CategoryBtn>{category.btnTxt}</CategoryBtn>
          </CategoryInfo>
        </CategoryCard>
      ))}
    </CategoryContainer>
  )
}

export default CategorySection

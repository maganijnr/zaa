import styled from 'styled-components'
import {Link as LinkL} from 'react-router-dom'

const CategoryContainer = styled.section`
  width: 100%;
  height: 80vh;
  position: relative;
  display: flex;
  background: pink;
  align-items: center;
  justify-content: center;
`

const CategoryCard = styled.div`
  width: 350px;
  position: relative;
  margin: 0 3.5rem;
  background: yellow;
`


const CategoryImage = styled.img`
  width: 100%;
`
const CategoryInfo = styled.div`
  z-index: 3;
`
const CategoryH2 = styled.h2`

`

const CategoryBtn = styled(LinkL)`

`

export {
  CategoryContainer,
  CategoryCard,
  CategoryImage,
  CategoryInfo,
  CategoryH2,
  CategoryBtn
}
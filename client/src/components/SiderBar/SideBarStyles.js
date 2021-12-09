import styled from 'styled-components'
import {Link as LinkL} from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

const SideContainer = styled.div`
   position: fixed;
   z-index: 999;
   background: #cecece;
   right: ${({isOpen}) => isOpen ? "0":"-400px"};
   top: 0;
   width: 300px;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   transition: ease-in-out 1s all;
`

const SideMenuBtnWrap = styled.div`
   position: absolute;
   top: 20px;
   left: 20px;
   cursor: pointer;
   border-radius: 100%;
   padding: 5px;

   &:hover{
      background: #000;
      transition: .4s ease-in-out background;
   }
`

const SideMenuBtn = styled(FaTimes)`
   color: #000;
   font-size: 1.4rem;

   &:hover{
      color: #FFF !important;
      transition: .4s ease-in-out color;
      
   }
`
const SideMenuItems = styled.div`
   display: flex;
   flex-direction: column;
`

const SideMenuItem = styled(LinkL)`
   margin: 2rem auto;
   font-size: 1.4rem;
   color: #000;
   font-size:600;
`

const SideMenuItemBtn = styled(LinkL)`
   font-size: 1.2rem;
   font-weight: 700;
   margin: 0 1.5rem;
   background: #FFF;
   color: #000;
   padding: 8px 10px;
   border-radius: 8px;
`

export {
   SideContainer,
   SideMenuBtnWrap,
   SideMenuBtn,
   SideMenuItems,
   SideMenuItem,
   SideMenuItemBtn
}
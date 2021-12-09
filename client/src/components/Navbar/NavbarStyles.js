import styled from 'styled-components'
import {Link as LinkL} from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import { FaBars } from 'react-icons/fa'

const Nav = styled.div`
  width: 100%;
  background: ${({scrollNav}) => scrollNav ? "#000":"transparent"};
  height: 70px;
  position: fixed;
  z-index: 899;
  transition: background ease-in-out .4s;
`
const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  width: 100%;
  height: 100%;
  max-width: 1500px;
  margin: 0 auto;
`

const NavLogo = styled(LinkL)`
  color: ${({scrollNav}) => scrollNav ? "#FFF":"#000"};
  font-weight: 700;
  font-size: 3rem;
  cursor: pointer;
  transition: color ease-in-out .5s;
`
const NavMenuBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({scrollNav}) => scrollNav ? "#FFF":"#000"};

  @media screen and (min-width: 920px){
    display: none;
  }
`
const NavMenuBtn = styled(FaBars)`
  font-size: 1.4rem;
`
const NavCartWrap = styled.div`
  position: relative;
  display: flex;
  margin: 0 1.5rem;
`

const NavCart = styled(FiShoppingCart)`
  color: ${({scrollNav}) => scrollNav ? "#FFF":"#000"};
  transition: color ease-in-out .5s;
  font-size: 1.4rem;
`

const CartBadge = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:100%;
  height: 20px;
  width: 20px;
  position: absolute;
  top: -13px;
  right: -10px;
`

const CartH4 = styled.h4`
  color: ${({scrollNav}) => scrollNav ? "#FFF":"#000"};
  transition: color ease-in-out .5s;
  font-size:1rem;
  font-weight: 700;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -60%);
`

const NavItems = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px){
    display: none;
  }
`
const NavItem = styled(LinkL)`
  color: ${({scrollNav}) => scrollNav ? "#FFF":"#000"};
  transition: color ease-in-out .5s;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 1.2rem;
`

const NavBtn = styled(LinkL)`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 1.5rem;
  background: #FFF;
  color: #000;
  padding: 8px 10px;
  border-radius: 8px;
`

export { 
  Nav,
  NavContainer,
  NavLogo,
  NavMenuBtn,
  NavMenuBtnWrapper,
  NavCart,
  NavCartWrap,
  CartBadge,
  CartH4,
  NavItems,
  NavItem,
  NavBtn
}
import styled from 'styled-components'
import {Link as LinkL} from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'

const Nav = styled.div`
  width: 100%;
  height: 80px;
  background: #000;
  position: relative;
  top: 0;
  left: 0;
`
const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1500px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  padding: 0 10px;
`

const NavLogo = styled(LinkL)`
  color: #fff;
  font-weight: 700;
  font-size: 3rem;
  cursor: pointer;
`
const NavCartWrap = styled.div`
  position: relative;
  display: flex;
  margin: 0 1.5rem;
`

const NavCart = styled(FiShoppingCart)`
  color: #FFF;
  font-size: 2.2rem;
`

const CartBadge = styled.div`
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:100%;
  height: 20px;
  width: 20px;
  position: absolute;
  top: -10px;
  right: -10px;
`

const CartH4 = styled.h4`
  color: #000;
  font-size:1.2rem;
  font-weight: 700;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -60%);
`

const NavItems = styled.div`
  display: flex;
  align-items: center;
`
const NavItem = styled(LinkL)`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 1.5rem;
`

const NavBtn = styled(LinkL)`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 1.5rem;
  background: #FFF;
  color: #000;
  padding: 0.5rem;
  border-radius: 8px;
`

export { 
  Nav,
  NavContainer,
  NavLogo,
  NavCart,
  NavCartWrap,
  CartBadge,
  CartH4,
  NavItems,
  NavItem,
  NavBtn
}
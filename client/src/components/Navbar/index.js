import React from 'react'
import {Link} from 'react-router-dom'

import { 
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
} from './NavbarStyles'

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">ZAA'A</NavLogo>
        <NavItems>
          <Link to="/cart">
            <NavCartWrap>
              <NavCart/>
              <CartBadge>
                <CartH4>4</CartH4>
              </CartBadge>
            </NavCartWrap>
          </Link>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/products">Products</NavItem>
          <NavItem to="/login">Login</NavItem>
          <NavBtn to="/register">Register</NavBtn>
        </NavItems>
      </NavContainer>
    </Nav>
  )
}

export default Navbar

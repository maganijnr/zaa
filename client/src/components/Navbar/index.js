import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import { 
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
} from './NavbarStyles'

const Navbar = ({toggleBar}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 70){
      setScrollNav(true)
    }else{
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <Nav scrollNav={scrollNav}>
      <NavContainer>
        <NavLogo scrollNav={scrollNav} to="/">ZAA'A</NavLogo>
        <Link scrollNav={scrollNav} to="/cart">
          <NavCartWrap>
            <NavCart scrollNav={scrollNav}/>
            <CartBadge>
              <CartH4 scrollNav={scrollNav}>6</CartH4>
            </CartBadge>
          </NavCartWrap>
        </Link>
        
        <NavMenuBtnWrapper scrollNav={scrollNav} onClick={toggleBar}>
          <NavMenuBtn />
        </NavMenuBtnWrapper>

        <NavItems>
          <NavItem scrollNav={scrollNav} to="/">Home</NavItem>
          <NavItem scrollNav={scrollNav} to="/products">Products</NavItem>
          <NavItem scrollNav={scrollNav} to="/login">Login</NavItem>
          <NavBtn scrollNav={scrollNav} to="/register">Register</NavBtn>
        </NavItems>
      </NavContainer>
    </Nav>
  )
}

export default Navbar

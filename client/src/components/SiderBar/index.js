import {
   SideContainer,
   SideMenuBtnWrap,
   SideMenuBtn,
   SideMenuItems,
   SideMenuItem,
   SideMenuItemBtn

} from './SideBarStyles'

const SideBar = ({isOpen, toggleBar}) => {
   return (
      <SideContainer isOpen={isOpen} onClick={toggleBar}>
         <SideMenuBtnWrap onClick={toggleBar}>
            <SideMenuBtn/>
         </SideMenuBtnWrap>
         <SideMenuItems>
            <SideMenuItem to="/">Home</SideMenuItem>
            <SideMenuItem to="/products">Products</SideMenuItem>
            <SideMenuItem to="/login">Login</SideMenuItem>
            <SideMenuItemBtn to="/register">Register</SideMenuItemBtn>
         </SideMenuItems>
      </SideContainer>
   )
}

export default SideBar

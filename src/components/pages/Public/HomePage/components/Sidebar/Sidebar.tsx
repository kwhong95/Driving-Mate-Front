import React, { FC } from 'react'
import { CloseIcon, Icon, SidebarBtnWrap, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper } from './sidebarElements'

interface SidebarProps {
  isOpen: any;
  toggle: () => void;
}
// @ts-ignore
const Sidebar: FC<SidebarProps> = ({ isOpen, toggle }) => {
  return (
    <>
     <SidebarContainer isOpen={isOpen} onClick={toggle}>
       <Icon onClick={toggle}>
         <CloseIcon />
       </Icon>
       <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to='/signup'>Sign Up</SidebarRoute>
        </SidebarBtnWrap>
        <SidebarBtnWrap>
          <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SidebarBtnWrap>
       </SidebarWrapper>
     </SidebarContainer>
    </>
  )
}

export default Sidebar;

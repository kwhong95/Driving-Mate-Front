import React, { FC } from 'react'
import { CloseIcon, Icon, SidebarBtnWrap, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper } from './SidebarElements'

const Sidebar: FC = () => {
  return (
    <>
     <SidebarContainer>
       <Icon>
         <CloseIcon />
       </Icon>
       <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">
            About
          </SidebarLink>
          <SidebarLink to="discover">
            Discover
          </SidebarLink>
          <SidebarLink to="services">
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

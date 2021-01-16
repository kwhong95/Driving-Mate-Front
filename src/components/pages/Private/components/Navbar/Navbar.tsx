import React, { FC } from 'react';
import { NavbarLogoIcon, NavbarContainer, NavbarLogo, NavbarMenu, NavbarMenuIcon, MenuIcon } from './NavbarElements';
import { DriveEta, ExitToApp, Menu, Notifications, Settings } from '@material-ui/icons';

const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <NavbarLogo>
        Logo
        <NavbarLogoIcon>
          <DriveEta />
        </NavbarLogoIcon>
        <MenuIcon><Menu /></MenuIcon>
      </NavbarLogo>
      <NavbarMenu>
        <NavbarMenuIcon><Notifications /></NavbarMenuIcon>
        <NavbarMenuIcon><Settings /></NavbarMenuIcon>
        <NavbarMenuIcon><ExitToApp /></NavbarMenuIcon>
      </NavbarMenu>
    </NavbarContainer>
  )
}

export default Navbar;

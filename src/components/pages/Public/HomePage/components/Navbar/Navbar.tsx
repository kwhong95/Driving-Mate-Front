import React, { FC } from 'react'
import { FaBars } from 'react-icons/fa';
import { MobileIcon, Nav, NavbarContainer, NavItem, NavLogo, NavMenu, NavLinks, NavBtn, NavBtnLink } from './NavebarElements';

interface NavbarProps {
  toggle: () => void;
}


const Navbar: FC<NavbarProps> = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Logo</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to='about'>About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='discover'>Discover</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='services'>Services</NavLinks>
          </NavItem>
        </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav> 
    </>
  )
}

export default Navbar;

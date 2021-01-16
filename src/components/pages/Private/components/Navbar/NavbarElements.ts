import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background: #282C34;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 1.19);
  z-index: 1300;

  @media screen and (max-width: 960px) {
    position: relative;
  }
`;

export const NavbarLogo = styled.h1`
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavbarLogoIcon = styled.i`
  margin-left: 0.5rem;
  font-size: 1.6rem;
`;

export const MenuIcon = styled.button`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavbarMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  align-items: center;
  width: 70vw;
  justify-content: end;
  margin-right: 2rem;
`;

export const NavbarMenuIcon = styled.button`
  color: #fff;
  padding: 0.5rem 1rem;
  background: #282C34;
  border: none;

  :hover {
    background: #4c5254;
    border-radius: 50px;
    transition: all 0.2s ease-in-out;
  }
`
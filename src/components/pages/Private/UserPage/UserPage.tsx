import React, { FC, useEffect } from 'react'
import { 
  Container,
  Header, 
  HeaderIcon, 
  HeaderIconWrap, 
  HeaderLogo, 
  InnerContainer, 
  Root, 
  SidebarWrap, 
  UserImg, 
  Username, 
  UserWrap, 
  MenuItem,
  MenuIcon,
  MenuTitle,
  MenuLink, 
  SidebarMenu,
} from './userPageElements';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import { IoMdNotifications } from 'react-icons/io';
import { AiOutlineDashboard } from 'react-icons/ai';
import { SiGoogleanalytics } from 'react-icons/si';
import User from '../asserts/1.webp';
import Dashboard from '../Dashboard/Dashboard';
import { setSuccess, signout } from '../../../../store/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import Message from '../../../UI/Message';

const UserPage: FC = () => {
  const { user, needVerification, success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if(success) {
      dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  const logoutClickHandler = () => {
    dispatch(signout());
  }

  return (
    <Root>
      <Container>
        <Header>
          <HeaderLogo to="/dashboard">Logo</HeaderLogo>
          <HeaderIconWrap>
            <HeaderIcon><IoMdNotifications color="#fff" /></HeaderIcon>
            <HeaderIcon><FiSettings color="#fff" /></HeaderIcon>
            <HeaderIcon onClick={logoutClickHandler} ><FiLogOut color="#fff" /></HeaderIcon>
          </HeaderIconWrap>
        </Header>
        <InnerContainer>
          <SidebarWrap>
            <UserWrap>
              <UserImg src={User} alt="UserImg" />
              <Username>{user?.firstName}</Username>
            </UserWrap>
            <SidebarMenu>
              <MenuItem>
                <MenuLink to="/dashboard">
                  <MenuIcon><AiOutlineDashboard /></MenuIcon>
                  <MenuTitle>Dashboard</MenuTitle>
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink to="/analysis">
                  <MenuIcon><SiGoogleanalytics /></MenuIcon>
                  <MenuTitle>Analysis</MenuTitle>
                </MenuLink>
              </MenuItem>
            </SidebarMenu>
          </SidebarWrap>
          {needVerification ?
          <Message type="success" msg={'please verify your email addres'} />
          :
          <Dashboard />
          }
        </InnerContainer>
      </Container>
    </Root>
  )
}

export default UserPage;

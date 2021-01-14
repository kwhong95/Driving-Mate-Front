import React, { FC } from 'react'
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
  DashboardContainer,
  MenuItem,
  MenuIcon,
  MenuTitle,
  MenuLink, 
  SidebarMenu,
} from './dashboardElements';
import { FiSettings } from 'react-icons/fi';
import { IoMdNotifications } from 'react-icons/io';
import { AiOutlineDashboard } from 'react-icons/ai';
import { SiGoogleanalytics } from 'react-icons/si';
import User from '../asserts/1.webp';

const Dashboard: FC = () => {
  return (
    <Root>
      <Container>
        <Header>
          <HeaderLogo to="/dashboard">Logo</HeaderLogo>
          <HeaderIconWrap>
            <HeaderIcon><IoMdNotifications color="#fff" /></HeaderIcon>
            <HeaderIcon><FiSettings color="#fff" /></HeaderIcon>
          </HeaderIconWrap>
        </Header>
        <InnerContainer>
          <SidebarWrap>
            <UserWrap>
              <UserImg src={User} alt="UserImg" />
              <Username>Daniel Kim</Username>
            </UserWrap>
            <SidebarMenu>
              <MenuItem>
                <MenuLink to="/dashboard">
                  <MenuIcon><AiOutlineDashboard /></MenuIcon>
                  <MenuTitle>Dashboard</MenuTitle>
                </MenuLink>
              </MenuItem>
            </SidebarMenu>
          </SidebarWrap>
          <DashboardContainer></DashboardContainer>
        </InnerContainer>
      </Container>
    </Root>
  )
}

export default Dashboard;

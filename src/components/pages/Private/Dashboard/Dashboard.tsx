import React, { FC } from 'react'
import { Container, DashboardContainer, Header, HeaderIcon, HeaderIconWrap, HeaderLogo, InnerContainer, MenuItem, Root, SidebarWrap, UserImg, Username, UserWrap, MenuIcon, MenuWrap } from './dashboardElements';
import { FiSettings } from 'react-icons/fi';
import { IoMdNotifications } from 'react-icons/io';
import { AiOutlineDashboard } from 'react-icons/ai';
import { GrAnalytics } from 'react-icons/gr';
import User from '../asserts/1.webp';
import { SidebarMenu } from '../../Public/HomePage/components/Sidebar/sidebarElements';

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
              <MenuWrap>
                <MenuIcon><AiOutlineDashboard color="#fff" /></MenuIcon>
                <MenuItem to="/dashboard">Dashbord</MenuItem>
              </MenuWrap>
              <MenuWrap>
                <MenuIcon><GrAnalytics color="#fff" /></MenuIcon>
                <MenuItem to="/analysis">Analysis</MenuItem>
              </MenuWrap>
            </SidebarMenu>
          </SidebarWrap>
          <DashboardContainer></DashboardContainer>
        </InnerContainer>
      </Container>
    </Root>
  )
}

export default Dashboard;

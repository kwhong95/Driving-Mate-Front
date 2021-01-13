import React, { FC } from 'react'
import { Container, Header, HeaderIcon, HeaderIconWrap, HeaderLogo, Root } from './dashboardElements';
import { FiSettings } from 'react-icons/fi';
import { IoMdNotifications } from 'react-icons/io'

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
      </Container>
    </Root>
  )
}

export default Dashboard;

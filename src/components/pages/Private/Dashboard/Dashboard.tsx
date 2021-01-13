import React, { FC } from 'react'
import { Container, Header, HeaderLogo, Root } from './dashboardElements';

const Dashboard: FC = () => {
  return (
    <Root>
      <Container>
        <Header>
          <HeaderLogo to="/dashboard">Logo</HeaderLogo>
        </Header>
      </Container>
    </Root>
  )
}

export default Dashboard;

import React, { FC } from 'react';
import { 
  ActiveTitle,
  CardItem,
  CardItemWrap,
  Container, 
  Content, 
  FilterButton, 
  Header,
  OverViewContainer,
  OverViewContent,
  OverViewHeader,
  OverViewTitle,
} from './dashboardElements';
import { RiListSettingsLine } from 'react-icons/ri';

const Dashboard: FC = () => {
  return (
    <>
      <Container>
        <Header>
          <ActiveTitle>Dashboard</ActiveTitle>
          <FilterButton>
            Filter <RiListSettingsLine style={{ marginLeft: '5px' }} />
          </FilterButton>
        </Header>
        <Content>
          <CardItemWrap>
            <CardItem></CardItem>
            <CardItem></CardItem>
            <CardItem></CardItem>
          </CardItemWrap>
          <OverViewContainer>
            <OverViewHeader>
              <OverViewTitle>Overview</OverViewTitle>
            </OverViewHeader>
            <OverViewContent></OverViewContent>
          </OverViewContainer>
        </Content>
      </Container>
    </>
  )
}

export default Dashboard;

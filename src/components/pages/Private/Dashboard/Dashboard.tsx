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
  OverViewHeader,
  OverViewTitle,
} from './dashboardElements';
import { RiListSettingsLine } from 'react-icons/ri';
import { FormControl, InputLabel, Select } from '@material-ui/core';

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
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-age-native-simple">Period</InputLabel>
                <Select
                  native
                  label="Weekly(2021)"
                >
                  <option aria-label="Weekly(2021)" />
                  <option>Daily(2021)</option>
                  <option>Weekly(2021)</option>
                  <option>Yearly(2021)</option>
                 </Select> 
              </FormControl>
            </OverViewHeader>
          </OverViewContainer>
        </Content>
      </Container>
    </>
  )
}

export default Dashboard;

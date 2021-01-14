import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #424242;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 95%;
  height: 40px;
  align-items: center;
  margin-top: 10px;
`;

export const ActiveTitle = styled.h4`
  color: #fff;
`;

export const FilterButton = styled.button`
  background: #1b1b1b;
  border: 1px solid #929292;
  border-radius: 10px;
  color: #fff;
  font-size: 12px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 98%;
  height: 100%;
`;

export const CardItemWrap = styled.div`
  display: flex;
  width: 97%;
  height: 33%;
  justify-content: space-between;
`;

export const CardItem = styled.div`
  background: #1b1b1b;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  width: 30%;
  height: 90%;
  transition: 0.3s;
`;

export const OverViewContainer = styled.div`
  width: 100%;
  height: 97%;
  margin-bottom: 20px;
`;

export const OverViewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  margin-left: 15px;
`;

export const OverViewTitle = styled.h5`
  color: #fff
`;

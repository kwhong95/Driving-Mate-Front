import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #424242;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 93%;
  height: 90%;
  border-radius: 40px;
  background: #000;
  box-sizing: border-box; 
`;

export const Header = styled.header`
  background: #000;
  margin-top: 24px;
  width: 90%;
  height: 10%;
`;

export const HeaderLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Movie = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BtnGoBack = styled.button`
  width: 100px;
  height: 25px;
  margin: 10px 0 20px 40px;

  border-radius: 5px;
  border: none;

  font-size: 15px;
  font-weight: 500;
  background-color: #433333;
  color: white;
  cursor: pointer;
`;

export const ImgTitle = styled.div`
  padding: 20px;
  display: flex;
  gap: 25px;

  border-bottom: 3px solid #bababa;
  -webkit-box-shadow: 0px 10px 38px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 10px 38px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 10px 38px rgba(0, 0, 0, 0.2);
`;

export const TitleText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
`;

export const Information = styled.div`
  border-bottom: 3px solid #bababa;
  -webkit-box-shadow: 0px 10px 38px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 10px 38px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 10px 38px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 15px;
  padding-top: 25px;
`;

export const StInformationTitle = styled.h4`
  padding: 0 0 10px 30px;
  color: black;
`;

export const StNavLink = styled(NavLink)`
  padding: 0 0 10px 30px;
  color: black;
`;

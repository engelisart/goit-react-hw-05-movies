import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: 80px;
  border-bottom: 3px solid #bababa;

  -webkit-box-shadow: 0px 10px 38px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 10px 38px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 10px 38px rgba(0, 0, 0, 0.2);
`;

export const Nav = styled.nav`
  padding: 15px 0 0 50px;
  width: 300px;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
`;

export const NavLinkSt = styled(NavLink)`
  font-size: 25px;
  font-weight: 700;
  line-height: 1.5;
  text-decoration: none;
  color: ${props => (props.$active ? 'orange' : 'black')};
`;

import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header, Nav, NavLinkSt } from './Layout.styled';

export const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Header>
        <Nav>
          <NavLinkSt $active={!pathname.includes('/movies')} to={'/'}>
            Home
          </NavLinkSt>
          <NavLinkSt $active={pathname.includes('/movies')} to={'/movies'}>
            Movies
          </NavLinkSt>
        </Nav>
      </Header>
      <Outlet />
    </>
  );
};

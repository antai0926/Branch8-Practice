import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Branch8Logo from '../../assets/img/branch8-logo.webp';

import { NavBar, NavBrand, NavCollapse, NavLink } from './Header.styled';

const Header = () => {
  return (
    <NavBar bg="light" expand="md" fixed="top">
      <NavBrand href="#home">
        <img
          src={Branch8Logo}
          width="168"
          height="42"
          className="d-inline-block align-top"
          alt="Branch8 logo"
        />
      </NavBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <NavCollapse className="justify-content-end">
        <Nav>
          <NavLink href="#home">Funding Programs</NavLink>
          <NavLink href="#link">Services</NavLink>
          <NavLink href="#link">Testimonials</NavLink>
          <NavLink href="#link">Contact Us</NavLink>
        </Nav>
      </NavCollapse>
    </NavBar>
  );
};

export default Header;

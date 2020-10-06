import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Branch8Logo from '../../assets/img/branch8-logo.webp';
import styled from 'styled-components';

const Header = () => {
  const NavBar = styled(Navbar)`
    // background-color: white !important;
  `;
  const NavCollapse = styled(Navbar.Collapse)`
    padding-right: 19vw;
    padding-top: 16px;
    padding-bottom: 16px;
    @media (max-width: 930px) {
      padding-right: 5vw;
    }
  `;
  const NavBrand = styled(Navbar.Brand)`
    margin-left: 15vw;
    padding-bottom: 10px;
    @media (max-width: 1100px) {
      margin-left: 5vw;
    }
  `;
  const NavLink = styled(Nav.Link)`
    color: #444444 !important;
    line-height: 25px;
    padding-right: 18px !important;
    padding-left: 18px !important;
    transition: background-color 0.5s ease;
    border-radius: 4px;
    &:hover {
      background-color: #e3e2e1;
    }
  `;

  return (
    <NavBar bg="light" expand="md">
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

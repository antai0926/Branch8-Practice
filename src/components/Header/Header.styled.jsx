import styled from 'styled-components';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export const NavBar = styled(Navbar)`
  background-color: white !important;
`;
export const NavCollapse = styled(Navbar.Collapse)`
  padding-right: 19vw;
  padding-top: 16px;
  padding-bottom: 16px;
  @media (max-width: 960px) {
    padding-right: 5vw;
  }
`;
export const NavBrand = styled(Navbar.Brand)`
  margin-left: 15vw;
  padding-bottom: 10px;
  @media (max-width: 1100px) {
    margin-left: 5vw;
  }
`;
export const NavLink = styled(Nav.Link)`
  color: #444444 !important;
  line-height: 25px;
  padding-right: 18px !important;
  padding-left: 18px !important;
  transition: background-color 0.5s ease;
  border-radius: 4px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 200;
  &:hover {
    background-color: #e3e2e1;
  }
  @media (max-width: 810px) {
    padding-right: 12px !important;
    padding-left: 12px !important;
  }
`;

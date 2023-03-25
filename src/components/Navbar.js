// src/components/Navbar.js

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaHome } from 'react-icons/fa';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px 30px;
  background-color: rgba(34, 40, 49, 0.9);
  z-index: 1000;
`;

const NavLink = styled(Link)`
  color: #eeeeee;
  margin-left: 30px;
  font-size: 1.1rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #00adb5;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLink to="home" smooth={true} duration={1000}>
        <FaHome />
      </NavLink>
      <NavLink to="about" smooth={true} duration={1000}>
        About
      </NavLink>
      <NavLink to="projects" smooth={true} duration={1000}>
        Projects
      </NavLink>
      <NavLink to="contact" smooth={true} duration={1000}>
        Contact
      </NavLink>
    </NavbarContainer>
  );
};

export default Navbar;

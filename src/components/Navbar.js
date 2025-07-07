// src/components/Navbar.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaHome } from 'react-icons/fa';

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #222831;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const NavItem = styled(Link)`
  display:flex;
  align-items:center;
  color: #eeeeee;
  text-decoration: none;
  margin-left: 30px;
  cursor: pointer;
  font-size: 30px;

  &:hover {
    color: #00adb5;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    margin-left: 20px;
  }
`;


const PhaserBeam = styled.div`
  position: fixed;
  top: ${props => `${props.navbarHeight}px`};
  left: 0;
  height: 2.5px;
  background: linear-gradient(
    90deg,
    rgba(0, 173, 181, 0) 0%,
    rgba(0, 173, 181, 0.5) ${(props) => props.width - 7.5}%,
    #00adb5 ${(props) => props.width}%,
    rgba(0, 173, 181, 0.5) ${(props) => props.width + 7.5}%,
    rgba(0, 173, 181, 0) 100%
  );
  z-index: 101;
  width: ${props => `${props.width}%`};
  @media (max-width: 768px) {
    top: ${props => `47px`};
  }
`;



const Navbar = () => {
  const [phaserWidth, setPhaserWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / (scrollHeight - clientHeight)) * 100;
    
      setPhaserWidth(scrollPercentage);
    };
    

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <PhaserBeam width={phaserWidth} navbarHeight={65} />
      <NavbarContainer>
        <NavItem
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
        >
          <FaHome />
        </NavItem>
        <NavItem
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
        >
          About
        </NavItem>
        <NavItem
          activeClass="active"
          to="blog"
          spy={true}
          smooth={true}
          duration={500}
        >
          Blog
        </NavItem>
        <NavItem
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
        >
          Projects
        </NavItem>
        <NavItem
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
        >
          Contact
        </NavItem>
      </NavbarContainer>
    </>
  );
};

export default Navbar;

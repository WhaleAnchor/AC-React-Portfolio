// src/components/Navbar.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
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

const NavItem = styled(ScrollLink)`
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

const RouterNavItem = styled(RouterLink)`
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
  const location = useLocation();
  const navigate = useNavigate();

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

  const isBlogPage = location.pathname === '/blog';

  // Helper to navigate home and scroll to section after navigation
  const handleNavToSection = (section) => (e) => {
    e.preventDefault();
    if (isBlogPage) {
      navigate('/', { replace: false });
      setTimeout(() => {
        const el = document.querySelector(`[name='${section}']`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Wait for navigation
    }
  };

  const handleBlogClick = (e) => {
    if (!isBlogPage) {
      // On home, scroll to top before navigating to blog
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  return (
    <>
      <PhaserBeam width={phaserWidth} navbarHeight={65} />
      <NavbarContainer>
        {isBlogPage ? (
          <RouterNavItem to="/" onClick={handleNavToSection('home')}>
            <FaHome />
          </RouterNavItem>
        ) : (
          <NavItem
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            <FaHome />
          </NavItem>
        )}
        {isBlogPage ? (
          <RouterNavItem to="/" onClick={handleNavToSection('about')}>About</RouterNavItem>
        ) : (
          <NavItem
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </NavItem>
        )}
        {isBlogPage ? (
          <RouterNavItem to="/" onClick={handleNavToSection('projects')}>Projects</RouterNavItem>
        ) : (
          <NavItem
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
          >
            Projects
          </NavItem>
        )}
        {isBlogPage ? (
          <RouterNavItem to="/" onClick={handleNavToSection('contact')}>Contact</RouterNavItem>
        ) : (
          <NavItem
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </NavItem>
        )}
        {isBlogPage ? (
          <RouterNavItem to="/blog">Blog</RouterNavItem>
        ) : (
          <RouterNavItem to="/blog" onClick={handleBlogClick}>Blog</RouterNavItem>
        )}
      </NavbarContainer>
    </>
  );
};

export default Navbar;

// src/App.js

import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Navbar from './components/Navbar';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${props => props.bgColor || '#ffffff'};
  color: ${props => props.textColor || '#000000'};
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 50px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const IconLink = styled.a`
  color: ${props => props.textColor || '#000000'};
  margin: 0 10px;
  font-size: 1.5rem;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #00adb5;
  }
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Section id="home" bgColor="#222831" textColor="#eeeeee">
        <Title>Your Name</Title>
        <Subtitle>Web Developer</Subtitle>
        <IconContainer>
          <IconLink
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            textColor="#eeeeee"
          >
            <FaGithub />
          </IconLink>
          <IconLink
            href="https://www.linkedin.com/in/yourusername/"
            target="_blank"
            rel="noopener noreferrer"
            textColor="#eeeeee"
          >
            <FaLinkedin />
          </IconLink>
          <IconLink href="mailto:you@example.com" textColor="#eeeeee">
            <FaEnvelope />
          </IconLink>
        </IconContainer>
      </Section>
      <Section id="about">
        {/* Add your "About" content here */}
        <Title>Web Design is my Passhun</Title>
      </Section>
      <Section id="projects">
        {/* Add your "Projects" content here */}
        <Title>Projects</Title>
      </Section>
      <Section id="contact">
        {/* Add your "Contact" content here */}
        <Title>Contact</Title>
      </Section>
    </AppContainer>
  );
}

export default App;

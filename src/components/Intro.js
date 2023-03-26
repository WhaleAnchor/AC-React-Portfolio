// src/components/Intro.js

import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #222831;
  color: #eeeeee;
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

const Intro = () => {
  return (
    <IntroContainer>
      <Title>Andrew S. Choi</Title>
      <Subtitle>Full-Stack Web Developer</Subtitle>
      <IconContainer>
        <IconLink
          href="https://github.com/WhaleAnchor"
          target="_blank"
          rel="noopener noreferrer"
          textColor="#eeeeee"
        >
          <FaGithub />
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/andrew-choi-12381a56/"
          target="_blank"
          rel="noopener noreferrer"
          textColor="#eeeeee"
        >
          <FaLinkedin />
        </IconLink>
        <IconLink href="mailto:andrewsungwoochoi@gmail.com" textColor="#eeeeee">
          <FaEnvelope />
        </IconLink>
      </IconContainer>
    </IntroContainer>
  );
};

export default Intro;

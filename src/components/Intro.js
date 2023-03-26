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
    background: rgb(34,40,49);
    background: linear-gradient(180deg, rgba(34,40,49,1) 90%, rgba(55,65,79,1) 100%);
    color: #eeeeee;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const IconLink = styled.a`
  color: ${props => props.textColor};
  font-size: 36px;
  transition: color 0.3s;

  &:hover {
    color: #00adb5;
  }

  @media (max-width: 768px) {
    font-size: 28px;
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

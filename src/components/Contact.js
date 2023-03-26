import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #37414f;
  color: #eeeeee;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 20px 0;
    height: auto;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Message = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
    flex-wrap: wrap;
  }
`;

const IconLink = styled.a`
  color: #eeeeee;
  font-size: 2.5rem;
  transition: color 0.3s;

  &:hover {
    color: #00adb5;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Title>Contact</Title>
      <Message>Here are some links where you can find me or explore my projects!</Message>
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
    </ContactContainer>
  );
};

export default Contact;

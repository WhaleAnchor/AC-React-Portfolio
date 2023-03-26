// src/components/About.js

import React from 'react';
import styled from 'styled-components';
import profilePicture from '../assets/profilepicture.jpg';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgb(55,65,79,1);
  background: linear-gradient(180deg, rgba(55,65,79,1) 90%, rgba(34,40,49,1) 100%);
  color: #eeeeee;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  align-items:center;
  justify-content:center'

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 10px;
  }
`;

const ImageWrapper = styled.div`
  flex: 0 0 250px;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const ProfileImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;

const TextWrapper = styled.div`
  flex: 1;
  text-align: justify;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About</Title>
      <ContentWrapper>
        <ImageWrapper>
          <ProfileImage src={profilePicture} alt="Profile" />
        </ImageWrapper>
        <TextWrapper>
          <Paragraph>
            Hello, I'm a full stack web developer specializing in the MERN stack. 
            I'm also a musician, music instructor, and music producer. 
            My passion for creating extends beyond coding to audio engineering, video production and editing, photo editing, and graphic design using Photoshop and Illustrator. 
            I value collaboration and adjust my approach to align with project needs. 
            My technical skills combined with creative talents enable me to deliver unique solutions for diverse client needs. 
            I'm eager to learn and take on new challenges. T
            hank you for visiting my website.
          </Paragraph>
        </TextWrapper>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About;
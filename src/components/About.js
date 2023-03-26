// src/components/About.js

import React from 'react';
import styled from 'styled-components';

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

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About</Title>
      <ContentWrapper>
        <Paragraph>
          {/* Add your paragraph of text about yourself here */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut
          ultrices sapien. Morbi vulputate lobortis odio non lobortis. Nullam
          suscipit, sapien vel tincidunt facilisis, quam ligula sodales urna,
          nec porta felis urna id mi. Donec cursus lacus eu libero.
        </Paragraph>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About;

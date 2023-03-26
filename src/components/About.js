// src/components/About.js

import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About</Title>
      {/* Add your "About" content here */}
    </AboutContainer>
  );
};

export default About;

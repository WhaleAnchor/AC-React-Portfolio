// src/components/Projects.js

import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
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

const Projects = () => {
  return (
    <ProjectsContainer>
      <Title>Projects</Title>
      {/* Add your "Projects" content here */}
    </ProjectsContainer>
  );
};

export default Projects;

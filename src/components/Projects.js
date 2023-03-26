// src/components/Projects.js

import React from 'react';
import styled from 'styled-components';
import { Carousel as CarouselBase } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

//image imports
import techBlog from "../assets/techBlog.png"
import employeeTracker from "../assets/employeeTracker.png"
import weatherDashboard from "../assets/weatherDashboard.png"
import textEditor from "../assets/textEditor.png"
import teamProfileMaker from "../assets/teamProfileMaker.png"

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 20px;
  background-color: #222831;
  color: #eeeeee;
`;

const StyledCarousel = styled(CarouselBase)`
  width: 100% !important;

  .carousel .slide {
    background-color: transparent;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #37414f;
  border-radius: 8px;
  padding: 40px;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 60vh;
  object-fit: contain;
  border-radius: 4px;
`;

const ProjectTitle = styled.h2`
  font-size: 2rem;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProjectLink = styled.a`
  font-size: 1.1rem;
  color: white;
  text-decoration: none;
  border:2px solid;
  border-radius:10px;
  background:#00adb5;
  padding:3px;

  &:hover {
    text-decoration: underline;
  }
`;

const Projects = () => {
  const projects = [
    {
        title: 'Tech Blog',
        image: `${techBlog}`,
        description: 'The Tech Blog website is a place where users can come and talk about any topics they like!',
        link: 'https://github.com/WhaleAnchor/Tech-Blog',
      },
      {
        title: 'Employee Tracker',
        image: `${employeeTracker}`,
        description: 'A command line application that allows user to interface with a sql database to manage their employees.',
        link: 'https://github.com/WhaleAnchor/Employee_Tracker',
      },
      {
        title: 'Weather Dashboard',
        image: `${weatherDashboard}`,
        description: 'A website that allows users to bring up the weather for the day and for the next five days for the city of their choice!',
        link: 'https://github.com/WhaleAnchor/weather-dashboard',
      },
      {
        title: 'Text Editor',
        image: `${textEditor}`,
        description: 'The J.A.T.E. Text Editor is a Progressive Web Application that runs in the browser.',
        link: 'https://github.com/WhaleAnchor/Text-Editor',
      },
      {
        title: 'Team Profile Maker',
        image: `${teamProfileMaker}`,
        description: 'A command line application that generates a page of employee information with user inputted data.',
        link: 'https://github.com/WhaleAnchor/Team-Profile-Maker',
      },
  ];

  return (
    <ProjectsContainer>
      <Title>Projects</Title>
      <StyledCarousel showThumbs={false} infiniteLoop={true} interval={5000} autoPlay={true}>
        {projects.map((project) => (
          <ProjectCard key={project.title}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
              Check out my project!
            </ProjectLink>
          </ProjectCard>
        ))}
      </StyledCarousel>
    </ProjectsContainer>
  );
  
};

export default Projects;

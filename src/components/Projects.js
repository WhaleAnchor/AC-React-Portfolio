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
import boxChoi from "../assets/boxchoi.png"
import codingQuiz from "../assets/codingquiz.png"

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: rgb(34,40,49);
  background: linear-gradient(180deg, rgba(34,40,49,1) 95%, rgba(55,65,79,1) 100%);
  color: #eeeeee;
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 90%;
  padding-bottom: 48px; /* Add space for dots inside container */
`;

const StyledCarousel = styled(CarouselBase)`
  width: 100% !important;

  .carousel .slide {
    background-color: transparent;
  }

  .carousel .control-dots {
    position: absolute;
    bottom: 12px;
    left: 0;
    width: 100%;
    margin: 0 auto;
    z-index: 2;
  }

  .control-arrow {
    font-size: inherit !important;
  }

  .control-dots .dot {
    background-color: transparent !important;
    border: 1px solid #fff !important;
    box-shadow: none !important;
  }

  .control-dots .dot:hover,
  .control-dots .dot:focus,
  .control-dots .dot.selected {
    background-color: #00adb5 !important;
    box-shadow: 0 0 1px 2.5px #00adb5 !important;
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
  box-shadow: rgba(10, 5, 20, 5) 0px 0px 11px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ArrowPrev = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;
  opacity: 0.8;
  filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.5));

  &:before {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-right: 12px solid #eeeeee;
  }

  &:hover {
    opacity: 1;
  }
`;

const ArrowNext = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;
  opacity: 0.8;
  filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.5));

  &:before {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-left: 12px solid #eeeeee;
  }

  &:hover {
    opacity: 1;
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
      title: 'Weather Dashboard',
      image: `${weatherDashboard}`,
      description: 'A fun website that allows users to bring up the weather for the day and for the next five days for the city of their choice!',
      link: 'https://github.com/WhaleAnchor/weather-dashboard',
    },
    {
      title: 'Box Choi',
      image: `${boxChoi}`,
      description: 'An inventory app made with React/Firebase and hosted on Render. Custom-made for the inventory management of a local-business.',
      link: 'https://github.com/WhaleAnchor/Box-Choi',
    },
    {
      title: 'Tech Blog',
      image: `${techBlog}`,
      description: 'The-Tech-Blog website is a place where users can come and talk about any topics they like!',
      link: 'https://github.com/WhaleAnchor/Tech-Blog',
    },
    {
      title: 'Employee Tracker',
      image: `${employeeTracker}`,
      description: 'A command line application (CLI) that allows user to interface with a sql database to manage their employees.',
      link: 'https://github.com/WhaleAnchor/Employee_Tracker',
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
    {
      title: 'Coding Quiz',
      image: `${codingQuiz}`,
      description: 'A web-based quiz where users can test their knowledge on basic coding principles. Features a timer and a highscore. Deployed on Github Pages.',
      link: 'https://github.com/WhaleAnchor/Coding_Quiz_Challenge',
    },
  ];

  return (
    <ProjectsContainer>
      <Title>Projects</Title>
        <CarouselWrapper>
          <StyledCarousel
            showThumbs={false}
            infiniteLoop={true}
            interval={5000}
            autoPlay={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && <ArrowPrev type="button" onClick={onClickHandler} title={label} />
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && <ArrowNext type="button" onClick={onClickHandler} title={label} />
            }
          >
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
      </CarouselWrapper>

    </ProjectsContainer>
  );
};

export default Projects;

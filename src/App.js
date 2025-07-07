// src/App.js

import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Contact from './components/Contact';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Element name="home">
        <Intro />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="blog">
        <Blog />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </AppContainer>
  );
}

export default App;

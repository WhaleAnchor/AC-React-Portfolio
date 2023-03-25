// src/components/Intro.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './Intro.css';

const Intro = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    if (animationComplete) {
      setTimeout(() => {
        history.push('/about');
      }, 2000);
    }
  }, [animationComplete, history]);

  return (
    <div className="intro">
      <div className="intro-text" onAnimationEnd={() => setAnimationComplete(true)}>
        Hi, I'm Andrew
      </div>
    </div>
  );
};

export default Intro;

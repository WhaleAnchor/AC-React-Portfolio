// src/components/About.js

import React from 'react';
import styled from 'styled-components';
import profilePicture from '../assets/profilepicture.jpg';

const BlogContainer = styled.div`
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
  max-width: 2000px;
  margin: 0 auto;
  padding: 0 20px;
  align-items:center;
  justify-content:center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 15px;
  }
`;

const ImageWrapper = styled.div`
  flex: 0 0 250px;
  margin: 15px;
  border: 3px solid white;
  padding:8px;
  border-radius: 15px;
  background-color:rgb(55,65,79,1);

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

const BlogPostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  justify-content: center;
  margin-top: 40px;
`;

const BlogCard = styled.div`
  background: #222831;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  padding: 24px 20px;
  width: 50%;
  max-width: 1000px;
  min-width: 320px;
  color: #eeeeee;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 900px) {
    width: 90%;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: 0;
  }
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
  font-family: 'Montserrat', sans-serif;
`;

const CardDate = styled.p`
  font-size: 0.95rem;
  color: #bdbdbd;
  margin-bottom: 12px;
`;

const CardContent = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  font-family: 'Roboto', sans-serif;
`;

const Blog = () => {
  const blogPosts = [
    {
      title: 'How I Got Started in Digital Marketing',
      date: 'July 1, 2025',
      content: `My journey into digital marketing began with a curiosity for how brands connect with audiences online. I started by learning SEO and social media strategies, then expanded into analytics and content creation. Each project taught me the importance of adaptability and creativity.`
    },
    {
      title: 'Balancing Music and Tech: My Creative Workflow',
      date: 'June 15, 2025',
      content: `As a musician and developer, I find inspiration in both code and composition. My workflow involves setting clear goals, using digital tools for both music and marketing, and always making time for creative exploration.`
    },
    {
      title: 'Favorite Tools for Content Creation',
      date: 'May 28, 2025',
      content: `From Photoshop and Illustrator to DAWs and video editors, I rely on a suite of tools to bring ideas to life. I love experimenting with new software and sharing tips with others in the creative community.`
    },
    {
      title: 'How I Got Started in Digital Marketing',
      date: 'July 1, 2025',
      content: `My journey into digital marketing began with a curiosity for how brands connect with audiences online. I started by learning SEO and social media strategies, then expanded into analytics and content creation. Each project taught me the importance of adaptability and creativity.`
    },
    {
      title: 'Balancing Music and Tech: My Creative Workflow',
      date: 'June 15, 2025',
      content: `As a musician and developer, I find inspiration in both code and composition. My workflow involves setting clear goals, using digital tools for both music and marketing, and always making time for creative exploration.`
    },
    {
      title: 'Favorite Tools for Content Creation',
      date: 'May 28, 2025',
      content: `From Photoshop and Illustrator to DAWs and video editors, I rely on a suite of tools to bring ideas to life. I love experimenting with new software and sharing tips with others in the creative community.`
    }
  ];

  return (
    <BlogContainer>
      <Title>Blog</Title>
      <ContentWrapper>
        <ImageWrapper>
          <ProfileImage src={profilePicture} alt="Profile" />
        </ImageWrapper>
        <TextWrapper>
          <Paragraph>
            Welcome to my blog! Here, I share my insights and experiences in digital marketing, web development, and my current internship at Digital Summer Clinic and ThermoVerse. 
            I hope you find inspiration and useful information in my posts.
          </Paragraph>
        </TextWrapper>
      </ContentWrapper>
      <BlogPostsWrapper>
        {blogPosts.map((post, idx) => (
          <BlogCard key={idx}>
            <CardTitle>{post.title}</CardTitle>
            <CardDate>{post.date}</CardDate>
            <CardContent>{post.content}</CardContent>
          </BlogCard>
        ))}
      </BlogPostsWrapper>
    </BlogContainer>
  );
};

export default Blog;
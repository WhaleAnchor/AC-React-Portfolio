// src/components/About.js

import React from 'react';
import styled from 'styled-components';

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: rgb(55,65,79,1);
  background: linear-gradient(180deg, rgba(55,65,79,1) 90%, rgba(34,40,49,1) 100%);
  color: #eeeeee;
  padding-top: 80px;
  padding-right: 20px;
  padding-bottom: 0;
  padding-left: 20px; /* Add left padding for image */

  @media (max-width: 768px) {
    padding-top: 70px;
    padding-right: 10px;
    padding-bottom: 0;
    padding-left: 10px;
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
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px;
  align-items:center;
  justify-content:center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 15px;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  text-align: justify;
  max-width: 700px;
  margin: 0 auto;
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
  margin-bottom: 48px;
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
      title: 'Mid Internship Reflections',
      date: 'July 6, 2025',
      content: `It's halfway into the internship and I feel like I have done far less than I expected. I feel regret for not being able to contribute more to the team and the projects, but I am trying to regain my focus for the final stretch of the internship. 
      It feels quite discouraging to be met with unexpected obstacles! I won't let this get me down, though. I am determined to make the most of the remaining weeks and leave a positive impact on the team and the projects I am involved in!
      I have been working on a few projects, including a marketing campaign for ThermoVerse as well as redesigning their website to improve user engagement.`
    },
    {
      title: 'Balancing Life and Work',
      date: 'June 29, 2025',
      content: `This past week, I volunteered at a church youth camp and a VBS (Vacation Bible School) program. While it was so awesome to be part of something bigger than myself, I found it challenging to balance my time between volunteering and my internship at ThermoVerse.
      I learned that it's important to set boundaries and prioritize tasks to maintain a healthy work-life balance. At ThermoVerse, I find myself struggling to adapt to the fast-paced environment, but I am trying my best to keep up with the demands of the job while also making time for personal commitments.
      I've been meaning to take the Google Analytics Test for Digital Summer Clinic! I took half of the test before I got a network error and lost my progress. I need to find time to retake it and complete the certification. :(`
    },
    {
      title: 'My First Few Weeks at ThermoVerse',
      date: 'June 22, 2025',
      content: `I started my internship at Digital Summer Clinic with Ann Arbor SPARK on June 8 and I was placed with ThermoVerse, a tech start-up that works on innovative solutions for building energy efficiency.
      My first few weeks have been a whirlwind of learning and adapting to the fast-paced environment. I was not used to the scrappy, bootstrapping style of working in a company. I think it will take a while to get used to this! 
      On another note, I am very thankful to be working with Oliver, another intern at Digital Summer Clinic. He is a great person to work with and we have been collaborating on various projects. I can't wait to see where this goes!`
    }
  ];

  return (
    <BlogContainer>
      <Title>Blog</Title>
      <ContentWrapper>
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
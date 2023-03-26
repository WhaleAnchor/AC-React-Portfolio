// src/components/Contact.js

import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #37414f;
  color: #eeeeee;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Title>Contact</Title>
      {/* Add your "Contact" content here */}
    </ContactContainer>
  );
};

export default Contact;

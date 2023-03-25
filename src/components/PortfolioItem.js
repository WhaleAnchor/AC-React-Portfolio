// src/components/PortfolioItem.js

import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  padding: 20px;
  margin: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  transition: transform 0.5s;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 24px;
`;

const Description = styled.p`
  font-size: 16px;
`;

const PortfolioItem = ({ title, description }) => {
  return (
    <ItemContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </ItemContainer>
  );
};

export default PortfolioItem;

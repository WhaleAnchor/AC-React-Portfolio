// src/components/PortfolioList.js

import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import PortfolioItem from './PortfolioItem';

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ItemContainer = styled.div`
  flex-basis: 30%;
  margin: 10px;

  &.item-enter {
    opacity: 0;
    transform: translateX(${({ isEven }) => (isEven ? '-100%' : '100%')});
  }

  &.item-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 500ms;
  }
`;

const PortfolioList = ({ items }) => {
  return (
    <ListContainer>
      <TransitionGroup component={null}>
        {items.map((item, index) => (
          <CSSTransition key={item.id} classNames="item" timeout={500}>
            <ItemContainer isEven={index % 2 === 0}>
              <PortfolioItem title={item.title} description={item.description} />
            </ItemContainer>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ListContainer>
  );
};

export default PortfolioList;

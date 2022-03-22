import React from 'react';
import styled from 'styled-components';
import SortButton from '../components/SortButton';
import { FaRedoAlt } from 'react-icons/fa';

const Main = () => {
  return (
    <Container>
      <SortButton dropdown name="borderline" />
      <SortButton name="choiceBtn" all="전체" />
      <SortButton name="choiceBtn" />
      <div className="sort-icon">
        <FaRedoAlt size={20} color={'#a6a6a6'} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 1.5rem 1rem;
  background-color: #f9f9f9;
  .sort-icon {
    position: absolute;
    right: 25px;
  }
`;

export default Main;
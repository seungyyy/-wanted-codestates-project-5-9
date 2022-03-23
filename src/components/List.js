import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

const List = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <ListUl>
      list
    </ListUl>
  );
}

const ListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  .review-data-list {
    width: 165px;
    height: 165px;
    object-fit: cover;
  }
`;

export default List;

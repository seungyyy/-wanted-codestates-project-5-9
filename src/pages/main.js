import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SortButton from '../components/SortButton';
import { FaRedoAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { initReviewData } from '../state/reducers/actionType';
import List from '../components/List';
import Grid from '../components/Grid';
import ListMenu from '../components/ListMenu';
import SortFilter from '../components/SortFilter';


const Main = () => {
  const [list, setList] = useState('grid');
  const state = useSelector((state) => state.register.data);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.matches('.grid')) {
      setList('grid')
    } else { 
      setList('list')
    }
    dispatch(initReviewData());
  };

  useEffect(() => {
    console.log(state)
  }, [list]);

  return (
    <>
      <SortFilter data={state} />
      <ListMenu feature={handleChange} active={list} />
      {list === 'grid' ? <Grid /> : <List />}
    </>
  );
}

const SortContainer = styled.div`
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

const Article = styled.article`
  .review-list {
    display: flex;
    .review-grid-icon {
      width: 50%;
      text-align: center;
      img {
        width: 31px;
        padding: .7rem 0;
      }
    }
    .review-grid-icon.active {
      border-bottom: 2px solid #292929;
      color: #292929;
    }
    .review-grid-icon.none-active {
      border-bottom: 2px solid #a6a6a6;
      .none-active {
        opacity: .4;

      }
    }
  }
`;

export default Main;
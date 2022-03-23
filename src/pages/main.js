import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
    console.log(state.map((el) => el.comments));
  }, [list]);

  return (
    <>
      <SortFilter data={state} />
      <ListMenu feature={handleChange} active={list} />
      {list === 'grid' ? <Grid /> : <List />}
    </>
  );
}

export default Main;
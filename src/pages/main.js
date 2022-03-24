import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getReviewSortRecent } from '../state/reducers/actionType';
import List from '../components/List';
import Grid from '../components/Grid';
import ListMenu from '../components/ListMenu';
import SortFilter from '../components/SortFilter';
import Header from '../components/Header';


const Main = () => {
  const [list, setList] = useState('grid');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.matches('.grid')) {
      setList('grid')
    } else { 
      setList('list')
    }
  };
  
  useEffect(() => {
    dispatch(getReviewSortRecent());
  }, [dispatch]);

  return (
    <>
      <Header />
      <SortFilter />
      <ListMenu feature={handleChange} active={list} />
      {list === 'grid' ? <Grid /> : <List />}
    </>
  );
}

export default Main;
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  getReviewSortRecent,
  getReviewSortLike,
  getReviewSortBest,
  getReviewSortRandom,
} from '../state/reducers/actionType';
import PropTypes from 'prop-types';

const Modal = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.register.data);
  console.log(state)
  // useEffect(() => {
  //   dispatch(getReviewSortRecent());
  // }, []);

  const sortList = [
    {
      id: 1,
      content: '최신순',
      name: 'recent',
    },
    {
      id: 2,
      content: '좋아요순',
      name: 'like',
    },
    {
      id: 3,
      content: '베스트리뷰순',
      name: 'best',
    },
    {
      id: 4,
      content: '랜덤순',
      name: 'random',
    },
  ];

  const handleClickChoice = (e) => {
    if (e.target.matches('.recent')) {
      dispatch(getReviewSortRecent());
      console.log(dispatch(getReviewSortRecent()));
    } else if (e.target.matches('.random')) {
      dispatch(getReviewSortRandom())
    } else if (e.target.matches('.like')) {
      dispatch(getReviewSortLike())
    } else if (e.target.matches('.best')) { 
      dispatch(getReviewSortBest())
    }
    props.txt(e.target.textContent);
    props.open(false);
  };

  return (
    <ModalContent>
      {sortList.map((item) => (
        <li
          key={item.id}
          className={`${props.name === item.content ? 'active ' + item.name : item.name}`}
          onClick={handleClickChoice}
        >
          {item.content}
        </li>
      ))}
    </ModalContent>
  );
}

const ModalContent = styled.ul`
  position: absolute;
  padding: 1rem;
  font-size: 16px;
  line-height: 34px;
  top: 80px;
  border: 1px solid #ddd;
  background-color: #fff;
  z-index: 20;
  .random,
  .like,
  .best,
  .recent {
    color: #a6a6a6;
    &.active {
      color: #4348a2;
    }
  }
`;

Modal.propTypes = {
  setDataList: PropTypes.func,
  data: PropTypes.array,
};


export default Modal;

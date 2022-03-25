import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  getReviewSortRecent,
  getReviewSortLike,
  getReviewSortBest,
  getReviewSortRandom,
} from '../state/reducers/actionType';

const Modal = (props) => {
  const dispatch = useDispatch();

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
    <ModalBg onClick={() => {props.open(false)}}>
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
    </ModalBg>
  );
}
const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
`;

const ModalContent = styled.ul`
  position: absolute;
  padding: 1rem;
  font-size: 16px;
  line-height: 34px;
  top: calc(100% / 3);
  left: calc(100% / 500);
  transform: translate(450%, -65%);
  width: 130px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  background-color: #fff;
  z-index: 100;
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

export default Modal;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Modal = (props) => {
  const handleClickChoice = (e) => {
    props.txt(e.target.textContent);
    props.getTextValue(e.target.textContent);
    console.log(props.getTextValue);
    props.open(false);
  };

    return (
      <ModalContent>
        <li onClick={handleClickChoice} name="recent" className={props.txt === '최신순' ? 'active' : 'not'}>
          최신순
        </li>
        <li onClick={handleClickChoice} name="like" className={props.txt === '베스트리뷰순' ? 'active' : 'not'}>
          좋아요순
        </li>
        <li onClick={handleClickChoice} name="best" className={props.txt === '베스트리뷰순' ? 'active' : 'not'}>
          베스트리뷰순
        </li>
        <li onClick={handleClickChoice} name="random" className={props.txt === '랜덤순' ? 'active' : 'not'}>
          랜덤순
        </li>
      </ModalContent>
    );
}

const ModalContent = styled.article`
  position: absolute;
  padding: 1rem;
  font-size: 16px;
  line-height: 30px;
  top: 84px;
  border: 1px solid #ddd;
  background-color: #fff;
  z-index: 20;
  .active {
    color: #4348a2;
  }
  .not {
    color: #a6a6a6;
  }
`;

export default Modal;

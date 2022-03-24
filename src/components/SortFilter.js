import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { FaRedoAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { getReviewSortRecent } from '../state/reducers/actionType';

const SortFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [btnTxt, setBtnTxt] = useState('최신순');
  const dispatch = useDispatch();

  const handleClickSortBtn = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeRefresh = () => { 
    dispatch(getReviewSortRecent());
  }

  return (
    <Container>
      <Button type="button" onClick={handleClickSortBtn} className="sort-btn">
        <span>{btnTxt}</span>
      </Button>
      <span className="choiceBtn">전체</span>
      <span className="choiceBtn">{btnTxt}</span>
      <div className="icon-container" onClick={handleChangeRefresh}>
        <FaRedoAlt size={20} color={'#DBDBDB'} />
      </div>
      {isOpen && <Modal open={setIsOpen} txt={setBtnTxt} name={btnTxt} />}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  padding: 1.2rem 1rem;
  box-sizing: border-box;
  .choiceBtn {
    display: inline-block;
    height: 43px;
    padding: 0 1.3rem;
    line-height: 43px;
    font-size: 16px;
    font-weight: 600;
    margin-left: .7rem;
    border-radius: 25px;
    color: #4348a2;
    background-color: #e7e8f9;
    box-sizing: border-box;
  }
  .icon-container {
    flex: none;
    margin-left: auto;
    margin-right: 10px;
    cursor: pointer;
  }
`;

const Button = styled.button`
  height: 43px;
  padding-right: 27px;
  font-size: 17px;
  font-weight: 500;
  background-color: inherit;
  border-radius: 25px;
  border: 1px solid #868ceb;
  color: #4348a2;
  box-sizing: border-box;
  background: url('https://static.balaan.co.kr/mobile/img/icon/search/icon-arrow-bottom@2x.png') no-repeat;
  background-size: 15px;
  background-position: right 15px center;
  span {
    padding: 0 .5rem;
  }
`;

export default SortFilter;
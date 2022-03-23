import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const SortButton = (props) => {
  const { dropdown, name, all } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [btnTxt, setBtnTxt] = useState("최신순");

  const handleClickSortBtn = () => {
    setIsOpen(!isOpen);
  };
  
  const getTextValue = (text) => {
    setBtnTxt(text);
  };

  return (
    <>
      {dropdown && (
        <Button type="button" onClick={handleClickSortBtn} className={name === 'borderline' ? 'borderline' : null}>
          <span>{btnTxt}</span>
        </Button>
      )}
      {!dropdown && all && (
        <Div>
          <span className={name === 'choiceBtn' ? 'choice-btn' : null}>{all}</span>
        </Div>
      )}
      {!dropdown && !all && (
        <Div>
          <span className={name === 'choiceBtn' ? 'choice-btn' : null}>최신순</span>
        </Div>
      )}
      {isOpen && <Modal open={setIsOpen} txt={setBtnTxt} getTextValue={getTextValue} />}
    </>
  );
}

const Button = styled.button`
  height: 47px;
  padding-right: 25px;
  font-size: 18px;
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
    padding: 0 1rem;
  }
`;

const Div = styled.div`
  height: 47px;
  padding: 0 1.3rem;
  line-height: 47px;
  font-size: 16px;
  font-weight: 600;
  margin-left: 1rem;
  border-radius: 25px;
  color: #4348a2;
  background-color: #e7e8f9;
  box-sizing: border-box;
  .choice-btn {
  }
`;

export default SortButton;

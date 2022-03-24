import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const DetailHeader = () => {
  const navigate = useNavigate();

  const handleClickMovePage = () => { 
    navigate('/');
  }

  return (
    <Header>
      <button className="back-btn btn" type="button" onClick={handleClickMovePage}></button>
      <h2 className="title">리뷰 상세보기</h2>
      <button className="close-btn btn" type="button" onClick={handleClickMovePage}></button>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  box-sizing: border-box;
  .title {
    font-size: 21px;
    font-weight: bold;
  } 
  .btn.back-btn,
  .btn.close-btn {
    display: inline-block;
    width: 24px;
    height: 24px;
    background-size: 24px;
    padding: 0 2rem;
    box-sizing: border-box;
    cursor: pointer;
  }
  .back-btn {
    background: url('https://djp5oonlusoz4.cloudfront.net/contents/event/20190924/ic_left_btn.png') no-repeat center;
  }
  .close-btn {
    background: url('https://djp5oonlusoz4.cloudfront.net/contents/event/20190924/ic_can_btn.png') no-repeat center;
  }
`;

export default DetailHeader;

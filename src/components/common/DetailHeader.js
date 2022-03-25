import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const DetailHeader = (props) => {
  const { detail, titleTxt } = props;
  const navigate = useNavigate();

  const handleClickMovePage = () => { 
    navigate('/');
  }

  return (
    <Header>
      {detail && <button className="back-btn btn" type="button" onClick={handleClickMovePage}></button>}
      <h2 className={detail ? 'title' : 'review-title'}>{titleTxt}</h2>
      <button
        className={detail ? 'close-btn btn' : 'close-btn-review btn'}
        type="button"
        onClick={handleClickMovePage}
      ></button>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  box-sizing: border-box;
  .title,
  .review-title {
    font-size: 21px;
    font-weight: bold;
  }
  .review-title {
    flex: none;
    width: 100%;
    text-align: center;
  }
  .close-btn-review {
    margin-left: -64px;
  }
  .btn.back-btn,
  .btn.close-btn,
  .btn.close-btn-review {
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
  .close-btn,
  .close-btn-review {
    background: url('https://djp5oonlusoz4.cloudfront.net/contents/event/20190924/ic_can_btn.png') no-repeat center;
  }
`;

export default DetailHeader;

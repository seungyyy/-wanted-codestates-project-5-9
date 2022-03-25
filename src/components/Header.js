import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = () => { 
    navigate('/review');
  }

  return (
    <MainHeader>
      <div className="main-header">
        <img src="https://i.balaan.io/mobile/img/icon/ico_logo.png" alt="발란 로고" className="logo" />
        <button type="button" onClick={handleNavigate} className="review-btn">리뷰 등록</button>
      </div>
      <Navbar>
        <ul className="nav">
          <li>
            <button className="nav-btn">특가</button>
          </li>
          <li>
            <button className="nav-btn">당일배송</button>
          </li>
          <li>
            <button className="nav-btn">디자이너</button>
          </li>
          <li>
            <button className="nav-btn nav-review">리뷰</button>
          </li>
          <li>
            <button className="nav-btn">이벤트</button>
          </li>
        </ul>
      </Navbar>
    </MainHeader>
  );
}

const MainHeader = styled.header`
  .main-header {
    display: flex;
    justify-content: space-between;
    padding: 1.3rem;
    box-sizing: border-box;
    align-items: center;
    .logo {
      width: 164px;
      text-align: center;
      object-fit: cover;
    }
    .review-btn {
      padding: 0.7rem 1.3rem;
      box-sizing: border-box;
      background-color: #e7e8f9;
      color: #4348a2;
      border-radius: 30px;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

const Navbar = styled.nav`
  .nav {
    display: flex;
    .nav-btn {
      letter-spacing: -1px;
      padding: 1rem 1.3rem 0.5rem;
      font-size: 1.2rem;
      font-weight: 700;
      box-sizing: border-box;
      color: #555;
      cursor: pointer;
    }
    .nav-review {
      border-bottom: 3px solid #4348a2;
    }
  }
`;

export default Header;
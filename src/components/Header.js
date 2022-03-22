import React from 'react';
import styled from 'styled-components';


const Header = () => {
  return (
    <MainHeader>
      <img src="https://i.balaan.io/mobile/img/icon/ico_logo.png" alt="발란 로고" className="logo" />
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
  box-shadow: rgba(0, 0, 0, 0.35) 0px 15px 20px -20px;
  .logo {
    padding: 1.3rem;
    width: 164px;
    text-align: center;
    object-fit: cover;
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
      color: #555;
      cursor: pointer;
    }
    .nav-review {
      border-bottom: 3px solid #555;
    }
  }
`;

export default Header;
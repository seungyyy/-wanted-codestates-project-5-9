import React from 'react';
import styled from 'styled-components';

const ListMenu = ({ feature, active }) => {

  return (
    <Ul onClick={feature}>
      <li className={`grid ${active === 'grid' ? 'active review-grid-icon' : 'review-grid-icon not-active'}`}>
      </li>
      <li className={`list ${active === 'list' ? 'active review-grid-icon' : 'review-grid-icon not-active'}`}>
      </li>
    </Ul>
  );
}

const Ul = styled.ul`
  display: flex;
  .review-grid-icon {
    height: 50px;
    width: 50%;
  }
  .review-grid-icon.grid {
    background: url('https://static.balaan.co.kr/mobile/img/icon/contents/tab-icon-01@2x.png') no-repeat center;
    background-size: 31px;
  }
  .list.review-grid-icon {
    background: url('https://static.balaan.co.kr/mobile/img/icon/contents/tab-icon-02@2x.png') no-repeat center;
    background-size: 31px;
  }
  .review-grid-icon.active {
    border-bottom: 2px solid #292929;
    color: #292929;
  }
  .review-grid-icon.not-active {
    border-bottom: 2px solid #a6a6a6;
    opacity: 0.4;
  }
`;

export default ListMenu;
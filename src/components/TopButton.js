import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TopButton = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isBtn, setIsBtn] = useState(false);

  const handleScroll = () => { 
    setScrollY(window.pageYOffset);
    if (scrollY > 200) {
      setIsBtn(true);
    } else { 
      setIsBtn(false);
    }
  }

  const handleTop = () => { 
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    setScrollY(0);
    setIsBtn(false);
  }

  useEffect(() => {
    const watch = () => { 
      window.addEventListener('scroll', handleScroll)
    }
    watch()
    return () => { window.removeEventListener('scroll', handleScroll);}
  })

  return (
    <>
      {isBtn && <Button className={isBtn ? 'active' : ''} onClick={handleTop} ></Button>}
    </>
  )
}

const Button = styled.button`
  position: fixed;
  opacity: 0;
  bottom: 40px;
  right: calc(100% / 500px);
  transform: translateX(400px);
  z-index: -10;
  width: 55px;
  height: 55px;
  border-radius: 8px;
  background: rgba(249, 249, 249, 1);
  color: blueviolet;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: opacity 0.4s ease-in;
  &.active {
    z-index: 20;
    opacity: 1;
  }
  &:active,
  &:focus {
    outline: none;
  }
  &::after {
    position: absolute;
    top: 32%;
    left: 50%;
    transform: translate(-50%);
    width: 24px;
    height: 14px;
    content: '';
    background: url('https://static.balaan.co.kr/mobile/img/ico/ico_common2.png') no-repeat center;
    background-size: 32rem;
    background-position: 100% -2.7rem;
  }
`;

export default TopButton;

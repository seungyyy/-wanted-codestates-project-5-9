import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewData } from '../state/reducers/actionType';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router';

const defaultOption = {
  root: null,
  threshold: 0.5,
  rootMargin: '0px',
};

const Grid = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [ref, setRef] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, length } = useSelector((state) => ({
    length: state.register.length,
    data: state.register.data,
  }));
  useEffect(() => {
    if (length === 225 || data.length < length) {
      setIsLoaded(false);
    }
  }, [length, data.length]);

  const onIntersect = useCallback(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        dispatch(getReviewData());
        observer.observe(entry.target);
      }
    },
    [dispatch]
  );
  
  useEffect(() => {
    let observer;
    if (ref) {
      observer = new IntersectionObserver(onIntersect, defaultOption);
      observer.observe(ref);
    } 
    return () => observer && observer.disconnect();
  }, [ref, onIntersect]);

  const handleClickMovePage = (id) => { 
    navigate({
      pathname: '/detail',
      search: `?review=${id}`,
    });
  }

  return (
    <GridContainer>
      <ul className="grid-ul">
        {data.slice(0, length).map((item) => {
          return (
            <li key={item.id} className="grid-list" onClick={() => handleClickMovePage(item.nickname)}>
              <img src={item.thumbnail.includes('data:image') === false ? 'https://i.balaan.io/review/' + item.thumbnail : item.thumbnail} alt="리뷰이미지" />
            </li>
          );
        })}
      </ul>
      {isLoaded && (
        <div className="spinner" ref={setRef}>
          <TailSpin height="200" width="200" color="#ddd" />
        </div>
      )}
    </GridContainer>
  );
}

const GridContainer = styled.article`
  margin-top: 2px;
  .grid-ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    overflow-y: auto;
    .grid-list {
      img {
        width: 164px;
        height: 164px;
        object-fit: cover;
      }
    }
  }
  .spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    box-sizing: border-box;
  }
`;

export default Grid;

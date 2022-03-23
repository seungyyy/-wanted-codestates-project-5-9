import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewData } from '../state/reducers/actionType';
// import useIntersect from '../hooks/useIntersect';

const defaultOption = {
  root: null,
  threshold: 0.5,
  rootMargin: '0px',
};

const Grid = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [ref, setRef] = useState(null);
  //const [num, setNum] = useState(15);
  const dispatch = useDispatch();
  const { data, length } = useSelector((state) => ({
    length: state.register.length,
    data: state.register.data,
  }));
  useEffect(() => {
    if (data.length === length) {
      setIsLoaded(false);
    }
  }, [length]);

  const onIntersect = ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      dispatch(getReviewData());
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (ref) {
      observer = new IntersectionObserver(onIntersect, defaultOption);
      observer.observe(ref);
    }
    return () => observer && observer.disconnect();
  }, [ref]);

  return (
    <GridContainer>
      <ul className="list">
        {data.slice(0, length).map((item, idx) => {
          return (
            <li key={idx} className="grid-list">
              <img src={'https://i.balaan.io/review/' + item.thumbnail} />
            </li>
          );
        })}
      </ul>
      {isLoaded && (
        <div ref={setRef} className="Target-Element">
          sdaasdasdadasdsadsad
        </div>
      )}
    </GridContainer>
  );
}

const GridContainer = styled.article`
  .list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    .grid-list {
      img {
        width: 164px;
        height: 164px;
        object-fit: cover;
      }
    }
  }
`;

export default Grid;

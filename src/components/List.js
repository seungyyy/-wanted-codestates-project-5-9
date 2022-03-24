import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewData } from '../state/reducers/actionType';
import { TailSpin } from 'react-loader-spinner';
import Comments from './Comments';

const defaultOption = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
}

const List = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ref, setRef] = useState(null);

  const dispatch = useDispatch();
  const { data, length } = useSelector((state) => ({
    length: state.register.length,
    data: state.register.data,
  }));

  useEffect(() => {
    if (length === 225 || data.length < length) {
      setIsLoading(false);
    }
  }, [length, data.length]);

  const onIntersect = useCallback(([entry], observer) => { 
    if (entry.isIntersecting) { 
      observer.unobserve(entry.target);
      dispatch(getReviewData());
      observer.observe(entry.target);
    }
  }, [dispatch]);
  
  useEffect(() => { 
    let observer;
    if (ref) { 
      observer = new IntersectionObserver(onIntersect, defaultOption);
      observer.observe(ref);
    }
    return () => observer && observer.disconnect();
  },[ref, onIntersect])
  return (
    <ListContainter>
      <ul className="list-ul">
        {data.slice(0, length).map((item) => (
          <li key={item.id}>
            <div className="item-header">
              <strong>{item.nickname}</strong>
              <p className="review-date">{item.regdt.split(' ').slice(0, 1)}</p>
              <button className="report-icon"></button>
            </div>
            <img src={'https://i.balaan.io/review/' + item.thumbnail} alt="리뷰이미지" className="review-thumb" />
            <DetailContent>
              <ul className="detail-icon">
                <li>
                  <button>
                    <img
                      src="https://static.balaan.co.kr/mobile/img/icon/like_hand.png"
                      alt="좋아요버튼"
                      className="like-btn"
                    />
                    <span className="like-btn-txt">{item.like}</span>
                  </button>
                </li>
                <li>
                  <button>
                    <img
                      src="https://static.balaan.co.kr/mobile/img/view/share.png?v=2"
                      alt="공유하기버튼"
                      className="share-btn"
                    />
                  </button>
                </li>
                <li className="save-btn-list">
                  <button>
                    <img
                      src="https://static.balaan.co.kr/mobile/img/icon/ic-new-heart-normal.png"
                      alt="저장하기버튼"
                      className="save-btn"
                    />
                  </button>
                </li>
              </ul>
              {item.point === 1 && (
                <div className="star-container">
                  <span className="star-on star"></span>
                  <span className="star-off star"></span>
                  <span className="star-off star"></span>
                  <span className="star-off star"></span>
                  <span className="star-off star"></span>
                </div>
              )}
              {item.point === 2 && (
                <div className="star-container">
                  <span className="star-on star"></span>
                  <span className="star-on star"></span>
                  <span className="star-off star"></span>
                  <span className="star-off star"></span>
                  <span className="star-off star"></span>
                </div>
              )}
              {item.point === 3 && (
                <div className="star-container">
                  <span className="star-on star"></span>
                  <span className="star-on star"></span>
                  <span className="star-on star"></span>
                  <span className="star-off star"></span>
                  <span className="star-off star"></span>
                </div>
              )}
              {item.point === 4 && (
                <div className="star-container">
                  <span className="star-on star"></span>
                  <span className="star-on star"></span>
                  <span className="star-on star"></span>
                  <span className="star-on star"></span>
                  <span className="star-off star"></span>
                </div>
              )}
              {item.point === 5 && (
                <div className="star-container">
                  <span className="star-on star"></span>
                  <span className="star-on star"></span>
                  <span className="star-on star"></span>
                  <span className="star-on star"></span>
                  <span className="star-on star"></span>
                </div>
              )}
              <p className="member-size">
                구매옵션명:{item.opt.replace('옵션 /', '')} / {item.memberSize.replace('/', ' / ').split('&nbsp;')}
              </p>
              <p className="review-txt">{item.contents}</p>
            </DetailContent>
            <ReviewSize>
              <li>
                <span className="reviewSize-Tit">{item.reviewSize[0].sizeTitle && item.reviewSize[0].sizeTitle}</span>
                <span className="reviewSize-Txt">{item.reviewSize[0].sizeTxt && item.reviewSize[0].sizeTxt}</span>
              </li>
              <li>
                <span className="reviewSize-Tit">{item.reviewSize[1].colorTitle && item.reviewSize[1].colorTitle}</span>
                <span className="reviewSize-Txt">{item.reviewSize[1].colorTxt && item.reviewSize[1].colorTxt}</span>
              </li>
              {item.reviewSize[2] && (
                <li>
                  <span className="reviewSize-Tit">{item.reviewSize[2]?.footTitle || item.reviewSize.footTitle}</span>
                  <span className="reviewSize-Txt">{item.reviewSize[2]?.fooTxt || item.reviewSize.fooTxt}</span>
                  <span className="reviewSize-Tit">{item.reviewSize[2]?.fitTitle || item.reviewSize.fitTitle}</span>
                  <span className="reviewSize-Txt">{item.reviewSize[2]?.fitTxt || item.reviewSize.fitTxt}</span>
                </li>
              )}
            </ReviewSize>
            <Comments data={item.id} />
          </li>
        ))}
        {isLoading && (
          <div className="spinner" ref={setRef}>
            <TailSpin height="200" width="200" color="#ddd" />
          </div>
        )}
      </ul>
    </ListContainter>
  );
}

const ListContainter = styled.article`
  .item-header {
    display: flex;
    align-items: center;
    padding: 1.3rem 1.5rem;
    box-sizing: border-box;
    strong {
      float: left;
      font-size: 21px;
      font-weight: 600;
    }
    .review-date {
      flex: none;
      margin-left: auto;
      color: #999;
      font-size: 17px;
    }
    .report-icon {
      width: 31px;
      height: 31px;
      background: url('https://i.balaan.io/mobile/img/icon/icon-more.png') no-repeat;
      background-size: 31px;
      margin-left: 16px;
    }
  }
  .review-thumb {
    width: 500px;
    height: 666px;
    object-fit: cover;
  } 
`;

const DetailContent = styled.div`
  padding: 1.3rem 1.5rem;
  box-sizing: border-box;
  .detail-icon {
    display: flex;
    align-items: center;
    .save-btn-list {
      flex: none;
      margin-left: auto;
    }
    .like-btn,
    .share-btn,
    .save-btn {
      width: 31px;
      object-fit: contain;
    }
    .like-btn-txt {
      line-height: 32px;
      font-size: 18px;
      margin-left: 8px;
      font-weight: 600;
      color: #222;
    }
  }
  .star-container {
    margin: 24px 0 10px;
    .star-on.star {
      background: url('https://i.balaan.io/mobile/img/icons/icon-star-black.webp') no-repeat;
    }
    .star-off.star {
      background: url('https://i.balaan.io/mobile/img/icons/icon-star-gray.webp') no-repeat;
    }
    .star-on.star,
    .star-off.star {
      display: inline-block;
      width: 21px;
      height: 21px;
      background-size: 21px;
    }
  }
  .member-size {
    font-size: 18px;
    color: #999;
  }
  .review-txt {
    margin: 19px 0 25px;
    letter-spacing: -1px;
    color: #020202;
    font-size: 18px;
    line-height: 1.7;
  }
`;

const ReviewSize = styled.ul`
  display: flex;
  color: #666;
  padding-left: 1.5rem;
  width: 500px;
  overflow: hidden;
  box-sizing: border-box;
  li {
    padding: 8px 10px;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    border-radius: 20px;
    font-size: 16px;
    white-space: nowrap;
    &:nth-child(n) {
      margin-left: 10px;
    }
    &:first-child {
      margin-left: 0;
    }
    .reviewSize-Tit {
      font-size: 14px;
    }
    .reviewSize-Txt {
      margin-left: 10px;
      color: #4348a2;
    }
  }
`;

export default List;

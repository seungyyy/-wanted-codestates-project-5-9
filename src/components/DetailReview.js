import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import QueryString from 'qs';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { toggleLikeData } from '../state/reducers/actionType';
import Comments from './Comments';
import ShareModal from './ShareModal';

const DetailReview = () => {
  const [isLike, setIsLike] = useState(false);
  const [isShare, setIsShare] = useState(false);
  const data = useSelector((state) => state.register.data);
  const location = useLocation();
  const dispatch = useDispatch();
  const queryString = QueryString.parse(location.search, { ignoreQueryPrefix: true });
  const reviewNick = queryString.review;

  const handleToggleLike = (id) => {
    dispatch(toggleLikeData(id));
    setIsLike(!isLike);
  };

  const handleShareUrl = () => {
    setIsShare(!isShare);
  };

  const handleClickSaveReview = () => {
    alert('로그인하셔야 본 서비스를 이용하실 수 있습니다');
  };

  return (
    <ListContainter>
      {isShare && <ShareModal open={setIsShare} />}
      <ul className="list-ul">
        {data.map(
          (item) =>
            item.nickname === reviewNick && (
              <li key={item.id}>
                <div className="item-header">
                  <strong>{item.nickname}</strong>
                  <p className="review-date">{item.regdt.split(' ').slice(0, 1)}</p>
                  <button className="report-icon"></button>
                </div>
                <img
                  src={
                    item.thumbnail.includes('data:image') === false
                      ? 'https://i.balaan.io/review/' + item.thumbnail
                      : item.thumbnail
                  }
                  alt="리뷰이미지"
                  className="review-thumb"
                />
                <DetailContent>
                  <ul className="detail-icon">
                    <li>
                      <button
                        onClick={() => {
                          handleToggleLike(item.id);
                        }}
                        className="like-btn"
                      >
                        {isLike === false && (
                          <img
                            src="https://static.balaan.co.kr/mobile/img/icon/like_hand.png"
                            alt="좋아요버튼"
                            className="like-img"
                          />
                        )}
                        {isLike === true && (
                          <img
                            src="https://static.balaan.co.kr/mobile/img/review/like-hand-fill.png?v4"
                            alt="좋아요버튼"
                            className="like-img"
                          />
                        )}
                        <span className="like-btn-txt">{item.like}</span>
                      </button>
                    </li>
                    <li>
                      <button className="share-btn" onClick={handleShareUrl}>
                        <img
                          src="https://static.balaan.co.kr/mobile/img/view/share.png?v=2"
                          alt="공유하기버튼"
                          className="share-img"
                        />
                      </button>
                    </li>
                    <li className="save-btn-list" onClick={handleClickSaveReview}>
                      <button className="save-btn">
                        <img
                          src="https://static.balaan.co.kr/mobile/img/icon/ic-new-heart-normal.png"
                          alt="저장하기버튼"
                          className="save-img"
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
                  {item.reviewSize[0] &&
                    <li>
                      <span className="reviewSize-Tit">
                        {item.reviewSize[0].sizeTitle && item.reviewSize[0].sizeTitle}
                      </span>
                      <span className="reviewSize-Txt">{item.reviewSize[0].sizeTxt && item.reviewSize[0].sizeTxt}</span>
                    </li>
                  }
                  {item.reviewSize[1] &&
                    <li>
                      <span className="reviewSize-Tit">
                        {item.reviewSize[1].colorTitle && item.reviewSize[1].colorTitle}
                      </span>
                      <span className="reviewSize-Txt">{item.reviewSize[1].colorTxt && item.reviewSize[1].colorTxt}</span>
                    </li>
                  }
                  {item.reviewSize[2] && (
                    <li>
                      <span className="reviewSize-Tit">
                        {item.reviewSize[2]?.footTitle || item.reviewSize.footTitle}
                      </span>
                      <span className="reviewSize-Txt">{item.reviewSize[2]?.fooTxt || item.reviewSize.fooTxt}</span>
                      <span className="reviewSize-Tit">{item.reviewSize[2]?.fitTitle || item.reviewSize.fitTitle}</span>
                      <span className="reviewSize-Txt">{item.reviewSize[2]?.fitTxt || item.reviewSize.fitTxt}</span>
                    </li>
                  )}
                </ReviewSize>
                <Comments data={item.id} />
              </li>
            )
        )}
      </ul>
    </ListContainter>
  );
}

const ListContainter = styled.article`
  border-top: 3px solid #f9f9f9;
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
    .like-btn,
    .save-btn,
    .share-btn {
      cursor: pointer;
    }
    .save-btn-list {
      flex: none;
      margin-left: auto;
    }
    .like-img,
    .share-img,
    .save-img {
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

export default DetailReview;
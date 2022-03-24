import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { AddCommitData } from '../state/reducers/actionType';

const Comments = ({ data }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.register.data);
  const inputRef = useRef();
 
  const dateStringChange = (date) => {
    const changeGetTime = new Date(date).getTime()
    const now = new Date().getTime();
    const seconds = Math.floor((now - changeGetTime) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hour = Math.floor(minutes / 60);
    const day = Math.floor(hour / 24);

    if (minutes === 0) {
      return '방금전';
    } else if (hour === 0) {
      return `${minutes}분`;
    } else if (day === 0) {
      return `${hour}시간`;
    } else if (day < 7) {
      return `${day}일`
    } else { 
      const weekly = Math.floor(day / 7);
      return `${weekly}주`;
    }
  }
  
  const AddComment = () => {
    const id = Math.floor(Math.random()*(90000-10000) + 10000)
    const nickname = 'testUser';
    const regdt = new Date().toISOString();
    const contents = inputRef.current.value;
    dispatch(AddCommitData(data, id, nickname, regdt, contents));

    inputRef.current.value = '';
  }
  
  const handleKeyPress = (e) => { 
    if (e.keyCode === 13) { 
      if (e.target.value.length > 0) { 
        AddComment();
      }
    }
  }

  const handleCommentSave = () => { 
    if (inputRef.current.value !== '') { 
      AddComment();
    }
  }

  const findData = state.filter((el) => el.id === data)[0];

  return (
    <Container>
      {findData.comments.length !== 0 && (
        <Ul>
          {findData.comments.map((item) => (
            <li key={item.id} className={item.depth === 1 ? 'comment-more' : ''}>
              <span className="comment-nick">{item.nickname}</span>
              <span className="comment-cont">{item.contents}</span>
              <span className="comment-date">{dateStringChange(item.regdt)}</span>
            </li>
          ))}
        </Ul>
      )}
      <div className="comment-inp">
        <input type="text" placeholder="댓글을 입력해주세요." ref={inputRef} onKeyPress={handleKeyPress} />
        <button type="button" onClick={handleCommentSave}>
          게시
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 40px;
  background: #f9f9f9;
  padding: 2rem 1.5rem;
  box-sizing: border-box;
  .comment-inp {
    position: relative;
    input {
      display: block;
      margin-top: 20px;
      width: 100%;
      padding: 1rem 1.2rem;
      box-sizing: border-box;
      border-radius: 40px;
      border: 1px solid #ddd;
      color: #333;
      font-size: 18px;
    }
    button {
      position: absolute;
      right: 10px;
      z-index: 10;
      bottom: -3px;
      font-size: 20px;
      padding: 1.2rem 1.5rem;
      box-sizing: border-box;
    }
  }
`;

const Ul = styled.ul`
  li {
    &:not(:last-of-type) {
      margin-bottom: 18px;
    }
    .comment-nick {
      margin-right: 10px;
      color: #222;
      font-size: 20px;
      font-weight: bold;
    }
    .comment-cont {
      font-size: 18px;
    }
    .comment-date {
      display: block;
      margin-top: 6px;
      color: #999;
      font-size: 16px;
    }
  }
  .comment-more {
    margin-left: 30px;
  }
`;

export default Comments;

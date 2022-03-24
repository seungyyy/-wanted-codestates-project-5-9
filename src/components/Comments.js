import React from 'react';
import styled from 'styled-components';

const Comments = () => {
  return (
    <Container>
      <div className="comment-inp">
        <input type="text" placeholder="댓글을 입력해주세요." />
        <button type="button">게시</button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  background: #f9f9f9;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  .comment-inp {
    position: relative;
    margin-top: 20px;
    input {
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

export default Comments;

import React from 'react';
import styled from 'styled-components';

const ReviewCont = ({ reviewTit, content, refInp, refTxt }) => {
  return (
    <Container>
      {reviewTit !== '별점' && <label htmlFor={content === 'textarea' ? 'textarea' : 'inp'}>{reviewTit}</label>}
      {reviewTit === '별점' && <label htmlFor="select" className="point-label">{reviewTit}</label>}
      {content === 'textarea' && <textarea placeholder="리뷰를 작성해주세요." ref={refTxt} cols={10} id="textarea" />}
      {content === 'inp' && <input type="text" id="inp" ref={refInp} />}
      {content === 'img' && (
        <p className="img-cont-txt">
          리뷰에 사진을 업로드 해주세요.상품과 관련 없거나 부적합한 사진을 리뷰에 등록하시는 경우 사전 경고 없이 삭제될
          수 있습니다.
        </p>
      )}
    </Container>
  );
}

const Container = styled.div`
  label {
    display: block;
    font-weight: bold;
    font-size: 18px;
    color: #555;
    margin-bottom: 10px;
  }
  #inp {
    width: 100%;
    border: 2px solid #f9f9f9;
    box-sizing: border-box;
    margin-bottom: 35px;
    font-size: 16px;
    padding: .5rem;
  }
  #textarea {
    width: 100%;
    height: 200px;
    box-sizing: border-box;
    resize: none;
    padding: 0.7rem;
    border: 2px solid #f9f9f9;
  }
  .img-cont-txt {
    width: 70%;
    color: #777;
    font-size: 14px;
  }
  .point-label {
    margin-bottom: 35px;
  }
`;

export default ReviewCont;
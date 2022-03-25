import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { FaRegFileImage, FaRegWindowClose } from 'react-icons/fa';
import ReviewCont from './common/ReviewCont';
import { postReview } from '../state/reducers/actionType';
import { useDispatch } from 'react-redux'; 

const ReviewContent = () => {
  const [files, setFiles] = useState('');
  const [image, setImage] = useState(false);
  const [points, setPoints] = useState(1);
  const dispatch = useDispatch();
  const refInp = useRef();
  const refTxt = useRef();

  const onLoadFile = (e) => {
    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        const baseFile = reader.result;
        if (baseFile) {
          setFiles(baseFile.toString());
        }
      };
      setImage(true);
    }
  };

  const handleDeleteImage = () => {
    setFiles('');
    setImage(false);
  }

  const handleChangeSelected = (e) => { 
    setPoints(e.target.value);
  }

  const handleSubmit = () => { 
    const id = Math.floor(Math.random() * (900000 - 50000) + 100000)
    const point = points;
    const regdt = new Date().toLocaleString();
    const cdt = new Date().getTime();
    const thumbnail = files;
    if (refInp.current.value.length < 1) {
      refInp.current.focus();
      return;
    }
    if (refTxt.current.value.length < 10) {
      refTxt.current.focus();
      return;
    }
    if (!files) {
      return;
    }
    dispatch(postReview(id, point, regdt, cdt, thumbnail));
  }
  

  return (
    <Container>
      <ReviewCont reviewTit="제목" content="inp" refInp={refInp} />
      <ReviewCont reviewTit="내용" content="textarea" refTxt={refTxt} />
      <p className="review-text-alert">
        해당 상품과 무관한 내용이나 동일 문자의 반복 등 부적합한 내용은 삭제될 수 있습니다.
      </p>
      <PointContainer>
        <ReviewCont reviewTit="별점" />
        <div className="review-select-cont">
          <select value={points} onChange={handleChangeSelected} className="review-select">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
      </PointContainer>
      <ReviewCont reviewTit="사진업로드" content="img" />
      {image && (
        <Div className="preview-img" onClick={handleDeleteImage}>
          <div className="close-icon">
            <FaRegWindowClose size={30} color={'#c6c6c6'} />
          </div>
          <img src={files} alt="이미지 미리보기" />
        </Div>
      )}
      {!image && (
        <ImageUpload>
          <input type="file" id="img-inp" accept="image/*" onChange={onLoadFile} />
          <label htmlFor="img-inp">
            <FaRegFileImage size={30} color={'#c6c6c6'} style={{ padding: '1rem 2rem 2rem' }} />
          </label>
          <span>사진 선택</span>
        </ImageUpload>
      )}
      <button onClick={handleSubmit} className={image ? 'save-btn' : 'save-btn fix'}>
        저장하기
      </button>
    </Container>
  );
};

const Container = styled.section`
  height: calc(100vh - 76px);
  padding: 1.5rem;
  box-sizing: border-box;
  .review-text-alert {
    margin: 10px 0 35px;
    font-size: 14px;
    color: #999;
  }
  .save-btn {
    margin-top: 40px;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    background-color: #4348a2;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
  .save-btn.fix {
    position: fixed;
    width: 452px;
    bottom: 28px;
  }
`;

const ImageUpload = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 20px;
  width: 100px;
  height: 100px;
  border: 2px solid #e9e9e9;
  border-radius: 3px;
  #img-inp {
    display: none;
  }
  span {
    position: absolute;
    bottom: 15px;
    font-size: 14px;
  }
`;

const Div = styled.div`
  position: relative;
  margin-top: 20px;
  cursor: pointer;
  img {
    width: 180px;
    height: 140px;
    object-fit: cover;
    border: 1px solid #e9e9e9;
  }
  .close-icon {
    position: absolute;
    top: 45%;
    left: 20%;
    transform: translate(-50%);
  }
`;  

const PointContainer = styled.div`
  display: flex;
  .review-select {
    width: 80px;
    padding: 2px 22px;
    margin-left: 20px;
    border: 2px solid #e9e9e9;
    box-sizing: border-box;
  }
`;


export default ReviewContent;

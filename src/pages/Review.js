import React from 'react';
import DetailHeader from '../components/common/DetailHeader';
import ReviewContent from '../components/ReviewContent';
  
const Review = () => {
  return (
    <>
      <DetailHeader titleTxt="리뷰 작성하기" />
      <ReviewContent />
    </>
  );
}

export default Review;

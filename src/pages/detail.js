import React from 'react';
import DetailReview from '../components/DetailReview';
import DetailHeader from '../components/common/DetailHeader';

const Detail = () => {
  return (
    <>
      <DetailHeader detail titleTxt="리뷰 상세보기"/>
      <DetailReview />
    </>
  )
}

export default Detail;

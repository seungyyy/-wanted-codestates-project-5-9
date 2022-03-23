export const GET_REVIEW_DETAIL = 'GET_REVIEW_DETAIL';
export const GET_REVIEW_DETAIL_FAILURE = 'GET_REVIEW_DETAIL_FAILURE';
export const GET_REVIEW_DATA = 'GET_REVIEW_DATA';
export const GET_REVIEW_SORT_RECENT = 'GET_REVIEW_SORT_RECENT';
export const GET_REVIEW_SORT_LIKE = 'GET_REVIEW_SORT_LIKE';
export const GET_REVIEW_SORT_BEST = 'GET_REVIEW_SORT_BEST';
export const GET_REVIEW_SORT_RANDOM = 'GET_REVIEW_SORT_RANDOM';
export const POST_REVIEW = 'POST_REVIEW';
export const INIT_REVIEW_DATA = 'INIT_REVIEW_DATA';
export const ADD_REVIEW_DATA = 'ADD_REVIEW_DATA';

export const getReviewDetail = (id) => ({
  type: GET_REVIEW_DETAIL,
  id,
});

export const getReviewDetaillFailure = (data) => ({
  type: GET_REVIEW_DETAIL_FAILURE,
  data,
});

export const postReview = (id, point, contents, opt, cdt, thumbnail) => ({
  type: POST_REVIEW,
  id,
  point,
  contents,
  opt,
  cdt,
  thumbnail,
});

export const getReviewSortRecent = () => ({
  type: GET_REVIEW_SORT_RECENT,
});

export const getReviewSortLike = () => ({
  type: GET_REVIEW_SORT_LIKE,
});

export const getReviewSortBest = () => ({
  type: GET_REVIEW_SORT_BEST,
});

export const getReviewSortRandom = () => ({
  type: GET_REVIEW_SORT_RANDOM,
});

export const getReviewData = () => ({
  type: GET_REVIEW_DATA,
});

export const initReviewData = () => ({
  type: INIT_REVIEW_DATA,
});
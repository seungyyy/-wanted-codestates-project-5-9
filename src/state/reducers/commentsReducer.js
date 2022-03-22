import { bestreviewData } from '../../asset/bestreviewData';
import { likeData } from '../../asset/likeData';
import { recentData } from '../../asset/recentData';

const initialState = {
  loading: false,
  error: null,
  data: null,
  loaded: false,
};

const GET_REVIEW_DETAIL = 'GET_REVIEW_DETAIL';
const GET_REVIEW_DETAIL_SUCCESS = 'GET_REVIEW_DETAIL_SUCCESS';
const GET_REVIEW_DETAIL_FAILURE = 'GET_REVIEW_DETAIL_FAILURE';

export const getReviewDetail = (nickname) => ({
  type: 'GET_REVIEW_DETAIL',
  nickname,
});

export const getReviewDetailSuccess = ({ data }) => ({
  type: 'GET_REVIEW_DETAIL_SUCCESS',
  data,
});

export const getReviewDetaillFailure = (data) => ({
  type: 'GET_REVIEW_DETAIL_FAILURE',
  data,
});

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_REVIEW_DETAIL:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: state + action.payload,
      };
    case GET_REVIEW_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: null,
        loaded: true,
        error: state + action.payload,
      };
    case GET_REVIEW_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: null,
      };
    default:
      return state;
  }
};
import { data } from '../../asset/data';
import {
  GET_REVIEW_DETAIL,
  GET_REVIEW_DETAIL_FAILURE,
  GET_REVIEW_DATA,
  GET_REVIEW_SORT_RECENT,
  GET_REVIEW_SORT_LIKE,
  GET_REVIEW_SORT_BEST,
  GET_REVIEW_SORT_RANDOM,
  POST_REVIEW,
  INIT_REVIEW_DATA,
} from './actionType';

const initialState = {
  error: null,
  data: data,
  length: 15,
};

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_REVIEW_DATA:
      const data = state.data.slice(0, 15);
      return {
        ...state,
        error: null,
        data,
        length: 15,
      };
    case GET_REVIEW_DATA:
      return {
        ...state,
        length: state.length + 12,
      };
    case GET_REVIEW_DETAIL_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case GET_REVIEW_SORT_RECENT:
      const sortRecent = [...state.data];
      sortRecent.sort((a, b) => b.cdt - a.cdt);
      return {
        ...state,
        error: null,
        sortRecent,
      };
    case GET_REVIEW_SORT_LIKE:
      const sortLike = [...state.data];
      sortLike.sort((a, b) => b.like - a.like);
      return {
        ...state,
        error: null,
        sortLike,
      };
    case GET_REVIEW_SORT_BEST:
      const sortBest = [...state.data];
      sortBest.filter((el) => el.open);
      return {
        ...state,
        error: null,
        sortBest,
      };
    case GET_REVIEW_SORT_RANDOM:
      const sortRandom = [...state.data];
      sortRandom.sort(() => Math.random() + sortRandom.length);
      return {
        ...state,
        error: null,
        sortRandom,
      };
    case POST_REVIEW:
      return {
        ...state,
        error: null,
        data: action.payload,
      };
    default:
      return state;
  }
};
import { data } from '../../asset/data';

const initialState = {
  loading: false,
  error: null,
  data: null,
  loaded: false,
  length: 15
};

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
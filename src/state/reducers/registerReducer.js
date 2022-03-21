import { recentData } from '../../asset/recentData';

export const initialState = {
  loading: false,
  error: null,
  data: recentData,
};

const NEW_REVIEW_REGISTER = 'NEW_REVIEW_REGISTER';
const GET_REVIEW_REGISTER_FAILURE = 'GET_REVIEW_REGISTER_FAILURE';

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_REVIEW_REGISTER:
      return {
        ...state,
        loading: false,
        data: state + action.payload,
      };
    case GET_REVIEW_REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
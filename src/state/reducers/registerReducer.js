import { recentData } from '../../asset/recentData';

const initialState = {
  loading: false,
  error: null,
  data: recentData,
  loaded: false,
};

const NEW_REVIEW_REGISTER = 'NEW_REVIEW_REGISTER';
const GET_REVIEW_REGISTER_FAILURE = 'GET_REVIEW_REGISTER_FAILURE';

export const getReviewListSuccess = ({ data }) => ({
  type: "GET_USERS_LIST_SUCCESS",
  data,
});

export const getReviewListFailure = (data) => ({
  type: "GET_USERS_LIST_FAILURE",
  data,
});

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_REVIEW_REGISTER:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: state + action.payload,
      };
    case GET_REVIEW_REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        data: null,
        loaded: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
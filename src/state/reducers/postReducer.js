import { datas } from '../../asset/datas';
import { POST_REVIEW } from './actionType';

const initialState = {
  data: datas,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REVIEW: {
      return state.data.push(action.data);
    }
    default:
      return state;
  }
};
import { datas } from '../../asset/datas';
import { POST_REVIEW } from './actionType';

export const postReducer = (state = datas, action) => {
  switch (action.type) {
    case POST_REVIEW: {
      return state.push(action.data);
    }
    default:
      return state;
  }
};
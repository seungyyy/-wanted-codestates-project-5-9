import { datas } from '../../asset/datas';
import {
  GET_REVIEW_DETAIL_FAILURE,
  GET_REVIEW_DATA,
  GET_REVIEW_SORT_RECENT,
  GET_REVIEW_SORT_LIKE,
  GET_REVIEW_SORT_BEST,
  GET_REVIEW_SORT_RANDOM,
  ADD_COMMIT_DATA,
  TOGGLE_LIKE_DATA,
  POST_REVIEW,
} from './actionType';

const initialState = {
  data: datas,
  length: 15,
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEW_DATA: {
      return {
        ...state,
        length: state.length + 15,
      };
    }
    case GET_REVIEW_DETAIL_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case GET_REVIEW_SORT_RECENT: {
      if (state.data.length === 69) {
        state = initialState;
        const sortRecent = [...state.data];
        sortRecent.sort((a, b) => b.cdt - a.cdt);
        return {
          ...state,
          data: sortRecent,
        };
      } else {
        const sortRecent = [...state.data];
        sortRecent.sort((a, b) => b.cdt - a.cdt);
        return {
          ...state,
          data: sortRecent,
        };
      }
    }
    case GET_REVIEW_SORT_LIKE: {
      if (state.data.length === 69) {
        state = initialState;
        const sortLike = [...state.data];
        sortLike.sort((a, b) => b.like - a.like);
        return {
          ...state,
          data: sortLike,
        };
      } else {
        const sortLike = [...state.data];
        sortLike.sort((a, b) => b.like - a.like);
        return {
          ...state,
          data: sortLike,
        };
      }
    }
    case GET_REVIEW_SORT_BEST: {
      const sortBest = [...state.data];
      return {
        ...state,
        data: sortBest.filter((el) => el.open === 'best'),
      };
    }
    case GET_REVIEW_SORT_RANDOM: {
      if (state.data.length === 69) {
        state = initialState;
        const sortRandom = [...state.data];
        sortRandom.sort(() => Math.random() - 0.5);
        return {
          ...state,
          data: sortRandom,
        };
      } else {
        const sortRandom = [...state.data];
        sortRandom.sort(() => Math.random() - 0.5);
        return {
          ...state,
          data: sortRandom,
        };
      }
    }
    case ADD_COMMIT_DATA: {
      const comment = state.data.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            comments: [
              ...item.comments,
              {
                id: action.commentsId,
                target_id: null,
                depth: 0,
                nickname: action.nickname,
                regdt: action.regdt,
                dt: '',
                contents: action.contents,
              },
            ],
          };
        }
        return item;
      });
      return {
        ...state,
        data: comment,
      };
    }
    case TOGGLE_LIKE_DATA: {
      const likes = state.data.map((item) => {
        if (item.id === action.id) {
          if (item.isLike === false) {
            return {
              ...item,
              like: item.like + 1,
              isLike: true,
            };
          } else {
            return {
              ...item,
              like: item.like - 1,
              isLike: false,
            };
          }
        } else {
          return item;
        }
      });
      return {
        ...state,
        data: likes,
      };
    }
    default: {
      return state;
    }
  }
};
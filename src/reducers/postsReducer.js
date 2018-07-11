import { objectify } from '../utils';
import { DELETE_POST, GET_POST, GET_POSTS } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_POST:
      delete state[action.payload];
      return { ...state };
    case GET_POST:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case GET_POSTS:
      action.payload && objectify(action.payload, 'id');
      return objectify(action.payload);
    default:
      return state;
  }
};

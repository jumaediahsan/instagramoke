import {
  UPLOAD_IMAGE
} from '../actions/types';

const INITIAL_STATE = {
  avatarSource: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return { ...state, avatarSource: action.payload };
    default:
      return state;
  }
};

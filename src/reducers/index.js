import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AuthUpReducer from './AuthUpReducer';
import ProfileImage from './ProfileImage';
import UploadReducer from './UploadReducer';

export default combineReducers({
  auth: AuthReducer,
  authup: AuthUpReducer,
  profile: ProfileImage,
  uploadimg: UploadReducer
});

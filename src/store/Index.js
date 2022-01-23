import { combineReducers } from 'redux';
import categoryReducer from './Cat-categoria';
import imageReducer from './Cat-images';


const rootReducer = combineReducers({
  categories: categoryReducer,
  images: imageReducer
});

export default rootReducer;

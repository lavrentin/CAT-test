import { SET_IMAGES } from '../Api/Api-redux';


const imageReducer = (state = [], action) => {
  switch (action.type) {
    case SET_IMAGES:
      return [...action.payload.images];
    default:
      return state;
  }
};

export default imageReducer;

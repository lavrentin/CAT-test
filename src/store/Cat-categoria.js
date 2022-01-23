import { FETCH_CATEGORIES } from '../Api/Api-redux';


const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return [...state, ...action.payload.categories];
    default:
      return state;
  }
};

export default categoryReducer;

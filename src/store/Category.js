import { FETCH_CATEGORIES } from '../Api/Api-redux';
import categoryApi from '../Api/Category-redux';
import { SET_IMAGES } from '../Api/Api-redux';
import imagesApi from '../Api/Img-redux';

const fetchImages = ({ page, categoryId, currentImages }) => {
  return async (dispatch) => {
    const response = await imagesApi.fetchAll({ page, categoryId });
    const images = page === 1 ? response : response.concat(currentImages);

    dispatch({ type: SET_IMAGES, payload: { images } });
  };
};

const fetchCategories = () => {
  return async (dispatch) => {
    const categories = await categoryApi.fetchAll();

    dispatch({ type: FETCH_CATEGORIES, payload: { categories } });
  };
};

export { fetchCategories, fetchImages };

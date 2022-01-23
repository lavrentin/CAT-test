import { connect } from "react-redux";
import "../Welcome.css"
import { useEffect, useState } from "react";
import { fetchCategories, fetchImages } from "../store/Category";
import { selectImages, selectCategories } from "../store/Cat-img-state.reducer";

const Welcome = ({ fetchCategories, fetchImages, categories, images }) => {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState({
    id: "",
    name: "",
  });

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    const props = {
      page,
      categoryId: selectedCategory.id,
      currentImages: images,
    };

    fetchImages(props);
  }, [fetchImages, selectedCategory, page]);

  const handleCategoryChange = (category) => {
    setPage(1);
    setSelectedCategory(category);
  };

  return (
    <div className="Welcome">
      <h1 style={{ color: "green", fontSize: "45px" }}>CAT</h1>
      <div className="categoryDiv">
        {categories.map((category) => (
          <div key={category.id} onClick={() => handleCategoryChange(category)}>
            {category.name}
          </div>
        ))}
      </div>

      <div className="imgDiv">
        {images.map((image) => (
          <img className="styleImg" src={image.url} alt="0" />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: selectCategories(state),
  images: selectImages(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()),
  fetchImages: (props) => dispatch(fetchImages(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);

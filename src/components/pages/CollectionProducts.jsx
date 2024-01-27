import { useParams } from "react-router-dom";
import Navigation from "../sections/Navigation.jsx";
import Footer from "../sections/Footer.jsx";
import { useCollections } from "../utils/CollectionsContext.jsx";
import Content from "../sections/Content.jsx";
import ScrollToTop from "../utils/ScrollToTop.jsx";
import PropTypes from "prop-types";

function CollectionProducts({ setShowCart, showCart }) {
  const collections = useCollections();

  const { name } = useParams();

  let selectedCollection;
  if (collections) {
    selectedCollection = collections.filter(
      (collection) => collection.data.collection.handle === name
    );
  }

  return (
    <>
      <ScrollToTop />
      <Navigation setShowCart={setShowCart} showCart={showCart} />
      {selectedCollection ? (
        <Content
          type="products"
          selectedCollection={selectedCollection[0]}
          showCart={showCart}
          setShowCart={setShowCart}
        />
      ) : null}

      <Footer showCart={showCart} />
    </>
  );
}

CollectionProducts.propTypes = {
  setShowCart: PropTypes.func.isRequired,
  showCart: PropTypes.bool.isRequired,
};

export default CollectionProducts;

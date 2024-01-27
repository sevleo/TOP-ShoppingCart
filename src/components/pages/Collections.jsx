import Navigation from "../sections/Navigation.jsx";
import Content from "../sections/Content.jsx";
import Footer from "../sections/Footer.jsx";
import { useCollections } from "../utils/CollectionsContext.jsx";
import PropTypes from "prop-types";

function Collections({ setShowCart, showCart }) {
  const collections = useCollections();

  return (
    <>
      <Navigation setShowCart={setShowCart} showCart={showCart} />
      <Content
        type="collections"
        collections={collections}
        showCart={showCart}
        setShowCart={setShowCart}
      />
      <Footer showCart={showCart} />
    </>
  );
}

Collections.propTypes = {
  setShowCart: PropTypes.func.isRequired,
  showCart: PropTypes.bool.isRequired,
};

export default Collections;

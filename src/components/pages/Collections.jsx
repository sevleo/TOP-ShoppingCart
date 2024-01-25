import Navigation from "../sections/Navigation.jsx";
import Content from "../sections/Content.jsx";
import Footer from "../sections/Footer.jsx";
import { useCollections } from "../utils/CollectionsContext.jsx";

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

export default Collections;

import Navigation from "./Navigation.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import { useCollections } from "./CollectionsContext.jsx";

function Collections({ setShowCart, showCart }) {
  const collections = useCollections();
  console.log(collections);

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

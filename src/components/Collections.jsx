import Navigation from "./Navigation.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import { useCollections } from "./CollectionsContext.jsx";
import { useCart } from "./CartContext.jsx";

function Collections({ setShowCart, showCart }) {
  const collections = useCollections();
  console.log(collections);

  const cart = useCart();
  console.log(cart);

  return (
    <>
      <Navigation setShowCart={setShowCart} showCart={showCart} />
      <Content
        type="collections"
        collections={collections}
        showCart={showCart}
      />
      <Footer showCart={showCart} />
    </>
  );
}

export default Collections;

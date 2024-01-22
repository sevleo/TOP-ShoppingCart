import Navigation from "./Navigation.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import { useCollections } from "./CollectionsContext.jsx";
import { useCart } from "./CartContext.jsx";

function Collections({ setShowCart, showCart, onClick }) {
  const collections = useCollections();
  console.log(collections);

  const cart = useCart();
  console.log(cart);

  return (
    <>
      <Navigation
        setShowCart={setShowCart}
        showCart={showCart}
        onClick={onClick}
      />
      <Content
        type="collections"
        collections={collections}
        showCart={showCart}
        setShowCart={setShowCart}
        onClick={onClick}
      />
      <Footer showCart={showCart} onClick={onClick} />
    </>
  );
}

export default Collections;

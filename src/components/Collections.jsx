import Navigation from "./Navigation.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import { useCollections } from "./CollectionsContext.jsx";
import { useCart } from "./CartContext.jsx";

function Collections() {
  const collections = useCollections();
  console.log(collections);

  const cart = useCart();
  console.log(cart);

  return (
    <>
      <Navigation />
      <Content type="collections" collections={collections} />
      <Footer />
    </>
  );
}

export default Collections;

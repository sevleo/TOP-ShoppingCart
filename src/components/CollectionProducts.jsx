import { useParams } from "react-router-dom";
import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";
import { useCollections } from "./CollectionsContext.jsx";
import Content from "./Content.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

function CollectionProducts({ setShowCart, showCart }) {
  const collections = useCollections();
  console.log(collections);

  const { name } = useParams();

  let selectedCollection;
  if (collections) {
    selectedCollection = collections.filter(
      (collection) => collection.data.collection.handle === name
    );
    console.log(selectedCollection[0]);
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

export default CollectionProducts;

import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";
import { useCollections } from "./CollectionsContext.jsx";

function Home({ setShowCart, showCart, onClick }) {
  const collections = useCollections();
  console.log(collections);

  return (
    <>
      <Navigation
        showCart={showCart}
        setShowCart={setShowCart}
        onClick={onClick}
      />
      <Content
        type="home"
        showCart={showCart}
        setShowCart={setShowCart}
        onClick={onClick}
      />
      <Footer showCart={showCart} onClick={onClick} />
    </>
  );
}

export default Home;

import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";
import { useCollections } from "./CollectionsContext.jsx";

function Home({ setShowCart, showCart }) {
  const collections = useCollections();
  console.log(collections);

  return (
    <>
      <Navigation showCart={showCart} setShowCart={setShowCart} />
      <Content type="home" showCart={showCart} setShowCart={setShowCart} />
      <Footer showCart={showCart} />
    </>
  );
}

export default Home;

import Navigation from "../sections/Navigation.jsx";
import Content from "../sections/Content.jsx";
import Footer from "../sections/Footer.jsx";

function Home({ setShowCart, showCart }) {
  return (
    <>
      <Navigation showCart={showCart} setShowCart={setShowCart} />
      <Content type="home" showCart={showCart} setShowCart={setShowCart} />
      <Footer showCart={showCart} />
    </>
  );
}

export default Home;

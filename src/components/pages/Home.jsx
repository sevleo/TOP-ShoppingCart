import Navigation from "../sections/Navigation.jsx";
import Content from "../sections/Content.jsx";
import Footer from "../sections/Footer.jsx";
import PropTypes from "prop-types";

function Home({ setShowCart, showCart }) {
  return (
    <>
      <Navigation showCart={showCart} setShowCart={setShowCart} />
      <Content type="home" showCart={showCart} setShowCart={setShowCart} />
      {/* <Footer showCart={showCart} /> */}
    </>
  );
}

Home.propTypes = {
  setShowCart: PropTypes.func.isRequired,
  showCart: PropTypes.bool.isRequired,
};

export default Home;

import PropTypes from "prop-types";

function Footer({ showCart }) {
  return (
    <footer
      className={`${showCart ? "blur-sm" : ""} mt-auto flex h-8 items-center justify-center`}
    >
      Footer
    </footer>
  );
}

Footer.propTypes = {
  showCart: PropTypes.bool.isRequired,
};

export default Footer;

import PropTypes from "prop-types";

function Footer({ showCart }) {
  return (
    <footer
      className={`${showCart ? "blur-sm" : ""} mt-auto flex h-8 items-center justify-center`}
    >
      {/* <div className="flex w-[200px] items-center justify-center gap-3">
        Sev Leo
        <a href="https://github.com/sevleo" className="h-full">
          <img
            id="gh-logo"
            src="../../../public/githublogo.png"
            alt="github logo"
          />
        </a>
      </div> */}
    </footer>
  );
}

Footer.propTypes = {
  showCart: PropTypes.bool.isRequired,
};

export default Footer;

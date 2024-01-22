function Footer({ showCart, onClick }) {
  return (
    <footer
      className={`${showCart ? "blur-sm" : ""} mt-auto flex h-8 items-center justify-center`}
      onClick={onClick}
    >
      Footer
    </footer>
  );
}

export default Footer;

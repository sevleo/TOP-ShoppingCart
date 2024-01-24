function Footer({ showCart }) {
  return (
    <footer
      className={`${showCart ? "blur-sm" : ""} mt-auto flex h-8 items-center justify-center`}
    >
      Footer
    </footer>
  );
}

export default Footer;

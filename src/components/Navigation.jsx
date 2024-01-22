import { Link } from "react-router-dom";
import { useCart } from "./CartContext.jsx";

function Navigation({ setShowCart, showCart, onClick }) {
  const cartContext = useCart();
  function handleClick() {
    setShowCart(true);
    console.log(cartContext);
  }

  return (
    <nav
      id="navigation"
      className={`${showCart ? "blur-sm" : ""} shadow-md`}
      // onClick={onClick}
    >
      <ul className="ml-auto mr-auto flex h-20 max-w-screen-xl items-center justify-end gap-4 p-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/collections">Collections</Link>
        </li>
        <li>
          <button onClick={handleClick} className="bg-white p-0">
            Cart
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

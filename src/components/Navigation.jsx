import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function Navigation({ setShowCart, showCart }) {
  const cartContext = useCart();

  function handleClick() {
    setShowCart(true);
  }

  return (
    <nav id="navigation" className={`${showCart ? "blur-sm" : ""} shadow-md`}>
      <ul className="ml-auto mr-auto flex h-20 max-w-screen-xl items-center justify-end gap-4 p-3">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/collections" className="hover:underline">
            Collections
          </Link>
        </li>
        <li className="relative">
          <p
            onClick={handleClick}
            className="bg-white p-0 hover:cursor-pointer hover:underline"
          >
            Cart
            <span className="absolute right-[-15px] top-[-5px] flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-red-600 p-0.5 text-xs text-white">
              {cartContext.quantity}
            </span>
          </p>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

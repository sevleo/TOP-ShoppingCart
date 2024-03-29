import { Link } from "react-router-dom";
import { useCart } from "../utils/CartContext";
import PropTypes from "prop-types";

function Navigation({ setShowCart, showCart }) {
  const cartContext = useCart();

  function handleClick() {
    setShowCart(true);
  }

  return (
    <nav id="navigation" className={`${showCart ? "blur-sm" : ""} shadow-md`}>
      <ul className="ml-auto mr-auto flex h-20 max-w-screen-xl items-center justify-end gap-4 pb-3 pl-8 pr-8 pt-3">
        <li className="mr-auto">
          <Link
            to="/"
            className="text-greenCustom font-['Permanent_Marker'] text-3xl hover:cursor-pointer"
          >
            NuevaShop
          </Link>
        </li>
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
        <li className="relative flex items-center justify-center">
          <p
            onClick={handleClick}
            className="material-symbols-outlined bg-white p-0 hover:cursor-pointer hover:underline"
          >
            shopping_cart
            <span className=" absolute right-[-15px] top-[-5px] flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-red-600 p-0.5 text-xs text-white">
              {cartContext ? cartContext.quantity : 0}
            </span>
          </p>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  setShowCart: PropTypes.func.isRequired,
  showCart: PropTypes.bool.isRequired,
};

export default Navigation;

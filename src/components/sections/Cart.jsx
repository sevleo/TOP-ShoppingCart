import { useCart } from "../utils/CartContext.jsx";
import Card from "../buildingBlocks/Card.jsx";

function Cart({ onClick }) {
  const cartContext = useCart();

  return (
    <>
      <div
        className="fixed z-10 h-full w-full bg-black opacity-40 blur-lg"
        onClick={onClick}
      ></div>
      <div className="fixed right-0 top-0 z-20 flex h-full w-1/3 min-w-96 flex-col overflow-auto bg-white">
        {cartContext.cart.length > 0 ? (
          <>
            <div className="relative">
              <p className="pb-3 pl-5 pr-5 pt-3 text-2xl">
                Cart Items: {cartContext.quantity}
              </p>
              <div
                className="absolute right-[10px] top-[10px] hover:cursor-pointer"
                onClick={onClick}
              >
                <span className="material-symbols-outlined">close</span>
              </div>
            </div>

            {cartContext.cart.map((item) => (
              <Card
                key={item.title}
                id={item.title}
                type="cart product"
                image={item.image}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                totalPrice={item.totalPrice}
              />
            ))}

            <div className="mt-8"></div>
            <p className="mt-auto pb-3 pl-5 pr-5 pt-3 text-2xl">
              Total ${cartContext.totalCartPrice}
            </p>
            <button className="mb-3 ml-5 mr-5 mt-3 text-white">
              Checkout for {"$" + cartContext.totalCartPrice}
            </button>
          </>
        ) : (
          <p>The cart is empty</p>
        )}
      </div>
    </>
  );
}

export default Cart;

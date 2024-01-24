import { useCart } from "./CartContext.jsx";
import Card from "./Card.jsx";

function Cart({ onClick }) {
  const cartContext = useCart();
  console.log(cartContext);

  return (
    <>
      <div
        className="bg-backDrop fixed z-10 h-full w-full opacity-5 blur-lg"
        onClick={onClick}
      ></div>
      <div className="fixed right-0 top-0 z-20 flex h-full w-96 flex-col bg-white">
        {cartContext.cart.length > 0 ? (
          <>
            <p className="p-2 text-2xl">Cart Items: {cartContext.quantity}</p>
            {cartContext.cart.map((item) => (
              <Card
                key={item.title}
                id={item.title}
                type="cart product"
                image={item.image}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </>
        ) : (
          <p>The cart is empty</p>
        )}
      </div>
    </>
  );
}

export default Cart;

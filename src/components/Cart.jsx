import { useCart } from "./CartContext.jsx";
import Card from "./Card.jsx";

function Cart() {
  const cartContext = useCart();
  console.log(cartContext);

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-white">
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
    </div>
  );
}

export default Cart;

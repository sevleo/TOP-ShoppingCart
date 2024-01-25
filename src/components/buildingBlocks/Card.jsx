import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useCart } from "../utils/CartContext";
import QuantityPicker from "./QuantityPicker";

function Card({ id, type, title, image, handle, price, quantity, totalPrice }) {
  if (type === "collection") {
    return (
      <CollectionCard id={id} title={title} image={image} handle={handle} />
    );
  }

  if (type === "product") {
    return <ProductCard id={id} title={title} image={image} price={price} />;
  }

  if (type === "cart product") {
    return (
      <CartProductCard
        id={id}
        title={title}
        image={image}
        price={price}
        quantity={quantity}
        totalPrice={totalPrice}
      />
    );
  }
}

export default Card;

Card.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  handle: PropTypes.string,
  price: PropTypes.string,
};

// Collection cards
function CollectionCard({ title, image, handle }) {
  return (
    <Link to={handle} className="mb-0 w-28 min-w-28 shrink-0 grow-0 basis-1/5">
      <div className="transition-all duration-100 hover:scale-105">
        <h1 className="flex h-10 items-center justify-center text-center text-xl">
          {title}
        </h1>
        <img
          src={image}
          className="aspect-square rounded-md object-cover"
        ></img>
      </div>
    </Link>
  );
}

CollectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
};

// Product cards on collection view
function ProductCard({ title, image, price }) {
  const cartContext = useCart();

  const [count, setCount] = useState(1);

  function handleAddClick() {
    setCount(count + 1);
  }

  function handleSubtractClick() {
    if (count !== 1) {
      setCount(count - 1);
    }
  }

  function handleAddToCartClick() {
    const priceNumber = parseFloat(price.replace("$", ""));

    const item = {
      title: title,
      image: image,
      price: price,
      quantity: count,
      totalPrice: priceNumber * count,
    };
    cartContext.setCart(item);
  }

  return (
    <div className="mb-6 flex min-h-52  min-w-36 shrink-0 grow-0 basis-1/5 flex-col items-center justify-center rounded-md pb-2 shadow-md">
      <img src={image} className="aspect-square rounded-md object-cover "></img>
      <div className="h-16">
        <h1 className="text-l flex items-center justify-center pl-2 pr-2 pt-2 text-center">
          {title}
        </h1>
        <h1 className="text-l flex items-center justify-center pl-2 pr-2 pt-2 text-center">
          {price}
        </h1>
      </div>

      <QuantityPicker
        handleAddClick={handleAddClick}
        handleSubtractClick={handleSubtractClick}
        count={count}
      />
      <button
        onClick={handleAddToCartClick}
        className="bg-greenCustom mt-2 w-11/12 p-2 text-white transition-all duration-100 active:bg-black"
      >
        Add to cart
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string,
};

// Product cards on cart view
function CartProductCard({ title, image, price, quantity, totalPrice }) {
  const cartContext = useCart();

  const [count, setCount] = useState(quantity);

  function handleAddClick() {
    const item = {
      title: title,
      image: image,
      price: price,
      quantity: count + 1,
    };
    cartContext.updateQuantity(item, 1);
    setCount(count + 1);
  }

  function handleSubtractClick() {
    if (count !== 1) {
      const item = {
        title: title,
        image: image,
        price: price,
        quantity: count - 1,
      };
      cartContext.updateQuantity(item, -1);
      setCount(count - 1);
    }
  }

  return (
    <div className="flex max-h-32 w-full flex-row pb-3 pl-5 pr-5 pt-3">
      <div className="flex items-center justify-center">
        <img
          src={image}
          className="min-w-[104px] max-w-[104px] rounded-l-lg"
        ></img>
      </div>
      <div className="flex w-full flex-col justify-between rounded-r-lg bg-slate-300 shadow-lg">
        <div className="relative flex justify-between p-1">
          <div>
            <p className="text-sm font-semibold">{title}</p>
            <p className="text-sm">{"$" + totalPrice}</p>
          </div>
          <div className="absolute right-[10px] top-[10px] hover:cursor-pointer">
            <span className="material-symbols-outlined">delete</span>
          </div>
        </div>
        <div className="flex items-center p-1">
          <p className="text-sm">Quantity:</p>
          <div className="w-2/4">
            <QuantityPicker
              handleSubtractClick={handleSubtractClick}
              handleAddClick={handleAddClick}
              count={count}
              className="h-5 w-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

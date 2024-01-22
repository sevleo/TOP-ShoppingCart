import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import { useCart } from "./CartContext";

function Card({ id, type, title, image, handle, price }) {
  if (type === "collection") {
    return (
      <CollectionCard id={id} title={title} image={image} handle={handle} />
    );
  }

  if (type === "product") {
    return <ProductCard id={id} title={title} image={image} price={price} />;
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

function CollectionCard({ title, image, handle }) {
  return (
    <Link to={handle} className="mb-6 w-44 min-w-44 shrink-0 grow-0 basis-1/5">
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
    const item = {
      title: title,
      image: image,
      price: price,
      quantity: count,
    };
    cartContext.setCart(item);
  }

  return (
    <div className="mb-6 flex min-h-52  min-w-36 shrink-0 grow-0 basis-1/5 flex-col items-center justify-center rounded-md pb-2 shadow-md">
      <img src={image} className="aspect-square rounded-md object-cover "></img>
      <h1 className="text-l flex items-center justify-center pl-2 pr-2 pt-2 text-center">
        {title}
      </h1>
      <h1 className="text-l flex items-center justify-center pl-2 pr-2 pt-2 text-center">
        {price}
      </h1>
      <div className="flex w-11/12 items-center justify-around p-2">
        <button
          className="flex h-8 w-8 items-center justify-center rounded-full bg-black p-0 text-center text-white transition-all duration-100 hover:border-none hover:outline-none focus:border-none focus:outline-none active:scale-105"
          onClick={handleSubtractClick}
        >
          -
        </button>
        <p className="w-6 text-center">{count}</p>
        <button
          className="flex h-8 w-8 items-center justify-center rounded-full bg-black p-0 text-center text-white transition-all duration-100 hover:border-none hover:outline-none focus:border-none focus:outline-none active:scale-105"
          onClick={handleAddClick}
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCartClick}
        className="bg-greenCustom w-11/12 p-2 text-white transition-all duration-100 active:bg-black"
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

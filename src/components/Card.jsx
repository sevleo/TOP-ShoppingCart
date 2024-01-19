import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
  return (
    <div className="mb-6 w-36 min-w-36 shrink-0 grow-0 basis-1/5 rounded-md shadow-md">
      <img src={image} className="aspect-square rounded-md object-cover"></img>
      <h1 className="text-l flex items-center justify-center p-2 text-center">
        {title}
      </h1>
      <h1 className="text-l flex items-center justify-center p-2 text-center">
        {price}
      </h1>
    </div>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

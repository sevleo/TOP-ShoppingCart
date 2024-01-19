import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Card({ id, type, title, image, handle }) {
  if (type === "collection") {
    return (
      <CollectionCard id={id} title={title} image={image} handle={handle} />
    );
  }

  if (type === "product") {
    return <ProductCard id={id} title={title} image={image} />;
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
    <Link to={handle}>
      <div>
        <h1 className="bg-black text-3xl underline">{title}</h1>
        <img src={image}></img>
      </div>
    </Link>
  );
}

CollectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
};

function ProductCard({ title, image }) {
  return (
    <div>
      <div>
        <h1 className="bg-black text-3xl underline">{title}</h1>
        <img src={image}></img>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

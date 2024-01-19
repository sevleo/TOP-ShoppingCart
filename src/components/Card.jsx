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
    <Link to={handle} className="w-44 min-w-52 shrink-0 grow-0 basis-1/5">
      <div className="">
        <h1 className=" text-xl ">{title}</h1>
        <img src={image} className="aspect-square object-cover"></img>
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
    <div className="w-16">
      <h1 className=" text-3xl ">{title}</h1>
      <img src={image}></img>
    </div>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

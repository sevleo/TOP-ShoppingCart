import { Link } from "react-router-dom";

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

function CollectionCard({ id, title, image, handle }) {
  return (
    <Link to={handle}>
      <div>
        <h1 className="bg-black text-3xl underline">{title}</h1>
        <img src={image}></img>
      </div>
    </Link>
  );
}

function ProductCard({ id, title, image }) {
  return (
    <div>
      <div>
        <h1 className="bg-black text-3xl underline">{title}</h1>
        <img src={image}></img>
      </div>
    </div>
  );
}

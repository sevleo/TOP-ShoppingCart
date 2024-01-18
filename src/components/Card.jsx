import { ProductsDataProvider } from "./Context";
import { Link } from "react-router-dom";

function Card({ id, type, title, image, handle }) {
  if (type === "collection") {
    return (
      <CollectionCard id={id} title={title} image={image} handle={handle} />
    );
  }
}

export default Card;

function CollectionCard({ id, title, image, handle }) {
  //   const onClick = async () => {
  //     console.log(id);
  //     const url = `https://mock.shop/api?query={collection(id:%20%22${id}%22){id%20handle%20title%20description%20image%20{id%20url}%20products(first:%2020){edges%20{node%20{id%20title%20featuredImage%20{id%20url}}}}}}`;
  //     console.log(url);

  //     const request = await fetch(url);
  //     const response = await request.json();
  //     console.log(response);
  //   };

  return (
    <Link to={handle}>
      <div>
        <h1 className="bg-black text-3xl underline">{title}</h1>
        <img src={image}></img>
      </div>
    </Link>
    // <ProductsDataProvider id={id}>
    //   <div onClick={onClick}>
    //     <h1 className="bg-black text-3xl underline">{title}</h1>
    //     <img src={image}></img>
    //   </div>
    // </ProductsDataProvider>
  );
}

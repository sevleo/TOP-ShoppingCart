function Card({ id, title, image }) {
  return (
    <div key={id}>
      <h1 className="bg-black text-3xl underline">{title}</h1>
      <img src={image}></img>
    </div>
  );
}

export default Card;

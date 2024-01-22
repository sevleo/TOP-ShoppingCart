import PropTypes from "prop-types";
import Card from "./Card";

function Content({ type, collections, selectedCollection, showCart }) {
  if (type === "home") {
    return <HomeContent showCart={showCart} />;
  }

  if (type === "collections") {
    return <CollectionsContent collections={collections} showCart={showCart} />;
  }

  if (type === "products") {
    return (
      <ProductsContent
        selectedCollection={selectedCollection}
        showCart={showCart}
      />
    );
  }
}

Content.propTypes = {
  type: PropTypes.string.isRequired,
  collections: PropTypes.array,
  selectedCollection: PropTypes.object,
};

export default Content;

function HomeContent({ showCart }) {
  return (
    <div id="content" className={`${showCart ? "blur-sm" : ""}`}>
      <h1 className=" ml-auto mr-auto flex max-w-screen-xl flex-wrap items-start justify-center gap-5 pb-6 pl-6 pr-6 pt-6 text-3xl ">
        This is home content
      </h1>
    </div>
  );
}

function CollectionsContent({ collections, showCart }) {
  if (collections && collections.length > 0) {
    return (
      <div
        id="content"
        className={`${showCart ? "blur-sm" : ""} ml-auto mr-auto flex max-w-screen-xl flex-col items-center justify-center gap-10 pb-6 pl-6 pr-6 pt-6`}
      >
        <div className="ml-12 mt-6 -skew-y-3 self-start bg-black text-white">
          <p className="skew-y-3 p-5 text-3xl">Collections</p>
        </div>
        <div className="flex flex-wrap items-start justify-center gap-5 ">
          {collections.map((collection) => (
            <Card
              key={collection.data.collection.id}
              id={collection.data.collection.id}
              type="collection"
              title={collection.data.collection.title}
              image={collection.data.collection.image.url}
              handle={collection.data.collection.handle}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div id="content">
        {/* <h1 className="text-3xl underline">There are no collections</h1> */}
      </div>
    );
  }
}

CollectionsContent.propTypes = {
  collections: PropTypes.array,
};

function ProductsContent({ selectedCollection, showCart }) {
  const prices = ["$40", "$50", "$60", "$70", "$80", "$90", "$100", "$110"];

  function getRandomPrice() {
    const randomIndex = Math.floor(Math.random() * prices.length);
    return prices[randomIndex];
  }

  if (
    selectedCollection &&
    selectedCollection.data.collection.products.edges.length > 0
  ) {
    return (
      <div
        id="content"
        className={`${showCart ? "blur-sm" : ""} ml-auto mr-auto flex max-w-screen-xl flex-col items-center justify-center gap-5 pb-6 pl-6 pr-6 pt-6`}
      >
        <div className="ml-12 mt-6 -skew-y-3 self-start bg-black text-white">
          <p className="skew-y-3 p-5 text-3xl">
            {selectedCollection.data.collection.title}
          </p>
        </div>
        <div className="w-3/5">
          {selectedCollection.data.collection.description}
        </div>
        <div className="flex flex-wrap items-start justify-center gap-5">
          {selectedCollection.data.collection.products.edges.map((product) => (
            <Card
              key={product.node.id}
              id={product.node.id}
              type="product"
              title={product.node.title}
              image={product.node.featuredImage.url}
              price={getRandomPrice()}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div id="content">
        {/* <h1 className="text-3xl underline">
          There are no products in this collection
        </h1> */}
      </div>
    );
  }
}

ProductsContent.propTypes = {
  selectedCollection: PropTypes.object.isRequired,
};

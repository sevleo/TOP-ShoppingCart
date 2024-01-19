import PropTypes from "prop-types";
import Card from "./Card";

function Content({ type, collections, selectedCollection }) {
  if (type === "home") {
    return <HomeContent />;
  }

  if (type === "collections") {
    return <CollectionsContent collections={collections} />;
  }

  if (type === "products") {
    return <ProductsContent selectedCollection={selectedCollection} />;
  }
}

Content.propTypes = {
  type: PropTypes.string.isRequired,
  collections: PropTypes.array,
  selectedCollection: PropTypes.object,
};

export default Content;

function HomeContent() {
  return (
    <div id="content">
      <h1 className="text-3xl ">This is home content</h1>
    </div>
  );
}

function CollectionsContent({ collections }) {
  if (collections && collections.length > 0) {
    return (
      <div
        id="content"
        className="ml-auto mr-auto flex max-w-screen-xl flex-wrap items-start justify-center gap-5 pb-6 pl-6 pr-6 pt-6"
      >
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

function ProductsContent({ selectedCollection }) {
  if (
    selectedCollection &&
    selectedCollection.data.collection.products.edges.length > 0
  ) {
    return (
      <div id="content">
        <div>{selectedCollection.data.collection.description}</div>
        {selectedCollection.data.collection.products.edges.map((product) => (
          <Card
            key={product.node.id}
            id={product.node.id}
            type="product"
            title={product.node.title}
            image={product.node.featuredImage.url}
          />
        ))}
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

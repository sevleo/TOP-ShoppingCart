import PropTypes from "prop-types";
import Card from "./Card";

function Content({ type, collections }) {
  if (type === "home") {
    return <HomeContent />;
  }

  if (type === "store") {
    return <StoreContent collections={collections} />;
  }
}

Content.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Content;

function HomeContent() {
  return (
    <div id="content">
      <h1 className="bg-black text-3xl underline">This is home content</h1>
    </div>
  );
}

function StoreContent({ collections }) {
  console.log(collections);

  if (collections && collections.length > 0) {
    console.log(collections);
    return (
      <div id="content">
        {collections.map((collection) => (
          <Card
            key={collection.node.id}
            id={collection.node.id}
            type="collection"
            title={collection.node.title}
            image={collection.node.image.url}
            handle={collection.node.handle}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div id="content">
        <h1 className="bg-black text-3xl underline">
          There are no collections
        </h1>
      </div>
    );
  }
}

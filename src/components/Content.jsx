import PropTypes from "prop-types";
import Card from "./Card";

function Content({ type, collections }) {
  if (type === "home") {
    return <HomeContent />;
  }

  if (type === "collections") {
    return <CollectionsContent collections={collections} />;
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

function CollectionsContent({ collections }) {
  if (collections && collections.length > 0) {
    return (
      <div id="content">
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
        <h1 className="bg-black text-3xl underline">
          There are no collections
        </h1>
      </div>
    );
  }
}

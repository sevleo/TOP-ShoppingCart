import { useParams } from "react-router-dom";
import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";
import { useCollections } from "./CollectionsContext.jsx";

function CollectionProducts() {
  const collections = useCollections();
  console.log(collections);

  const { name } = useParams();

  let selectedCollection;
  if (collections) {
    selectedCollection = collections.filter(
      (collection) => collection.data.collection.handle === name
    );
    console.log(selectedCollection[0]);
  }

  return (
    <>
      <Navigation />
      <div>{name}</div>
      {selectedCollection ? (
        <div>{selectedCollection[0].data.collection.description}</div>
      ) : null}

      <Footer />
    </>
  );
}

export default CollectionProducts;

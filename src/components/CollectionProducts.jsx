import { useParams } from "react-router-dom";
import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";
import { ProductsDataProvider } from "./Context";
import { useCollections } from "./Context.jsx";

function CollectionProducts() {
  const { name } = useParams();
  const collectionsRaw = useCollections();
  console.log(collectionsRaw.data.collections.edges);

  const selectedeCollection = collectionsRaw.data.collections.edges.filter(
    (collection) => collection.node.handle === name
  );

  const selectedCollectionId = selectedeCollection[0].node.id;
  console.log(selectedCollectionId);

  return (
    <ProductsDataProvider id={selectedCollectionId}>
      <Navigation />
      <div>{name}</div>
      <Footer />
    </ProductsDataProvider>
  );
}

export default CollectionProducts;

import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";
import { useCollections } from "./Context.jsx";

function Store() {
  const collectionsRaw = useCollections();
  console.log(collectionsRaw);

  let collections;
  if (collectionsRaw) {
    collections = collectionsRaw.data.collections.edges;
  }

  return (
    <>
      <Navigation />
      <Content type="store" collections={collections} />
      <Footer />
    </>
  );
}

export default Store;

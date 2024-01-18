import Navigation from "./Navigation.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import { useCollections } from "./CollectionsContext.jsx";

function Collections() {
  const collections = useCollections();
  console.log(collections);

  return (
    <>
      <Navigation />
      <Content type="collections" collections={collections} />
      <Footer />
    </>
  );
}

export default Collections;

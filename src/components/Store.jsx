import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";
import { useCollections } from "./Context.jsx";

function Store() {
  const collections = useCollections();
  console.log(collections);

  return (
    <>
      <Navigation />
      <Content type="store" />
      <Footer />
    </>
  );
}

export default Store;

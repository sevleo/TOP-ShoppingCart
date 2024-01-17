import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";
import { useCollections } from "./Context.jsx";

function Home() {
  const collections = useCollections();
  console.log(collections);

  return (
    <>
      <Navigation />
      <Content type="home" />
      <Footer />
    </>
  );
}

export default Home;

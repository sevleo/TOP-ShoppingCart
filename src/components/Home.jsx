import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";
import useData from "./useDataHook.jsx";
import { switchLocalStorageStatus } from "../LocalStorageModule.js";

function Home() {
  const url =
    "https://mock.shop/api?query={collections(first:%2010){edges%20{cursor%20node%20{id%20handle%20title%20description%20image%20{id%20url}}}}}";
  const { data } = useData(url);

  if (data) {
    console.log(data);
  }

  switchLocalStorageStatus();

  return (
    <>
      <Navigation />
      <Content type="home" />
      <Footer />
    </>
  );
}

export default Home;

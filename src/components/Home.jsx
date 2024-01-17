import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";
import useData from "./useDataHook.jsx";
import {
  saveCollectionsData,
  checkCollectionsData,
} from "../LocalStorageModule.js";

function Home() {
  const localStorageData = checkCollectionsData();
  const stopFetch = localStorageData ? true : false;

  const url =
    "https://mock.shop/api?query={collections(first:%2010){edges%20{cursor%20node%20{id%20handle%20title%20description%20image%20{id%20url}}}}}";
  const { data } = useData(url, stopFetch);

  if (data) {
    console.log("serving data from API");
    saveCollectionsData(data);
  } else if (localStorageData) {
    console.log("serving data from local storage");
  }

  const finalData = data ? data : localStorageData;
  console.log(finalData);

  return (
    <>
      <Navigation />
      <Content type="home" />
      <Footer />
    </>
  );
}

export default Home;

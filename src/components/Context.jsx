import React from "react";
import { useEffect, useState, useContext } from "react";
import {
  saveCollectionsData,
  checkCollectionsData,
} from "../LocalStorageModule.js";
import PropTypes from "prop-types";

const Context = React.createContext();

// Data provider for Home and Collection pages
export const CollectionsDataProvider = ({ children }) => {
  const [collections, setCollections] = useState();

  useEffect(() => {
    const url =
      "https://mock.shop/api?query={collections(first:%2010){edges%20{cursor%20node%20{id%20handle%20title%20description%20image%20{id%20url}}}}}";
    const collectionsLocalStorageData = checkCollectionsData();
    const stopFetch = collectionsLocalStorageData ? true : false;
    const dataFetch = async () => {
      const request = await fetch(url);
      const response = await request.json();
      setCollections(response);
      saveCollectionsData(response);
    };
    if (!stopFetch) {
      console.log("fetching from API");
      dataFetch();
    } else {
      console.log("fetching from Local Storage");
      setCollections(collectionsLocalStorageData);
    }
  }, []);

  return <Context.Provider value={collections}>{children}</Context.Provider>;
};

CollectionsDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCollections = () => useContext(Context);

// Data provider for a specific collection
export const ProductsDataProvider = (id) => {
  const [products, setProducts] = useState();
  useEffect(() => {
    const url = `https://mock.shop/api?query={collection(id:%20%22${id.id}%22){id%20handle%20title%20description%20image%20{id%20url}%20products(first:%2020){edges%20{node%20{id%20title%20featuredImage%20{id%20url}}}}}}`;

    const dataFetch = async () => {
      const request = await fetch(url);
      const response = await request.json();

      setProducts(response);
      console.log(response);
    };
    dataFetch();
  }, [id]);

  return <Context.Provider value={products}>{id.children}</Context.Provider>;
};

export const useProducts = () => useContext(Context);

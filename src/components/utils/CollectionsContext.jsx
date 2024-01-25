import React from "react";
import { useEffect, useState, useContext } from "react";
import {
  saveCollectionsData,
  saveCollectionsWithProductsData,
  checkCollectionsData,
  checkCollectionsWithProductsData,
} from "../../LocalStorageModule.js";
import PropTypes from "prop-types";

// Data provider for Home and Collection pages
const CollectionsContext = React.createContext();

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
      console.log("fetching collections from API");
      dataFetch();
    } else {
      console.log("fetching collections from Local Storage");
      setCollections(collectionsLocalStorageData);
    }
  }, []);

  const [collectionsWithProducts, setCollectionsWithProducts] = useState();

  useEffect(() => {
    const prices = ["$40", "$50", "$60", "$70", "$80", "$90", "$100", "$110"];

    function getRandomPrice() {
      const randomIndex = Math.floor(Math.random() * prices.length);
      return prices[randomIndex];
    }

    if (collections) {
      const collectionsWithDataLocalStorageData =
        checkCollectionsWithProductsData();
      const stopFetch = collectionsWithDataLocalStorageData ? true : false;

      const dataFetch = async (url) => {
        const request = await fetch(url);
        const response = await request.json();
        return response;
      };

      const fetchCollectionsWithProducts = async () => {
        const promises = [];
        collections.data.collections.edges.forEach((collection) => {
          if (collection) {
            const id = collection.node.id;
            const url = `https://mock.shop/api?query={collection(id:%20%22${id}%22){id%20handle%20title%20description%20image%20{id%20url}%20products(first:%2020){edges%20{node%20{id%20title%20featuredImage%20{id%20url}}}}}}`;
            promises.push(dataFetch(url));
          }
        });
        const newCollectionsWithProducts = await Promise.all(promises);
        if (newCollectionsWithProducts) {
          newCollectionsWithProducts.forEach((collection) => {
            collection.data.collection.products.edges.forEach((product) => {
              product.node.price = getRandomPrice();
            });
          });
        }
        setCollectionsWithProducts(newCollectionsWithProducts);
        saveCollectionsWithProductsData(newCollectionsWithProducts);
      };
      if (!stopFetch) {
        console.log("fetching products from API");
        fetchCollectionsWithProducts();
      } else {
        console.log("fetching products from Local Storage");
        setCollectionsWithProducts(collectionsWithDataLocalStorageData);
      }
    }
  }, [collections]);

  return (
    <CollectionsContext.Provider value={collectionsWithProducts}>
      {children}
    </CollectionsContext.Provider>
  );
};

CollectionsDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCollections = () => useContext(CollectionsContext);

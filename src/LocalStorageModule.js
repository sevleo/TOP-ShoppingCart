// Store collections in local storage
function saveCollectionsData(data) {
  if (storageAvailable("localStorage")) {
    const serializedData = JSON.stringify(data);
    localStorage.setItem("collections", serializedData);
  }
}

// Store collections with products in local storage
function saveCollectionsWithProductsData(data) {
  if (storageAvailable("localStorage")) {
    const serializedData = JSON.stringify(data);
    localStorage.setItem("collectionsWithProducts", serializedData);
  }
}

// Check if collections are in local storage
function checkCollectionsData() {
  if (storageAvailable("localStorage")) {
    let storedData;
    const obj = Object(localStorage);
    if (obj.collections) {
      const parsedKey = JSON.parse(obj.collections);
      if (parsedKey.data) {
        storedData = parsedKey;
      }
    }
    return storedData;
  }
}

// Check if collections with products are in local storage
function checkCollectionsWithProductsData() {
  if (storageAvailable("localStorage")) {
    let storedData;
    const obj = Object(localStorage);
    if (obj.collectionsWithProducts) {
      const parsedKey = JSON.parse(obj.collectionsWithProducts);
      if (parsedKey) {
        storedData = parsedKey;
      }
    }
    return storedData;
  }
}

// Check if local storage is available
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

export {
  checkCollectionsData,
  saveCollectionsData,
  saveCollectionsWithProductsData,
  checkCollectionsWithProductsData,
};

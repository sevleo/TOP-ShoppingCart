// Store collections in local storage
function saveCollectionsData(data) {
  if (storageAvailable("localStorage")) {
    const serializedData = JSON.stringify(data);
    localStorage.setItem("collections", serializedData);
  }
}

// Check if collections are in local storage
function checkCollectionsData() {
  if (storageAvailable("localStorage")) {
    let storedData;
    const keys = Object.values(localStorage);
    keys.forEach((key) => {
      const parsedKey = JSON.parse(key);
      if (parsedKey.data.collections) {
        storedData = parsedKey;
      }
    });
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

export { checkCollectionsData, saveCollectionsData };

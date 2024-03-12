const groceriesList = () => {
  const newMap = new Map();
  const items = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const key of Object.keys(items)) {
    newMap.set(key, items[key]);
  }
  return newMap;
};

export default groceriesList;

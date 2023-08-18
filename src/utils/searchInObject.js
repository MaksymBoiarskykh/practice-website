export const searchInObject = (node, onlyValues, arr = []) => {
  if (typeof node === "object") {
    for (const key in node) {
      if (typeof node[key] === "object") {
        searchInObject(node[key], onlyValues, arr);
      } else {
        if (onlyValues.some((el) => el === key)) arr.push(node[key]);
      }
    }
  } else {
    arr.push(node);
  }
  return arr;
};

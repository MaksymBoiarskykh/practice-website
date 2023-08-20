import { useMemo } from "react";

// this hook i use to create an array of pagination elements
export const usePageArray = (totalItem, limitItem) => {
  return useMemo(() => {
    const totalPages = Math.ceil(totalItem / limitItem);
    let result = [];
    for (let i = 1; i <= totalPages; i++) {
      result.push(i);
    }
    return result;
  }, [totalItem, limitItem]);
};

import { useMemo } from "react";

// sort data
export const useSortedData = (data, sort) => {
  const sortedData = useMemo(() => {
    if (sort) {
      return [...data].sort((a, b) => a.name[sort].localeCompare(b.name[sort]));
    } else {
      return data;
    }
  }, [sort, data]);

  return sortedData;
};

// search data
export const useFiltering = (data, sort, query) => {
  const sortedData = useSortedData(data, sort);

  const sortedAndSearchedData = useMemo(() => {
    return sortedData.filter(
      (user) =>
        user.name.first.toLowerCase().includes(query.toLowerCase()) ||
        user.name.last.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedData]);

  return sortedAndSearchedData;
};

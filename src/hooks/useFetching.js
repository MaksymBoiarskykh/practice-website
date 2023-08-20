import { useState } from "react";

// this hook i use to check the load, validate, and return the request to the server
export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};

import { useEffect, useState } from "react";

const useApi = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const jsonRes = await res.json();
        setData(jsonRes);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return {
    data,
    error,
    isLoading,
  };
};

export default useApi;

import axios from "axios";
import { useState, useEffect } from "react";

export default function useFetchApi(url) {
  const [apiResults, setApiResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getResultsFromUrl = () => {
    axios.get(url).then((response) => {
      setApiResults(response);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getResultsFromUrl();
  }, [url]);

  return {
    apiResults,
    isLoading,
  };
}

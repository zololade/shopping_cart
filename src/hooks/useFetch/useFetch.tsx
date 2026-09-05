import { useEffect, useState } from "react";

function useFetch<T>(urlString: string) {
  const [retrievedData, setRetrievedData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Track previous URL to detect changes during render
  const [prevUrl, setPrevUrl] = useState<string>(urlString);

  // Sync state immediately during render when URL changes (prevents frame flash)
  if (urlString !== prevUrl) {
    setPrevUrl(urlString);
    setIsLoading(true);
    setError(null);
  }

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(urlString, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }

        const productData: T = await response.json();
        setRetrievedData(productData);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setError((err as Error).message);
          setRetrievedData(null);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [urlString]);

  return { data: retrievedData, error, isLoading };
}

export { useFetch };

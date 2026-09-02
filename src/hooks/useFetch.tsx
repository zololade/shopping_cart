import { useEffect, useState } from "react";

function useFetch<T>(urlString: string) {
  const [retrievedProduct, setRetrievedProduct] = useState<T[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

        const productData: T[] = await response.json();
        setRetrievedProduct(productData);
        setError(null);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setError((err as Error).message);
          setRetrievedProduct(null);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [urlString]);

  return { data: retrievedProduct, error, isLoading };
}

export { useFetch };

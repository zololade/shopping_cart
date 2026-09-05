import { useFetch } from "../../hooks/useFetch/useFetch";
import type { DummyJSONProductsResponse } from "../../types/responseType";

import "./Shop.css";
import { Products } from "./components/Products/Products";

function Shop() {
  const { data, error, isLoading } = useFetch<DummyJSONProductsResponse>(
    "https://dummyjson.com/products?limit=10",
  );

  console.log(data);
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return <Products data={data} />;
}
export { Shop };

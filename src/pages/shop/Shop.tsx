import { useFetch } from "../../hooks/useFetch/useFetch";
import type { DummyJSONProductsResponse } from "../../types/responseType";

import "./Shop.css";
import { Products } from "./components/Products/Products";
import { Search } from "./components/Search.tsx/Search";

function Shop() {
  const data = useFetch<DummyJSONProductsResponse>("https://dummyjson.com/products?limit=10");

  return (
    <section className="shop">
      <Search />
      <Products {...data} />
    </section>
  );
}
export { Shop };

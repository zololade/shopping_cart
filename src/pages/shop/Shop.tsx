import { useState } from "react";

import { useFetch } from "../../hooks/useFetch/useFetch";
import type { DummyJSONProductsResponse } from "../../types/responseType";

import "./Shop.css";
import { Products } from "./components/Products/Products";
import { Search } from "./components/Search.tsx/Search";

function Shop() {
  const [URL, setURL] = useState<string>("https://dummyjson.com/products?limit=10");
  const data = useFetch<DummyJSONProductsResponse>(URL);

  function handleSubmit(query: string) {
    const trimmed = query.trim();
    if (!trimmed) {
      setURL("https://dummyjson.com/products?limit=10");
    } else {
      setURL(`https://dummyjson.com/products/search?q=${encodeURIComponent(trimmed)}`);
    }
  }

  return (
    <section className="shop">
      <Search onSearch={handleSubmit} />
      <Products {...data} />
    </section>
  );
}
export { Shop };

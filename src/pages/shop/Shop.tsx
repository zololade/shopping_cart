import { useState } from "react";

import { useFetch } from "../../hooks/useFetch/useFetch";
import type { DummyJSONProductsResponse } from "../../types/responseType";
import { Products } from "./components/Products/Products";
import { Search } from "./components/Search.tsx/Search";

function Shop() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const buildApiUrl = () => {
    let baseUrl = "https://dummyjson.com/products";

    if (query.trim()) {
      baseUrl += `/search?q=${encodeURIComponent(query.trim())}`;
    } else if (category && category !== "all") {
      baseUrl += `/category/${encodeURIComponent(category)}`;
    }

    if (sort) {
      const [sortBy, order] = sort.split("-");
      const separator = baseUrl.includes("?") ? "&" : "?";
      baseUrl += `${separator}sortBy=${sortBy}&order=${order}`;
    }

    return baseUrl;
  };

  const apiUrl = buildApiUrl();
  const { data, isLoading, error } = useFetch<DummyJSONProductsResponse>(apiUrl);

  // Filter Action Handlers
  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    if (newQuery) setCategory("");
  };

  const handleCategorySelect = (newCategory: string) => {
    setCategory(newCategory);
    setQuery("");
  };

  return (
    <div className="shopPage">
      <div className="toolbar">
        <Search onSearch={handleSearch} />

        {/* Category Filter */}
        <button onClick={() => handleCategorySelect("beauty")}>Beauty</button>

        {/* Sort Filter */}
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Top Rated</option>
        </select>
      </div>

      <Products data={data} isLoading={isLoading} error={error} />
    </div>
  );
}

export { Shop };

import { useState } from "react";

import "./Shop.css";

import { useFetch } from "../../hooks/useFetch/useFetch";
import type { DummyJSONProductsResponse } from "../../types/responseType";
import { Products } from "./components/Products/Products";
import { Search } from "./components/Search.tsx/Search";

function Shop() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const { data: categories } = useFetch<string[]>("https://dummyjson.com/products/category-list");

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
      <div className="shopControls">
        <Search onSearch={handleSearch} />

        {/* Sort Filter */}
        <select className="sortSelect" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Top Rated</option>
        </select>
      </div>

      {/* Category Pills Bar */}
      <div className="categoryPills" role="tablist" aria-label="Filter by category">
        <button
          className={`pill ${category === "" ? "active" : ""}`}
          onClick={() => handleCategorySelect("")}
        >
          All
        </button>

        {categories?.map((cat) => (
          <button
            key={cat}
            className={`pill ${category === cat ? "active" : ""}`}
            onClick={() => handleCategorySelect(cat)}
          >
            {/* Replace hyphens with spaces for clean labels */}
            {cat.replace("-", " ")}
          </button>
        ))}
      </div>

      <Products data={data} isLoading={isLoading} error={error} />
    </div>
  );
}

export { Shop };

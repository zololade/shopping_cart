import { useState, type SubmitEventHandler } from "react";

import "./Search.css";

function Search({ submit }: { submit: (url: string) => void }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit: SubmitEventHandler = (e) => {
    e.preventDefault();
    submit(inputValue);
  };

  return (
    <form className="ProductSearch" role="search" method="get" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="site-search">
        Search for product:
      </label>
      <input
        type="search"
        id="site-search"
        name="q"
        placeholder="Search..."
        onChange={(e) => setInputValue(e.target.value)}
        autoComplete="off"
      />
      <button type="submit">
        <span className="material-symbols-outlined" aria-label="search">
          search
        </span>
      </button>
    </form>
  );
}

export { Search };

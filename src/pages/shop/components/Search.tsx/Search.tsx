import "./Search.css";

function Search() {
  return (
    <form className="ProductSearch" role="search" action="/search" method="get">
      <label className="sr-only" htmlFor="site-search">
        Search for product:
      </label>
      <input type="search" id="site-search" name="q" placeholder="Search..." />
      <button type="submit">
        <span className="material-symbols-outlined" aria-label="search">
          search
        </span>
      </button>
    </form>
  );
}

export { Search };

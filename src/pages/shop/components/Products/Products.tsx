import { Link } from "react-router";

import type { DummyJSONProductsResponse } from "../../../../types/responseType";

import "./Products.css";

interface ProductsProps {
  data: DummyJSONProductsResponse | null;
  error: string | null;
  isLoading: boolean;
}

function Products({ data, error, isLoading }: ProductsProps) {
  // 1. Skeleton Loading State
  if (isLoading) {
    return (
      <section className="products">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="product skeletonCard">
            <article>
              <div className="skeleton skeletonImg"></div>
              <div className="skeleton skeletonTitle"></div>
              <div className="skeleton skeletonCategory"></div>
              <div className="skeleton skeletonPrice"></div>
            </article>
          </div>
        ))}
      </section>
    );
  }

  // 2. Error View
  if (error) {
    return (
      <section className="products">
        <div className="statusView errorView">
          <span className="material-symbols-outlined">error</span>
          <h3>Something went wrong</h3>
          <p>{error}</p>
        </div>
      </section>
    );
  }

  // 3. Not Found / Empty View
  if (data?.products.length === 0) {
    return (
      <section className="products">
        <div className="statusView emptyView">
          <span className="material-symbols-outlined">search_off</span>
          <h3>No products found</h3>
          <p>We couldn't find anything matching your query.</p>
        </div>
      </section>
    );
  }

  // 4. Product Grid
  return (
    <section className="products">
      {data?.products.map((val) => (
        <Link key={val.id} to={`/product/${val.id}`} className="product">
          <article>
            <img src={val.thumbnail || val.images[0]} alt={val.title} loading="lazy" />
            <h2>{val.title}</h2>
            <span>{val.category}</span>
            <span>{val.price}</span>
          </article>
        </Link>
      ))}
    </section>
  );
}

export { Products };

import { Link } from "react-router";

import type { DummyJSONProductsResponse } from "../../../../types/responseType";

import "./Products.css";

function Products({
  data,
  error,
  isLoading,
}: {
  data: DummyJSONProductsResponse | null;
  error: string | null;
  isLoading: boolean;
}) {
  return (
    <section className="products">
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : data?.products?.length === 0 ? (
        <p className="empty">No products found</p>
      ) : (
        data?.products.map((val) => (
          <Link key={val.id} to={`/product/${val.id}`} className="product">
            <article>
              <img src={val.thumbnail || val.images[0]} alt={val.title} />
              <h2>{val.title}</h2>
              <span>{val.category}</span>
              <span>${val.price}</span>
            </article>
          </Link>
        ))
      )}
    </section>
  );
}

export { Products };

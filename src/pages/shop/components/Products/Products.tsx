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
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;
  return (
    <section className="products">
      {data?.products?.map((val) => (
        <Link key={val.id} to="#" className="product">
          <article>
            <img src={val.images[0]} alt={val.title} />
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

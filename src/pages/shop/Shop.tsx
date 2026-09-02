import { useFetch } from "../../hooks/useFetch/useFetch";
import type { DummyJSONProductsResponse } from "../../types/responseType";

import "./Shop.css";

function Shop() {
  const { data, error, isLoading } = useFetch<DummyJSONProductsResponse>(
    "https://dummyjson.com/products?limit=10",
  );
  console.log(data);
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <section className="shop">
      <h1>shop</h1>
      {data?.products?.map((val) => (
        <article key={val.id}>
          <img src={val.images[0]} alt={val.title} />
          <h2>{val.title}</h2>
          <p>{val.description}</p>
          <span>{val.category}</span> <span>{val.price}</span> <span>{val.rating}</span>{" "}
          <span>{val.rating}</span>
        </article>
      ))}
    </section>
  );
}
export { Shop };

import { useFetch } from "../../hooks/useFetch/useFetch";

import "./Shop.css";

export interface Rating {
  rate: number;
  count: number;
}

export interface ProductResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

function Shop() {
  const { data, error, isLoading } = useFetch<ProductResponse>("https://fakestoreapi.com/products");

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <section className="shop">
      <h1>shop</h1>
      {data?.map((val) => (
        <article key={val.id}>
          <img src={val.image} alt={val.title} />
          <h2>{val.title}</h2>
          <p>{val.description}</p>
          <span>{val.category}</span> <span>{val.price}</span> <span>{val.rating.rate}</span>{" "}
          <span>{val.rating.count}</span>
        </article>
      ))}
    </section>
  );
}
export { Shop };

import { Link } from "react-router";

import type { DummyJSONProductsResponse } from "../../../../types/responseType";

import "./Products.css";

function Products({ data }: { data: DummyJSONProductsResponse | null }) {
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

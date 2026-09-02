import { useFetch } from "../../hooks/useFetch";

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

  console.log(data, error, isLoading);
  return <section className="shop">shop</section>;
}
export { Shop };

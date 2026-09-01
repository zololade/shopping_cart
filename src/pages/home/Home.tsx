import shopper from "../../assets/shopper.jpeg";

import "./Home.css";

function Home() {
  return (
    <section className="home">
      <h1>Home</h1>

      <img src={shopper} alt="Man pushing a cart" width={1091} height={976} />
    </section>
  );
}
export { Home };

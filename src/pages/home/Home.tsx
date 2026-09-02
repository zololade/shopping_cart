import { useEffect } from "react";
import { Link } from "react-router";

import shopper from "../../assets/shopping.svg";

import "./Home.css";

function Home() {
  useEffect(() => {
    document.body.classList.add("home-active");

    return () => {
      document.body.classList.remove("home-active");
    };
  }, []);

  return (
    <section className="home">
      <div className="intro">
        <h1>Welcome to our online store</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, ipsam.</p>
        <Link to="shop">Shop Now</Link>
      </div>
      <div className="imgContainer">
        <img src={shopper} alt="Man pushing a cart" width={1091} height={976} />
      </div>
    </section>
  );
}
export { Home };

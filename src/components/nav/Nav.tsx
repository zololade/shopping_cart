import { Link, NavLink } from "react-router";

import "./Nav.css";

function Nav() {
  return (
    <header className="navBar">
      <Link to="/" className="logo">
        <div className="icon"></div>
        <span>Shop</span>
      </Link>

      <nav>
        <ul>
          {["Home", "Shop", "Cart"].map((val) => {
            return (
              <li key={val}>
                <NavLink to={val === "Home" ? "/" : `/${val.toLowerCase()}`}>{val}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export { Nav };

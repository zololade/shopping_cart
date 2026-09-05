import { Outlet, useLocation } from "react-router";

import { Nav } from "./components/nav/Nav";

import "./styles/global.css";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className={`app-container ${isHome ? "home-active" : ""}`}>
      <Nav />
      <Outlet />
    </div>
  );
}

export { App };

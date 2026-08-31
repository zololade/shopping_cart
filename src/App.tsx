import { Outlet } from "react-router";

import { Nav } from "./components/nav/Nav";

import "./styles/global.css";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export { App };

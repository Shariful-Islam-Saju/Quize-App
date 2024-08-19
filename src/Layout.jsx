import { Outlet } from "react-router-dom";
import Nav from "./Components/Navbar/Nav";

import layout from "./layout.module.css";
const Layout = () => {
  return (
    <>
      <Nav />
      <main className={layout.main}>
        <div className={layout.container}>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;

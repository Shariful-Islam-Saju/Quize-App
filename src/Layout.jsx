import { Outlet } from "react-router-dom";
import Nav from "./Components/Navbar/Nav";

import layout from "./layout.module.css";
// eslint-disable-next-line react/prop-types
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

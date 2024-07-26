import Nav from "./Components/Navbar/Nav";

import layout from "./layout.module.css";
// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className={layout.main}>
        <div className={layout.container}>{children}</div>
      </main>
    </>
  );
};

export default Layout;

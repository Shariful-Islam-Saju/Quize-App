import logo from "../../assets/images/logo-bg.png";

import Acount from "./Acount";
import style from "./style.module.css";
const Nav = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <a href="index.html" className={style.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Acount />
    </nav>
  );
};

export default Nav;

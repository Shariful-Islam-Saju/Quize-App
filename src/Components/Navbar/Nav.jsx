import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-bg.png";

import Account from "./Account";
import style from "./style.module.css";
const Nav = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link to={"/"} className={style.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Shariful Islam</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Nav;

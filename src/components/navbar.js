import React, { Component } from "react";
import { Link } from "react-router-dom";
import Styles from "./styles/navbar.module.css";
import Logo from "../assets/logo1.jpeg";

class Navbar extends Component {
  render() {
    return (
      <div className={Styles.header}>
        <div className={Styles.container}>
          {/* <div className={Styles.box}>
                     </div> */}
          <div>
            <img className={Styles.logo} src={Logo} alt="Logo" />
          </div>
          <ul className={Styles.topmenu}>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/daftartanaman">Daftar Tanaman</Link>
            </li>
            <li>
              <Link to="/tentang">Tentang</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;

import React, { useState } from "react";
import styles from "./styles.module.scss";
import cx from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { handleLogout } from "../../Redux/actions";
import { Navigate, useNavigate } from "react-router-dom";
import fullLogo from "../../assets/full-logo.png";
import menu from "../../assets/menu.png";
import cross from "../../assets/x.png";

import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as Cross } from "../../assets/x.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state?.auth?.data);
  const user = useSelector((state) => state?.auth?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const logout = () => {
    dispatch(handleLogout());
  };

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.nav_logo} onClick={() => navigate("/")}>
          <img src={fullLogo} alt='full' style={{ width: "200px" }} />
        </div>

        <div
          className={cx(styles.nav_menu, { [styles.active]: isMenuOpen })}
          id='navMenu'
        >
          <ul>
            <li>
              <a
                onClick={() => navigate("/")}
                className={styles.link}
              >
                Dashboard
              </a>
            </li>
            <li>
              <a href='#' className={styles.link}>
                About
              </a>
            </li>

            <li>
              <a className={cx(styles.link,styles.userName)}>Dear, {user?.name}</a>
            </li>
          </ul>
          <button className={styles.btn_mobile} onClick={logout}>
            Logout
          </button>
        </div>

        <p className={styles.user}>Dear, {user?.name}</p>

        <div className={styles.nav_button}>
          {isLoggedIn ? (
            <button className={styles.btn} onClick={logout}>
              Logout
            </button>
          ) : (
            <>
              <button
                className={cx(styles.btn, styles.white_btn)}
                id='loginBtn'
                onClick={() => navigate("/login")}
              >
                Sign In
              </button>
              <button
                className={styles.btn}
                id='registerBtn'
                onClick={() => navigate("/register")}
              >
                Sign Up
              </button>
            </>
          )}
        </div>

        <div className={styles.nav_menu_btn} onClick={toggleMenu}>
          {isMenuOpen ? (
            <img src={cross} alt='full' style={{ width: "50px" }} />
          ) : (
            <img src={menu} alt='full' style={{ width: "50px" }} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

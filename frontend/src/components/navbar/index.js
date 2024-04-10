import React from "react";
import styles from "./styles.module.scss";
import cx from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { handleLogout } from "../../Redux/actions";
import { Navigate, useNavigate } from "react-router-dom";


const Navbar = () => {
  const isLoggedIn = useSelector((state) => state?.auth?.data);
  const user = useSelector((state) => state?.auth?.user);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(handleLogout());
  };
  const navigate = useNavigate();

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.nav_logo}>
          <p>LOGO </p>
        </div>
        <div className={styles.nav_menu} id='navMenu'>
          <ul>
            <li>
              <a  onClick={()=>navigate("./subsidiary_bank")} className={styles.link}>
                Dashboard
              </a>
            </li>
            <li>
              <a href='#' className={styles.link}>
                About
              </a>
            </li>
          </ul>
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
                onclick='login()'
              >
                Sign In
              </button>
              <button
                className={styles.btn}
                id='registerBtn'
                onclick='register()'
              >
                Sign Up
              </button>
            </>
          )}
        </div>

        <div className={styles.nav_menu_btn}>
          <i class='bx bx-menu' onclick='myMenuFunction()'></i>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../APIs/authApi";
import { handleSignIn } from "../../Redux/actions";
import { ROUTES } from "../../router/routes";
import styles from "./styles.module.scss";
import cx from "classnames";


const Login = ({ isLoggedIn, handleLogin }) => {
  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const onSubmit = (payload) => {
    dispatch(signin(payload));
  };
  console.log(loading);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      email: email,
      password: password,
    };
    dispatch(handleSignIn(payload));
  };
  return (
    <section className={styles.section} >
    <div className={styles.container} id='container'>
      <div className={cx(styles.form_container, styles.sign_up_container)}>
        {/* <form action="#">
          <h1>Create Account</h1>
          <div className={styles.='social-container'>
            <a href='#' className={styles.='social'>
              <i className={styles.='fab fa-facebook-f'></i>
            </a>
            <a href='#' className={styles.='social'>
              <i className={styles.='fab fa-google-plus-g'></i>
            </a>
            <a href='#' className={styles.='social'>
              <i className={styles.='fab fa-linkedin-in'></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type='text' placeholder='Name' />
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button>Sign Up</button>
        </form> */}
      </div>
      <div className={cx(styles.form_container, styles.sign_in_container)}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.h1}>Sign in</h1>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <a className={styles.a} href='#'>
            Forgot your password?
          </a>
          <button className={styles.button}>Sign In</button>
          <br/>
          
        </form>
        <div className={styles.siginUp}>  <button onClick={()=>console.log("working under progres")} >Sign Up</button></div>
  
      </div>
      <div className={styles.overlay_container}>
        <div className={styles.overlay}>
          <div className={cx(styles.overlay_panel, styles.overlay_left)}>
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button className={styles.ghost} id='signIn' >
              Sign In
            </button>
          </div>
          <div className={cx(styles.overlay_panel ,styles.overlay_right)}>
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className={styles.ghost} id='signUp'>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Login;

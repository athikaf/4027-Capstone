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
    //     <div className='App'>
    //       <div
    //   data-id="LgOaV3zR"
    //   className="V69BwE perFpF"
    //   data-background-prevent="true"
    //   style={{
    //     top: "0px",
    //     left: "0px",
    //     width: "190px",
    //     height: "166.247px",
    //     transform: "rotate(0deg)"
    //   }}
    // ></div>

    //       <div className='login-container'>
    //         <h1>Login</h1>
    //         <form onSubmit={handleSubmit}>
    //           <div className='form-group'>
    //             <label>Email</label>
    //             <input
    //               type='email'
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //             />
    //           </div>
    //           <div className='form-group'>
    //             <label>Password</label>
    //             <input
    //               type='password'
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
    //             />
    //           </div>
    //           {error && <div className='error'>{error}</div>}
    //           <button type='submit' >
    //             Login
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    // <div className={styles.='container'>
    //   <div className={styles.='screen'>
    //     <div className={styles.='screen__content'>
    //       <form className={styles.='login'>
    //         <div className={styles.='login__field'>
    //           <i className={styles.='login__icon fas fa-user'></i>
    //           <input
    //             type='text'
    //             className={styles.='login__input'
    //             placeholder='User name / Email'
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //         </div>
    //         <div className={styles.='login__field'>
    //           <i className={styles.='login__icon fas fa-lock'></i>
    //           <input
    //             type='password'
    //             className={styles.='login__input'
    //             placeholder='Password'
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //         </div>
    //         <button className={styles.='button login__submit'>
    //           <span className={styles.='button__text'>Log In Now</span>
    //           <i className={styles.='button__icon fas fa-chevron-right'></i>
    //         </button>
    //       </form>
    //       <div className={styles.='social-login'>
    //         <h3>log in via</h3>
    //         <div className={styles.='social-icons'>
    //           <a href='#' className={styles.='social-login__icon fab fa-instagram'></a>
    //           <a href='#' className={styles.='social-login__icon fab fa-facebook'></a>
    //           <a href='#' className={styles.='social-login__icon fab fa-twitter'></a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={styles.='screen__background'>
    //       <span className={styles.='screen__background__shape screen__background__shape4'></span>
    //       <span className={styles.='screen__background__shape screen__background__shape3'></span>
    //       <span className={styles.='screen__background__shape screen__background__shape2'></span>
    //       <span className={styles.='screen__background__shape screen__background__shape1'></span>
    //     </div>
    //   </div>
    // </div>
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
        </form>
      </div>
      <div className={styles.overlay_container}>
        <div className={styles.overlay}>
          <div className={cx(styles.overlay_panel, styles.overlay_left)}>
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button className={styles.ghost} id='signIn'>
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

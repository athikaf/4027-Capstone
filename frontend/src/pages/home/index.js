import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../router/routes";
import "./home.css"; 

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Banking Dashboard</h1>
      <div className="link-container">
        <Link to={ROUTES.CENTRAL_BANK} className="custom-link">
          Central Bank Dashboard
        </Link>
        <Link to={ROUTES.SUBSIDIARY_BANK} className="custom-link">
          Subsidiary Bank Dashboard
        </Link>
        <Link to={ROUTES.ABOUT} className="custom-link">
          About
        </Link>
      </div>
    </div>
  );
};

export default Home;

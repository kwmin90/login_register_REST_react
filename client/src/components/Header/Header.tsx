import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="home" to="/">
            Login Register App
          </Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

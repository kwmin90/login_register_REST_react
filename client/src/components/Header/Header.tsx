import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const currUser = localStorage.getItem("user");

  useEffect(() => {
    if (currUser) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [currUser]);

  return (
    <nav>
      <ul>
        <li>
          <Link className="home" to="/">
            Login Register App
          </Link>
        </li>
        {loggedIn ? (
          <li>
            <Link to="/myaccount">My Account</Link>
          </li>
        ) : (
          <li>
            <Link to="/register">Register</Link>
          </li>
        )}
        {loggedIn ? (
          <li
            onClick={() => {
              setLoggedIn(false);
              localStorage.removeItem("user");
            }}
          >
            <Link to="/">Logout</Link>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import { updateStatus } from "../../redux/status/actions";
import { RootState } from "../../redux/index";

export const Header: React.FC = () => {
  const { loggedIn } = useSelector((state: RootState) => {
    return {
      loggedIn: state.status.loggedIn,
    };
  });
  const dispatch = useDispatch();

  const handleBurger = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll<HTMLElement>(".nav-links li");

    nav?.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    burger?.classList.toggle("toggle");
  };

  return (
    <nav>
      <div className="logo">
        <h5>Login Register App</h5>
      </div>
      <ul className="nav-links">
        <li>
          <Link className="home" to="/">
            Home
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
            className="float-right"
            onClick={() => {
              dispatch(updateStatus({ loggedIn: !loggedIn }));
            }}
          >
            <Link to="/">Logout</Link>
          </li>
        ) : (
          <li className="float-right">
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
      <div
        className="burger"
        onClick={() => {
          handleBurger();
        }}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

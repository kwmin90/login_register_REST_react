import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import { updateSession } from "../../redux/actions";
import { SystemState } from "../../redux/types";

export const Header: React.FC = () => {
  const { loggedIn } = useSelector((state: SystemState) => {
    return {
      loggedIn: state.loggedIn,
    };
  });
  const dispatch = useDispatch();

  console.log(loggedIn);

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
              dispatch(updateSession({ loggedIn: !loggedIn }));
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

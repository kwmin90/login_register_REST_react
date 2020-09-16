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
    </nav>
  );
};

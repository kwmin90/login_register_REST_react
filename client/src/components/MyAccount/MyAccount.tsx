import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import "./MyAccount.css";

export const MyAccount: React.FC = () => {
  const { email, firstName, lastName } = useSelector((state: RootState) => {
    return {
      email: state.user.email,
      firstName: state.user.firstName,
      lastName: state.user.lastName,
    };
  });

  return (
    <div className="account-container">
      <div>
        <h3>Email: {email}</h3>
      </div>
      <div>
        <h3>
          Name: {firstName} {lastName}
        </h3>
      </div>
    </div>
  );
};

import React from "react";
import { useForm } from "../useForm";
import "./Register.css";

export const Register: React.FC = () => {
  const {
    handleChange,
    handleRegister,
    handleBlur,
    errors,
    disable,
    values,
  } = useForm({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-element">
          <label htmlFor="email">Email: </label>
          <input
            className={errors.email && "error-input"}
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
        <div className="form-element">
          <label htmlFor="firstName">First Name: </label>
          <input
            className={errors.firstName && "error-input"}
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstName && <p className="error-text">{errors.firstName}</p>}
        </div>
        <div className="form-element">
          <label htmlFor="lastName">Last Name: </label>
          <input
            className={errors.lastName && "error-input"}
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastName && <p className="error-text">{errors.lastName}</p>}
        </div>
        <div className="form-element">
          <label htmlFor="password">Password: </label>
          <input
            className={errors.password && "error-input"}
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete=""
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>
        <button className="register-submit" disabled={disable} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

import React from "react";
import "./Login.css";
import { useForm } from "../useForm";

export const Login: React.FC = () => {
  const {
    values,
    errors,
    disable,
    handleLogin,
    handleChange,
    handleBlur,
  } = useForm({
    email: "",
    password: "",
  });
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button disabled={disable} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

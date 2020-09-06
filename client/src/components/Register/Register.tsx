import React from "react";
import { useForm } from "../useForm";

export const Register: React.FC = () => {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    submitting,
    values,
  } = useForm({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <div>
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
        <div>
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
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            className={errors.lastName && "error-input"}
            type="text"
            name="lastName"
            placeholder="Enter your Last Name"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastName && <p className="error-text">{errors.lastName}</p>}
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            className={errors.password && "error-input"}
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>
        <button className="register-submit" disabled={submitting} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

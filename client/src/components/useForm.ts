import { useState, useEffect } from "react";
import { User } from "../models/User";

export const useForm = (initState: User) => {
  const [values, setValues] = useState(initState);
  const [errors, setErrors] = useState<any>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (submitting) {
      const noErrors = Object.keys(errors).length === 0; //always return false         error always has 4 elements so this doesnt work
      if (noErrors) {
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors, submitting]);

  const validate = () => {
    let error = {};
    if (!values.email) {
      Object.assign(error, { email: "Email cannot be empty" });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      Object.assign(error, { email: "Invalid email address" });
    }

    if (!values.firstName) {
      Object.assign(error, { firstName: "First name cannot be empty" });
    } else if (values.firstName.length < 3) {
      Object.assign(error, {
        firstName: "First name must be at least 3 characters",
      });
    }

    if (!values.lastName) {
      Object.assign(error, { lastName: "Last name cannot be empty" });
    } else if (values.lastName.length < 3) {
      Object.assign(error, {
        lastName: "Last name must be at least 3 characters",
      });
    }

    if (!values.password) {
      Object.assign(error, { password: "Password cannot be empty" });
    } else if (values.password.length < 6) {
      Object.assign(error, {
        password: "Password must be at least 6 characters",
      });
    }

    return error;
  };

  const handleBlur = () => {
    const validation = validate();
    setErrors(validation);
  };

  const handleChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = validate();
    setErrors(validation);
    setSubmitting(true);

    console.log(
      JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      })
    );

    // fetch("http://localhost:4000/api/register", {
    //   method: "POST",
    //   headers: new Headers({
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   }),
    //   body: JSON.stringify({
    //     firstName: values.firstName,
    //     lastName: values.lastName,
    //     email: values.email,
    //     password: values.password,
    //   }),
    // });
  };
  return { handleChange, handleSubmit, handleBlur, errors, submitting, values };
};

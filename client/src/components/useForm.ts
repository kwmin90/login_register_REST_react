import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../models/User";
import { useSelector, useDispatch } from "react-redux";
import { updateStatus } from "../redux/status/actions";
import { updateUser } from "../redux/user/actions";
import { RootState } from "../redux/index";

export const useForm = (initState: User) => {
  const [values, setValues] = useState(initState);
  const [errors, setErrors] = useState<any>({});
  const [disable, setDisable] = useState(false);
  const { loggedIn } = useSelector((state: RootState) => {
    return {
      loggedIn: state.status.loggedIn,
    };
  });

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const noErrors = Object.keys(errors).length === 0;
    if (noErrors) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [errors, disable]);

  const checkIfLogin = (init: User) => {
    const login = { email: "", password: "" };
    if (JSON.stringify(login) === JSON.stringify(init)) {
      return true;
    } else {
      return false;
    }
  };
  const validate = () => {
    let error = {};
    const login = checkIfLogin(initState);
    if (!values.email) {
      Object.assign(error, { email: "Email cannot be empty" });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      Object.assign(error, { email: "Invalid email address" });
    }
    if (!values.password) {
      Object.assign(error, { password: "Password cannot be empty" });
    } else if (values.password.length < 6) {
      Object.assign(error, {
        password: "Password must be at least 6 characters",
      });
    }
    if (!login) {
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
    }
    return error;
  };
  const validateUser = (errorMessage: string) => {
    let error = {};
    Object.assign(error, { email: errorMessage });
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
    const validation = validate();
    setErrors(validation);
  };
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    setDisable(true);
    fetch("http://localhost:4000/api/login", {
      method: "POST",
      credentials: "include",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    }).then(async (res) => {
      if (res.ok) {
        const response = await res.json();
        dispatch(
          updateUser({
            email: response.email,
            firstName: response.firstName,
            lastName: response.lastName,
          })
        );
        dispatch(updateStatus({ loggedIn: !loggedIn }));
        history.push("/myaccount");
      } else {
        const errorMessage = await res.text();
        const validation = validateUser(errorMessage);
        setErrors(validation);
      }
    });
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = validate();
    setErrors(validation);
    setDisable(true);

    fetch("http://localhost:4000/api/register", {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      }),
    }).then(async (res) => {
      if (res.ok) {
        history.push("/login");
      } else {
        const errorMessage = await res.text();
        const validation = validateUser(errorMessage);
        setErrors(validation);
      }
    });
  };
  return {
    handleChange,
    handleRegister,
    handleLogin,
    handleBlur,
    errors,
    disable,
    values,
  };
};

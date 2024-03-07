import classes from "../../Custom.module.css";
import { useRef, useState } from "react";
import orange from "../../images/orange-fruit.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { auth, queryClient } from "../../util/http";
import Error from "../UI/Error";

export default function Register() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const checkRef = useRef();
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: auth,
    onSuccess: (data) => {
      if (data.errors.Email) {
        setHasError(true);
        setErrorMessage(data.errors.Email[0]);
        return;
      }
      if (data.error) {
        setHasError(true);
        setErrorMessage(data.message);
        return;
      }
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      navigate("/auth/login");
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }

    const enteredEmail = emailRef.current.value;
    const enteredFirstName = firstNameRef.current.value;
    const enteredLastName = lastNameRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const isChecked = checkRef.current.checked;

    const data = {
      email: enteredEmail,
      firstName: enteredFirstName,
      lastName: enteredLastName,
      password: enteredPassword,
    };

    form.classList.add("was-validated");

    if (
      !enteredEmail.includes("@") ||
      enteredFirstName == "" ||
      enteredLastName == "" ||
      enteredPassword == "" ||
      !isChecked
    ) {
      return;
    }
    mutate({ path: pathname, body: data });
  };
  return (
    <div
      className="container-fluid w-100 w-xl-75"
      style={{
        backgroundImage: `url(${orange})`,
        backgroundPosition: "center",
        height: "80vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className={`row pt-5 mb-2 ${classes.head}`}>
        <h2 className="m-0 text-center">Be a part of our community!</h2>
        <h3 className="mt-3 text-center">Create an Account</h3>
      </div>
      <form
        className={`row needs-validation w-100 w-lg-75 m-auto ${classes.form}`}
        onSubmit={submitHandler}
        noValidate
      >
        {hasError && <Error message={errorMessage} />}
        <div className="col-md-6 mb-2">
          <label htmlFor="firstName" className="form-label fw-semibold">
            First Name
          </label>
          <input
            type="text"
            className="form-control bg-transparent bg-gradient fw-semibold"
            id="firstName"
            name="firstName"
            ref={firstNameRef}
            required
          />
        </div>
        <div className="col-md-6 mb-2">
          <label htmlFor="lastName" className="form-label fw-semibold">
            Last Name
          </label>
          <input
            type="text"
            className="form-control bg-transparent bg-gradient fw-semibold"
            id="lastName"
            name="lastName"
            ref={lastNameRef}
            required
          />
        </div>
        <div className="col-12 mb-2">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control bg-transparent bg-gradient fw-semibold"
            id="email"
            name="email"
            ref={emailRef}
            required
          />
        </div>
        <div className="col-12 mb-2">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control bg-transparent bg-gradient fw-semibold"
            id="password"
            name="password"
            ref={passwordRef}
            required
          />
        </div>
        <div className="col-12 mb-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="check"
              name="check"
              ref={checkRef}
              required
            />
            <label className="form-check-label fw-semibold" htmlFor="check">
              I agree with Terms of Service
            </label>
          </div>
        </div>
        <div className="col-12 mt-1 mb-5">
          <button className="btn btn-outline-light fw-semibold" type="submit">
            Register
          </button>
        </div>
      </form>
      <div className={`row ${classes.form}`}>
        <Link
          to="/auth/login"
          className="nav-link text-light fs-5 fw-semibold text-center"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

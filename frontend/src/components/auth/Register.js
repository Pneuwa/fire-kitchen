import classes from "../../Custom.module.css";
import { useRef } from "react";
import orange from "../../images/orange-fruit.jpg";
import { Link } from "react-router-dom";

export default function Register() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }

    const enteredFirstName = firstNameRef.current.value;
    const enteredLastName = lastNameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const data = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      password: enteredPassword,
    };

    form.classList.add("was-validated");
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
        <div class="col-12 mb-2">
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
        <div class="col-12 mb-2">
          <div class="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="check"
              name="check"
              required
            />
            <label className="form-check-label" htmlFor="check">
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
          className="nav-link fs-5 fw-semibold text-center"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

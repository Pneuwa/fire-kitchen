import classes from "../../Custom.module.css";
import { Link } from "react-router-dom";
import lime from "../../images/slice-of-lime-under-water.jpg";
import { useRef } from "react";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const data = {
      email: enteredEmail,
      password: enteredPassword,
    };

    form.classList.add("was-validated");
  };
  return (
    <div
      className="container-fluid w-100 w-xl-75"
      style={{
        backgroundImage: `url(${lime})`,
        backgroundPosition: "0 80%",
        height: "85vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className={`row pt-5 mb-2 ${classes.head}`}>
        <h2 className="m-0 text-center">
          Welcome,
          <br />
          Let's continue where we left off!
        </h2>
        <h3 className="mt-3 text-center">Please Login</h3>
      </div>
      <form
        className={`row mb-5 needs-validation w-100 w-md-75 w-lg-50 m-auto ${classes.form}`}
        onSubmit={submitHandler}
        noValidate
      >
        <div className="mb-2">
          <label htmlFor="email" className="form-label fw-semibold">
            Email
          </label>
          <input
            type="email"
            className="form-control bg-transparent bg-gradient fw-semibold"
            id="email"
            name="email"
            ref={emailRef}
          />
        </div>
        <div class="mb-2">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label fw-semibold"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control bg-transparent bg-gradient fw-semibold"
            id="password"
            name="password"
            ref={passwordRef}
          />
        </div>
        <div className="col-12 mt-1 mb-5">
          <button
            className="btn btn-outline-light border-3 fw-semibold"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
      <div className={`row fs-5 ${classes.form}`}>
        <p className="fw-semibold text-center">Don't you have an account ?</p>
        <Link to="/auth/register" className="nav-link fw-semibold text-center">
          Create an Account
        </Link>
      </div>
    </div>
  );
}

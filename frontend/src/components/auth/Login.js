import classes from "../../Custom.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import orange from "../../images/orange-fruit.jpg";
import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { auth, queryClient } from "../../util/http";
import Error from "../UI/Error";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: ["auth"],
    mutationFn: auth,
    onSuccess: (data) => {
      const currentDate = new Date();
      const expireDate = new Date(currentDate);
      expireDate.setMinutes(expireDate.getMinutes() + 60);
      if (data.isError) {
        setHasError(true);
        setErrorMessage(data.message);
        return;
      }
      const session = {
        token: data.token,
        expires: expireDate,
        user: data.user,
      };
      sessionStorage.setItem("session", JSON.stringify(session));
      queryClient.invalidateQueries({ mutationKey: ["auth"] });
      navigate(0);
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
    const enteredPassword = passwordRef.current.value;

    const data = {
      email: enteredEmail,
      password: enteredPassword,
    };

    form.classList.add("was-validated");

    if (data.email == "" || data.password == "") {
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
        {hasError && <Error message={errorMessage} />}
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
            required
          />
        </div>
        <div class="mb-2">
          <label htmlFor="password" className="form-label fw-semibold">
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
        <Link
          to="/auth/register"
          className="nav-link fw-semibold text-center text-light"
        >
          Create an Account
        </Link>
      </div>
    </div>
  );
}

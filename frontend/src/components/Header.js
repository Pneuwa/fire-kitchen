import logo from "../images/main-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useIsFetching } from "@tanstack/react-query";
import { useEffect } from "react";

export default function Header() {
  const session = sessionStorage.getItem("session");
  const fetching = useIsFetching();
  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.parse(session)?.expires < new Date().toISOString()) {
      sessionStorage.removeItem("session");
      navigate(0);
    }
  });

  const hideMenu = () => {
    window.scrollTo(0, 0);
    if (window.matchMedia("(min-width: 992px)").matches) {
      return;
    }
    const nav = document.getElementsByClassName("navbar-collapse");
    if (nav[0].classList.contains("show")) {
      nav[0].classList.remove("show");
    }
  };
  return (
    <>
      <div
        className="d-none d-md-block bg-primary"
        style={{ height: "40px", color: "#000000" }}
      >
        <div className="container-fluid d-flex justify-content-end align-items-center">
          <Link className="nav-link">
            <i className="fa-brands fa-instagram fa-fw fw-semibold"></i>
          </Link>
          <Link className="nav-link">
            <i className="fa-brands fa-x-twitter fa-fw fw-semibold"></i>
          </Link>
          <Link className="nav-link">
            <i className="fa-brands fa-square-facebook fa-fw fw-semibold"></i>
          </Link>
        </div>
      </div>
      <header className="d-flex flex-column justify-content-center align-items-center sticky-top">
        <nav className="navbar navbar-expand-lg pb-2 bg-primary w-100">
          <div className="container-fluid">
            <Link
              className="navbar-brand d-lg-none w-75 w-lg-100"
              to="/"
              onClick={hideMenu}
            >
              <img src={logo} className="img-fluid" />
            </Link>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav d-flex align-items-center mx-auto fs-5">
                <li className="nav-item fw-semibold mx-3" onClick={hideMenu}>
                  <Link className="nav-link" to="/recipes">
                    Recipes
                  </Link>
                </li>
                <li className="nav-item fw-semibold mx-3" onClick={hideMenu}>
                  <Link className="nav-link" to="/share">
                    Share
                  </Link>
                </li>
                <Link
                  className="navbar-brand d-none d-lg-block"
                  to="/"
                  onClick={hideMenu}
                >
                  <img src={logo} />
                </Link>
                {!session && (
                  <li className="nav-item fw-semibold mx-3" onClick={hideMenu}>
                    <Link className="nav-link" to="/auth/login">
                      Login
                    </Link>
                  </li>
                )}
                {!session && (
                  <li className="nav-item fw-semibold mx-3" onClick={hideMenu}>
                    <Link className="nav-link" to="/auth/register">
                      Register
                    </Link>
                  </li>
                )}
                {session && (
                  <li className="nav-item fw-semibold mx-3" onClick={hideMenu}>
                    <Link className="nav-link" to="/my-recipes">
                      My Recipes
                    </Link>
                  </li>
                )}
                {session && (
                  <li className="nav-item fw-semibold mx-3" onClick={hideMenu}>
                    <Link className="nav-link" to="/logout">
                      Logout
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
        {fetching > 0 && (
          <div className="row">
            <p
              className="fw-semibold mt-3"
              style={{ textAlign: "center", width: "100%" }}
            >
              Fetching...
            </p>
          </div>
        )}
      </header>
    </>
  );
}

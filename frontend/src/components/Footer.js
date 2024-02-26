import { Link } from "react-router-dom";
import footerLogo from "../images/footer-logo.png";

export default function Footer() {
  return (
    <footer className="container-fluid py-5 bg-dark shadow-lg">
      <div className="container">
        <div className="row row-cols-2">
          <div className="col-12 col-md-6">
            <img src={footerLogo} className="img-fluid" />
            <p className="text-body-secondary my-3 text-center text-md-start">
              © 2024 Rhayaden
            </p>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-start align-items-center">
            <h5>Fire Kitchen</h5>
            <ul className="nav flex-column align-items-center">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="https://github.com/rhayaden"
                  target="_blank"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Privacy Policy</Link>
              </li>
              <li className="nav-item">
                <div className="container-fluid d-flex justify-content-end align-items-center">
                  <Link className="nav-link">
                    <i className="fa-brands fa-instagram fa-fw fw-semibold"></i>
                  </Link>
                  <Link className="nav-link">
                    <i class="fa-brands fa-x-twitter fa-fw fw-semibold"></i>
                  </Link>
                  <Link className="nav-link">
                    <i class="fa-brands fa-square-facebook fa-fw fw-semibold"></i>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

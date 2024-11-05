/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import logo from "../../assets/logo1.avif";
import RegistrationForm from "../form/RegistrationForm";

const Navbar = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const clickHandler = () => {
    setShowForm(true);
  };

  const closeFormHandler = () => {
    setShowForm(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="relative flex w-full items-center justify-between py-5 shadow-md bg-white/90 dark:bg-neutral-700">
        <div className="flex w-full items-center justify-between px-6">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-10 h-10 mr-3" />
            <span className="text-xl font-bold text-blue-500">MEDICROP</span>
          </div>

          {/* Hamburger icon for mobile view */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
              <svg
                className="w-6 h-6 text-black dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Links for desktop view */}
          <div className="hidden lg:flex items-center">
            <ul className="flex flex-col lg:flex-row items-center gap-5 ml-auto">
              <li>
                <Link className="text-black dark:text-white" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
                  to="/doctorlist"
                >
                  Doctor List
                </Link>
              </li>
              <li>
                <Link
                  className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
                  to="/patientlist"
                >
                  Patient List
                </Link>
              </li>
              <li>
                <Link
                  className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <Button text="Login" />
              <Button text="Register" onClick={clickHandler} />
            </ul>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white dark:bg-neutral-700 shadow-lg z-10">
            <ul className="flex flex-col items-center gap-5 p-5">
              <li>
                <Link
                  className="text-black dark:text-white"
                  to="/"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
                  to="/about"
                  onClick={toggleMobileMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
                  to="/doctorlist"
                  onClick={toggleMobileMenu}
                >
                  Doctor List
                </Link>
              </li>
              <li>
                <Link
                  className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
                  to="/patientlist"
                  onClick={toggleMobileMenu}
                >
                  Patient List
                </Link>
              </li>
              <li>
                <Link
                  className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
                  to="/services"
                  onClick={toggleMobileMenu}
                >
                  Services
                </Link>
              </li>
              <Button text="Login" />
              <Button text="Register" onClick={clickHandler} />
            </ul>
          </div>
        )}
      </nav>

      {showForm && <RegistrationForm onClose={closeFormHandler} />}
    </>
  );
};

export default Navbar;

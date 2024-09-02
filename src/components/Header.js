import { Link } from "react-router-dom";
import { useState } from "react";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    const handleToggle = () => {
        setIsOpen(false);
    };

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        setLoggedInUser(null);
        localStorage.removeItem("user");
    };

    return (
        <div>
            <nav className="bg-white border-gray-200 shadow-custom">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link
                        href="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-xl font-semibold hover:text-blue-700 whitespace-nowrap">
                            Geeksynergy
                        </span>
                    </Link>
                    <button
                        onClick={toggleNavbar}
                        type="button"
                        className="inline-flex items-center p-2 w-12 h-12 justify-center text-sm rounded-lg md:hidden focus:outline-none"
                        aria-controls="navbar-default"
                        aria-expanded={isOpen}>
                        <span className="sr-only">
                            {isOpen ? "Close main menu" : "Open main menu"}
                        </span>
                        {isOpen ? (
                            // Cross icon for close
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            // Hamburger icon for open
                            <svg
                                className="w-5 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        )}
                    </button>
                    <div
                        className={`${
                            isOpen ? "" : "hidden"
                        } w-full md:block md:w-auto`}
                        id="navbar-default">
                        <ul className="opacity-85 bg-black text-white md:text-black font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-graydark-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                            <li className="block py-2 px-3 mt-2 rounded md:bg-transparent hover:text-blue-700 md:p-0">
                                <Link to="/" onClick={handleToggle}>
                                    Home
                                </Link>
                            </li>
                            <li className="block py-2 px-3 mt-2 rounded md:bg-transparent hover:text-blue-700 md:p-0">
                                <Link to="/company-info" onClick={handleToggle}>
                                    Company Info
                                </Link>
                            </li>

                            {!loggedInUser ? (
                                <button
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm mt-4 md:mt-0 w-1/2 md:w-auto px-4 py-2 focus:outline-none">
                                    <Link to="/signin" onClick={handleToggle}>
                                        SignIn
                                    </Link>
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm mt-4 md:mt-0 w-1/2 md:w-auto px-4 py-2 focus:outline-none">
                                    Logout
                                </button>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;

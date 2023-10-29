import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/078277ed-5380-4deb-b166-997beba79634/deuftx8-f0445352-7dd1-4637-a719-9c5d02074783.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3ODI3N2VkLTUzODAtNGRlYi1iMTY2LTk5N2JlYmE3OTYzNFwvZGV1ZnR4OC1mMDQ0NTM1Mi03ZGQxLTQ2MzctYTcxOS05YzVkMDIwNzQ3ODMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.D98xDw_KIC9fcV1nQ3wO-WG5BMnhD5MKhqJF3NX9JcU"
              className="mr-4 h-12"
              alt="Logo"
            />
            <p className="text-xl text-center font-semibold pb-1.5">
              Shreyam Singh{" "}
            </p>
          </Link>
          <div className="flex items-center lg:order-2"></div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 text-lg"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-bold lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-lime-600" : "text-gray-600"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-lime-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-lime-600" : "text-gray-600"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-lime-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-lime-600" : "text-gray-600"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-lime-700 lg:p-0`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-lime-600" : "text-gray-600"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-lime-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

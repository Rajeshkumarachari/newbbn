import React from "react";
import { SiAirbnb } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-gray-100 ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-2">
        <Link
          to="/"
          className="flex  cursor-pointer flex-wrap text-sm sm:text-xl p-1 hover:bg-red-100 rounded"
        >
          <SiAirbnb className=" text-red-600 mx-1 " size={23} />
          <span className=" text-red-600  font-semibold">Rajesh-bnb</span>
        </Link>
        <form className=" bg-gray-50 rounded-full  flex">
          <input
            type="text"
            placeholder="Search destinations"
            className=" bg-transparent px-3 focus:outline-none w-24 sm:w-64 "
          />
          <IoIosSearch className=" bg-red-600 text-white rounded-full size-10 p-2" />
        </form>
        <ul className=" flex gap-4">
          <Link to="/">
            <li className=" hidden sm:inline cursor-pointer text-lg hover:bg-gray-200 p-2 rounded-md  hover:underline ">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className=" hidden sm:inline cursor-pointer text-lg hover:bg-gray-200 p-2 rounded-md  hover:underline ">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="cursor-pointer text-lg hover:bg-gray-200  rounded-md  hover:underline ">
              {" "}
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;

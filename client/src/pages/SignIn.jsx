import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="p-3 max-w-lg mx-auto flex justify-center mt-3 h-full">
      <div className="card bg-base-100 w-96 shadow-xl">
        <h1 className=" text-2xl text-center font-semibold mt-3">Sign In</h1>
        <form className=" flex flex-col gap-3 p-3">
          <label className="input input-bordered flex items-center gap-2">
            Email:
            <input type="email" id="email" className="grow" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Password:
            <input type="text" id="password" className="grow" />
          </label>
          <button className=" bg-slate-700 text-white p-2 rounded-lg hover:opacity-95 disabled:opacity-80">
            <span className=" loading-spinner"></span>
            Sign In
          </button>
        </form>
        <div className=" flex gap-2 m-3">
          <p>Have an account?</p>
          <Link to={"/sign-up"} className="link link-primary">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

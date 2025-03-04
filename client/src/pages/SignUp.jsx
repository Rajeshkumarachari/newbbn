import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto flex justify-center mt-3 h-full">
      <div className="card bg-base-100 w-96 shadow-xl">
        <h1 className=" text-2xl text-center font-semibold mt-3">
          Register with us
        </h1>
        <form className=" flex flex-col gap-3 p-3" onSubmit={handleSubmit}>
          <label className="input input-bordered flex items-center gap-2">
            User Name :
            <input
              type="text"
              id="username"
              className="grow"
              onChange={handleChange}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Email:
            <input
              type="email"
              id="email"
              className="grow"
              onChange={handleChange}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Password:
            <input
              type="password"
              id="password"
              className="grow"
              onChange={handleChange}
            />
          </label>
          <button
            disabled={loading}
            className=" bg-slate-700 text-white p-2 rounded-lg hover:opacity-95 disabled:opacity-80"
          >
            <span
              className={
                loading ? "loading loading-spinner" : "loading-spinner"
              }
            ></span>
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>
        <div className=" flex gap-2 m-3">
          <p>Have an account?</p>
          <Link to={"/sign-in"} className="link link-primary">
            Sign In
          </Link>
        </div>
        {error && (
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error} </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;

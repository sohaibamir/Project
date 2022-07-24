import React from "react";
import Link from "next/link";
import Navbar from "../components/HomePage/Navbar";

const login = () => {
  return (
    <>
      <Navbar title="CRYFTS" />
      <div
        className="signin-cls d-flex justify-content-center align-items-center mt-3"
        style={{ height: "100vh" }}
      >
        <div
          className="card shadow-lg "
          style={{ width: "33rem", height: "33rem", overflow: "hidden" }}
        >
          <h1 className="m-auto text-color mt-3">Welcome Back</h1>
          <div
            className="d-flex gap-3 flex-column justify-content-center"
            style={{ padding: "50px" }}
          >
            <h1 className="card-title text-muted">Sign in</h1>
            <div>
              <label htmlFor="Email1" className="form-label fw-bold">
                Email address
              </label>
              <input
                type="email"
                className="form-control p-2"
                id="Email1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label fw-bold "
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <Link href="/">
              <a className="btn btn1 btn-primary bd-color bg-color p-3 fw-bold">
                Continue
              </a>
            </Link>
            <Link href="/signup">
              <a className="btn btn-dark p-3 fw-bold">Create account</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;

import React from "react";
import Link from "next/link";
import Navbar from "../components/HomePage/Navbar";

const signup = () => {
  return (
    <>
     <Navbar title = "CRYFTS"/>
    <div
      className=" signup-cls d-flex flex-column align-items-center p-3"
      style={{ marginTop: "5%" }}
    >
      <h1 className="display-5">Create your account</h1>
      <form className="mt-3 d-flex flex-column">
        <div className="d-flex empass gap-2 flex-wrap">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3 ">
            <label htmlFor="Lname" className="form-label">
              Last name
            </label>
            <input type="text" className="form-control" id="Lname"/>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telphone" className="form-label">
           Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="telphone"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label
            className="form-check-label text-color"
            htmlFor="exampleCheck1"
          >
            Accept terms and conditions
          </label>
        </div>
        <button
          type="submit"
          className="btn btn1 bg-color fw-bold bd-color btn-primary py-2 my-3 m-auto"
          style={{ width: "80%" }}
        >
          Submit
        </button>
        <span className="m-auto">
          Already have an account?&nbsp;
          <Link href="/login">
            <a className="text-decoration-none">login</a>
          </Link>{" "}
        </span>
      </form>
    </div>
    </>
  );
};

export default signup;
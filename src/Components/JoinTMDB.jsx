import React from "react";

class JoinTMDB extends React.Component {
  render() {
    return (
      <div className="container my-5">
        <h4>Sign up for an account</h4>
        <p>
          Signing up for an account is free and easy. Fill out the form below to
          get started. JavaScript is required to to continue.
        </p>
        <form>
          <div className="mb-3">
            <label for="username" className="form-label">
              Username
            </label>
            <input
              type="username"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
            ></input>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password(4 characters minimum)
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            ></input>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword2" className="form-label">
              Password Confirm
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
            ></input>
          </div>
          <div className="mb-3">
            <label for="exampleInputemail" className="form-label">
              Email
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputemail"
            ></input>
          </div>
          <div className="my-4">
            <p>
              By clicking the "Sign up" button below, I certify that I have read
              and agree to the TMDb terms of use and privacy policy.
            </p>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              sign Up
            </button>
            <a href="#" className="resetandcancel">
              Cancel
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default JoinTMDB;

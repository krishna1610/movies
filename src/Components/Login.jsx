import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div className="container my-5">
        <h4>Login to your account</h4>
        <p>
          In order to use the editing and rating capabilities of TMDb, as well
          as get personal recommendations you will need to login to your
          account. If you do not have an account, registering for an account is
          free and simple.{" "}
          <a href="#" className="linktourl">
            Click here
          </a>{" "}
          to get started.
        </p>
        <p>
          If you signed up but didn't get your verification email,{" "}
          <a href="#" className="linktourl">
            click here
          </a>{" "}
          to have it resent.
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
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            ></input>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <a href="#" className="resetandcancel">
              Reset password
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;

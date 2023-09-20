import React from "react";
import Logo from "./../assets/wissenlogo.png";
const LoginComponent = ({ loginUser }) => {
  return (
    <div className="loginContainer">
      <div className="inputContainer">
        <img style={{ marginLeft: "-8px" }} src={Logo} alt="company Logo" />
        <span className="helloTitle">Hello there, Sign in to continue</span>
      </div>
      <div>
        <form onSubmit={(e) => loginUser(e)}>
          <div className="inputContainer">
            <label className="inputLabel">Email</label>
            <input className="inputElement" type="text" id="userName" />
            <div></div>
          </div>
          <div className="inputContainer">
            <label className="inputLabel">Password</label>
            <input className="inputElement" id="password" type="password" />
            <div></div>
          </div>
          <div className="conditioBox">
            <input style={{ margin: "7px 0px" }} type="checkbox" />{" "}
            <span className="condition">
              By Creating or login into an account, you are agreeing with our{" "}
              <b>Terms and Conditions</b> and <b> Privacy policies</b>
            </span>
          </div>
          <button className="submitButton">Login</button>
        </form>
      </div>
      <span
        style={{ marginTop: "100px", display: "block", color: "#2d2daf" }}
        className="helloTitle"
      >
        Signin with company SSO
      </span>
    </div>
  );
};

export default LoginComponent;

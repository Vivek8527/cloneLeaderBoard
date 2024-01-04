/* eslint-disable react/jsx-no-undef */
import "./login.css";
import logo_Image from "../../assets/images/Shudhlovelogo.png";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import baseUrl from "../../baseUrl";
import { useNavigate } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

const Login = () => {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);

  const handleInputType = () => {
    setShow(!show);
  };

  const handleForgotPassword = () => {
    axios
      .post(baseUrl + "leader/forgetRequest", {
        email,
      })
      .then((res) => {
        console.log(res);
        setOpenPopup(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const closePopup = () => {
    setOpenPopup(false);
  };

  const fetchlogin = () => {
    axios
      .post(baseUrl + "leader/leaderLogin", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderForgotPassword = () => {
    return (
      <div className="forgot_container">
        <div className="forgot_left_side">
          <div className="forgot_content_container">
            <div>
              <img
                src={logo_Image}
                alt="shudhlove_logooo"
                className="shudhlove_logooo"
              />
            </div>
            <h1 className="logout_heading">Forgot Password</h1>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="logout_input"
              type="text"
              placeholder="Enter Email"
              name=""
              required
            />
            <div>
              <button
                onClick={handleForgotPassword}
                type="button"
                className="Submit_button"
              >
                Submit
              </button>
            </div>
            <div>
              <Dialog open={openPopup} onClose={closePopup}>
                <DialogTitle>
                  Your request to change password has been successfully sent to
                  admin
                </DialogTitle>
                <DialogActions>
                  <Button
                    onClick={closePopup}
                    style={{
                      color: "white",
                      background: "#f73097",
                      cursor: "pointer",
                    }}
                  >
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
            <div className="logout_right_half"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {forgotPasswordMode ? (
        renderForgotPassword()
      ) : (
        <div className="login_container">
          <div className="login_left_side">
            <div className="login_content_container">
              <div>
                <img
                  src={logo_Image}
                  alt="shudhlove_logo"
                  className="shudhlove_logo"
                />
              </div>
              <h1 className="login_heading">Log In</h1>

              <input
                onChange={(e) => setEmail(e.target.value)}
                className="login_input"
                type="text"
                placeholder="Enter Email"
                name=""
                required
              ></input>

              <div className="eye_icons">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="login_input"
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  name=""
                  required
                ></input>
                <p style={{ fontSize: "20px" }} onClick={handleInputType}>
                  {show ? <FaEye /> : <FaEyeSlash />}
                </p>
              </div>
              <div>
                <button
                  onClick={fetchlogin}
                  type="button"
                  className="login_button"
                >
                  LOG IN
                </button>
              </div>
              <button
                onClick={() => setForgotPasswordMode(true)}
                type="button"
                className="forgot_password_container"
              >
                Forgot Password
              </button>
              <div className="login_right_half"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;

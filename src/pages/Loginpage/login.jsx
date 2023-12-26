/* eslint-disable react/jsx-no-undef */
import "./login.css";
// import Image from/ "../../assets/imagesBcakground1.jpg";
import logo_Image from "../../assets/images/Shudhlovelogo.png";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import axios from "axios";
import baseUrl from "../../baseUrl";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleInputType = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard", { replace: true });
    }
  }, []);

  // const [loginpage, setLoginpage] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  return (
    <div className="login_container">
      <div className="login_left_side">
        <div className="login_contetnt_container">
          <div>
            <img
              src={logo_Image}
              alt="shudhlove_logo"
              className="shudhlove_logo"
            />
          </div>
          <h1 className="login_heading">Log In As Leader</h1>

          <input
            onChange={(e) => setEmail(e.target.value)}
            className="login_input"
            type="text"
            placeholder="Email or phone number"
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
            <button onClick={fetchlogin} type="button" className="login_button">
              LOG IN
            </button>
          </div>
          <div className="login_right_half"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;

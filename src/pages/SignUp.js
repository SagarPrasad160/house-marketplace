import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import VisibilityIcon from "../assets/svg/visibilityIcon.svg";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <div className="pageContainer">
        <header className="pageHeader">Welcome Back</header>
        <main>
          <form>
            <input
              type="text"
              value={name}
              placeholder="Name"
              className="nameInput"
              id="name"
              onChange={handleChange}
            />
            <input
              type="text"
              value={email}
              placeholder="Email"
              className="emailInput"
              id="email"
              onChange={handleChange}
            />
            <div className="passwordInputDiv">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="password"
                id="password"
                className="passwordInput"
                onChange={handleChange}
              />
              <img
                src={VisibilityIcon}
                alt="show password"
                className="showPassword"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            <Link to="/forgot-password" className="forgotPasswordLink">
              Forgot Password
            </Link>
            <div className="signUpBar">
              <p className="signUpText">Sign Up</p>
              <button className="signUpButton">
                <ArrowRightIcon fill="#fff" width="34px" height="34px" />
              </button>
            </div>
          </form>
          {/* Google OAuth */}
          <Link to="/sign-in" className="registerLink">
            Sign-In Instead
          </Link>
        </main>
      </div>
    </>
  );
}

export default SignUp;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import VisibilityIcon from "../assets/svg/visibilityIcon.svg";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

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
            <div className="signInBar">
              <p className="signInText">Sign In</p>
              <button className="signInButton">
                <ArrowRightIcon fill="#fff" width="34px" height="34px" />
              </button>
            </div>
          </form>
          {/* Google OAuth */}
          <Link to="/sign-up" className="registerLink">
            Sign-Up Instead
          </Link>
        </main>
      </div>
    </>
  );
}

export default SignIn;

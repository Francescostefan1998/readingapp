import "./loginPage.css";
import { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
const LoginPage = () => {
  const [flipTheContainer, setFlipTheContainer] = useState("");
  const [flipTheContainerDown, setFlipTheContainerDown] = useState("");
  const [arrowRotate, setArrowRotate] = useState("");
  const [arrowTranslate, setArrowTranslate] = useState("");
  const handleFlipping = () => {
    if (flipTheContainer === "flipping-action") {
      setFlipTheContainer("");
      setFlipTheContainerDown("");
      setArrowRotate("arrow-rotate-back");
      setArrowTranslate("arrow-translate-back");
    } else {
      setFlipTheContainer("flipping-action");
      setFlipTheContainerDown("flipping-action-down");
      setArrowRotate("arrow-rotate-forward");
      setArrowTranslate("arrow-translate-forward");
    }
  };
  return (
    <div className="login-page">
      <div className="login-page-header-choosing">
        <div className="login-page-header-choosing-choice">
          <div className="login">Log in</div>
          <div className="signup">Sign up</div>
        </div>
        <div className="login-page-header-choosing-bar">
          <div
            className={`login-page-header-choosing-bar-absolute ${arrowTranslate}`}
          >
            <div className="login-page-header-choosing-bar-relative">
              <BsFillArrowLeftCircleFill className={`icon ${arrowRotate}`} />
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => handleFlipping()} className="button-flip">
        flip
      </button>
      <div className={`login-page-container ${flipTheContainer}`}>Sign Up</div>
      <div className={`login-page-container ${flipTheContainerDown}`}>
        <div className={`reverte-the-animation-to-contrast`}>
          <div className="section-inside-the-login-container"></div>
          <div className="section-inside-the-login-container"></div>
          <div className="section-inside-the-login-container"></div>
          <div
            className={`section-inside-the-login-container ${flipTheContainer}`}
          ></div>
          <div>Login</div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

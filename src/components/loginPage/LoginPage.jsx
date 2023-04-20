import "./loginPage.css";
import { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
const LoginPage = () => {
  const [flipTheContainer, setFlipTheContainer] = useState("");
  const [flipTheContainerDown, setFlipTheContainerDown] = useState("");
  const [arrowRotate, setArrowRotate] = useState("");
  const handleFlipping = () => {
    if (flipTheContainer === "flipping-action") {
      setFlipTheContainer("");
      setFlipTheContainerDown("");
      setArrowRotate("arrow-rotate-back");
    } else {
      setFlipTheContainer("flipping-action");
      setFlipTheContainerDown("flipping-action-down");
      setArrowRotate("arrow-rotate-forward");
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
          <BsFillArrowLeftCircleFill className={`icon ${arrowRotate}`} />
        </div>
      </div>
      <button onClick={() => handleFlipping()} className="button-flip">
        flip
      </button>
      <div className={`login-page-container ${flipTheContainer}`}>hello</div>
      <div className={`login-page-container ${flipTheContainerDown}`}>
        hello
      </div>
    </div>
  );
};

export default LoginPage;

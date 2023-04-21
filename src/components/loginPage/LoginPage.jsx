import "./loginPage.css";
import { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
const LoginPage = () => {
  const [flipTheContainer, setFlipTheContainer] = useState("");
  const [flipTheContainerDown, setFlipTheContainerDown] = useState("");
  const [shadow, setShadow] = useState("");
  const [displaynone, setDisplaynone] = useState("");
  const [flipTheContainerDownInside, setFlipTheContainerDownInside] =
    useState("");

  const [arrowRotate, setArrowRotate] = useState("");
  const [arrowTranslate, setArrowTranslate] = useState("");
  const handleFlipping = () => {
    if (flipTheContainer === "flipping-action") {
      setFlipTheContainer("");
      setShadow("");
      setFlipTheContainerDown("");
      setArrowRotate("arrow-rotate-back");
      setFlipTheContainerDownInside("");
      setDisplaynone("");
      setArrowTranslate("arrow-translate-back");
    } else {
      setFlipTheContainer("flipping-action");
      setShadow("section-inside-the-login-container-shadow");
      setFlipTheContainerDown("flipping-action-down");
      setArrowRotate("arrow-rotate-forward");

      setFlipTheContainerDownInside("flipping-action-down-inside");
      setArrowTranslate("arrow-translate-forward");
      setDisplaynone("");

      setTimeout(() => {
        setDisplaynone("display-none-login");

        setShadow("");
        setFlipTheContainerDownInside("");
      }, 760);
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
      <div
        className={`login-page-container ${flipTheContainerDown} second-main-login-container`}
      >
        <div className={`reverte-the-animation-to-contrast`}>
          <div className={`section-inside-the-login-container ${displaynone}`}>
            <div
              className={` ${flipTheContainerDownInside} ${shadow} first-child first`}
            ></div>
            <div
              className={` ${flipTheContainerDownInside} ${shadow} second-child second`}
            ></div>
          </div>
          <div className={`section-inside-the-login-container ${displaynone}`}>
            <div
              className={` ${flipTheContainerDownInside} ${shadow} first-child third`}
            ></div>
            <div
              className={` ${flipTheContainerDownInside} ${shadow} second-child fourth`}
            ></div>
          </div>
          <div className={`section-inside-the-login-container ${displaynone}`}>
            <div
              className={` ${flipTheContainerDownInside} ${shadow} first-child fifth`}
            ></div>
            <div
              className={` ${flipTheContainerDownInside} ${shadow} second-child sixth`}
            ></div>
          </div>
          <div className={`section-inside-the-login-container ${displaynone}`}>
            <div
              className={` ${flipTheContainerDownInside} ${shadow} first-child seventh`}
            ></div>
            <div
              className={` ${flipTheContainerDownInside} ${shadow} second-child eight`}
            ></div>
          </div>

          <div>Login</div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

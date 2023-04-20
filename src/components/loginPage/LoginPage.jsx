import "./loginPage.css";
import { useState } from "react";

const LoginPage = () => {
  const [flipTheContainer, setFlipTheContainer] = useState("");

  const handleFlipping = () => {
    if (flipTheContainer === "flipping-action") {
      setFlipTheContainer("");
    } else {
      setFlipTheContainer("flipping-action");
    }
  };
  return (
    <div className="login-page">
      <button onClick={() => handleFlipping()}>flip</button>
      <div className={`login-page-container ${flipTheContainer}`}>hello</div>
    </div>
  );
};

export default LoginPage;

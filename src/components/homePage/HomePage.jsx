import "./homePage.css";
import { GoThreeBars } from "react-icons/go";
import { useState } from "react";

const HomePage = () => {
  const [showSettings, setShowSettings] = useState(true);
  const [classTrigger, setClassTrigger] = useState("");
  return (
    <div className="homepage">
      <div className="inside-home">
        <div className="three-bar-container">
          <dir
            className="three-bar-container-absolute"
            onClick={() => setClassTrigger("setting-animation")}
          >
            <div className={`single-line-settings ${classTrigger} first`}></div>
            <div
              className={`single-line-settings ${classTrigger} second`}
            ></div>
            <div className={`single-line-settings ${classTrigger} third`}></div>
          </dir>
        </div>
        {showSettings && (
          <>
            <div>select article</div>
            <div>create article</div>
            <div>edit article</div>
            <div></div>
          </>
        )}
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
  );
};

export default HomePage;

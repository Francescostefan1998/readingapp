import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/loginPage/LoginPage";
import Animation from "./components/animation/Animation";
import HomePage from "./components/homePage/HomePage";
import ChatGpt from "./components/chatGpt/ChatGpt";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/chat" element={<ChatGpt />} />

          <Route path="/home" element={<HomePage />} />
          <Route path="/animation" element={<Animation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

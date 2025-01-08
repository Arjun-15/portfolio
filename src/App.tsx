import "./App.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Correct imports
import { Home } from "./pages/Portfolio/components/Home";
import { ThemeProvider } from "./context/portfolioContext/portfolioContext";
import { Calculator } from "./pages/Calculator/Calculator";
import { CryptoHome } from "./pages/CryptoTracker/CryptoHome";
import { ProjectDetail } from "./components/Project/ProjectDetail";
import React from "react";
import { Authentication } from "./pages/Authentication/Authetication";
import Profile from "./pages/Portfolio/Resume/Profile";

const App: React.FC = () => {
  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider>
          <Routes>
            <Route path="/portfolio" element={<Home />} />
            <Route path="/portfolio/resume" element={<Profile/>} />
            <Route path="/portfolio/Account" element={<Authentication />} />
            <Route
              path="/portfolio/project/:projectId"
              element={<ProjectDetail />}
            />
            <Route path="/portfolio/coin/*" element={<CryptoHome />} />
            {/* */}
            <Route
              path="/portfolio/cal"
              element={
                <>
                  <Calculator />
                </>
              }
            />
            {/* Add more routes here if needed */}
          </Routes>
        </ThemeProvider>
      </Provider>
    </Router>
  );
}

export default App;

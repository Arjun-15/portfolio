import "./App.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Correct imports
import { Home } from "./Portfolio/components/Home";
import { ThemeProvider } from "./context/portfolioContext/portfolioContext";
import { Calculator } from "./Calculator/Calculator";
import { CryptoHome } from "./CryptoTracker/CryptoHome";
import { ProjectDetail } from "./components/Project/ProjectDetail";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider>
          <Routes>
            <Route path="/portfolio" element={<Home />} />
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

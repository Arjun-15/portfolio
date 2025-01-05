import "./App.css";
import { CryptoNavbar } from "./components/Navbar/Navbar";
import { CryptoList } from "./components/CryptoList/CryptoList";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Correct imports
import { CoinDetail } from "./components/CoinDetail/CoinDetail";
import { Home } from "./Portfolio/components/Home";
import { ThemeProvider } from "./context/portfolioContext/portfolioContext";
import { Calculator } from "./Calculator/Calculator";

function App() {
  return (
    <Router>
      <Provider store={store}>
        
        <Routes >
          <Route path="/The-Arjun-Sharma/" element={<><CryptoNavbar /><CryptoList /></>} />
          <Route path="/The-Arjun-Sharma/detail/:coinId" element={<><CryptoNavbar /><CoinDetail /></>} />
          <Route path="/The-Arjun-Sharma/me" element={<ThemeProvider><Home/></ThemeProvider>} />
          <Route path="/The-Arjun-Sharma/cal" element={<><Calculator/></>} />
          {/* Add more routes here if needed */}
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;

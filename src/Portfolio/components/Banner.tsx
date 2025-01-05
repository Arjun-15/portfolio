import coverImage from "../../assets/Images/cloudDark.png";
import Image from "../../assets/Images/webdev.4d72dbba32efee3890cef9bcacce7aa7.svg";
import "../portfolio.css";
import { Designation } from "./Designation";
import { Connection } from "./Connection";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../context/portfolioContext/portfolioContext";

export const Banner = () => {
  const { theme } = useThemeContext()
  return (
    <div
      id="home"
      className="banner-container"
      style={{ backgroundImage: `url(${coverImage})` }}
    >
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-6 col-md-12 banner-content">
            <h1
              className={`display-4 banner-title ${
                theme === "dark" ? "text-light" : "text-light"
              }`}
            >
              Hi, I am Arjun
              <p className="banner-subtitle styles_typicalWrapper">
                <Designation />
              </p>
            </h1>
            <p
              className={`lead ${
                theme === "dark" ? "text-light" : "text-light"
              }`}
            >
              I am a <Designation />. I am currently looking for a job role as a{" "}
              <Designation />.
            </p>
            <Connection />
            <div className="mt-4">
              <Link to="#" className="resume-button">
                Resume
              </Link>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <img
              src={Image}
              alt="Development Illustration"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

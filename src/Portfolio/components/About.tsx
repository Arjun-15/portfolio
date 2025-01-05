import { Container } from "react-bootstrap";
import { useThemeContext } from "../../context/portfolioContext/portfolioContext";

export const About = () => {
  const { theme } = useThemeContext();
  return (
    <div id="about" className={theme === 'dark' ? "bg-dark text-light" : "bg-light text-dark"}>
      <Container className="pt-5 pb-5">
        <h2 className="display-4 text-center font-weight-bold">About Me</h2>
        <div>
          <h4 className="mt-4 h3 text-primary">A bit about me</h4>
          <p className="mt-4 h5 text-justify">
            I'm a dynamic and detail-oriented Software Developer with expertise in Node.js and React.js, complemented by a solid foundation in full-stack development. With over two years of professional experience, you have successfully contributed to building scalable and efficient applications, particularly focusing on modern JavaScript frameworks and TypeScript.
            <br /><br />
            Additionally, you completed a one-year intensive full-stack bootcamp, which helped refine your skills in backend development, frontend integration, and database management. Your ability to optimize system performance and work collaboratively makes you an asset for roles in web development and software engineering.
            <br /><br />
            I'm based in Noida, Uttar Pradesh, and open to new opportunities that allow you to leverage your technical skills and passion for problem-solving.
          </p>
        </div>
      </Container>
    </div>
  );
};

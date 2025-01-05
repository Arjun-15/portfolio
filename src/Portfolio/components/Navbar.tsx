import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useThemeContext } from "../../context/portfolioContext/portfolioContext";

export const NavbarMe: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("#home");
  const { theme, toggleTheme } = useThemeContext();

  const handleScroll = () => {
    const sections = document.querySelectorAll<HTMLElement>("section, .banner-container, #about, #skills, #service, #project, #contact");
    const scrollPos = window.scrollY + 57; // Adjust 57 based on the height of your navbar

    sections.forEach((section) => {
      const top = section?.offsetTop;
      const height = section?.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height && id) {
        setActiveLink(`#${id}`);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar expand="lg" fixed="top" data-bs-theme={theme} className="bg-body-tertiary" id="navbar-example3">
      <Container fluid>
        <Navbar.Brand>Arjun Sharma</Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="me-auto my-2 my-lg-0" />
          <Nav variant="pills" activeKey={activeLink} onSelect={(selectedKey) => selectedKey ? setActiveLink(selectedKey) : null}>
            <Nav.Item>
              <Nav.Link eventKey="#home" href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#about" href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#skills" href="#skills">Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#service" href="#service">Service</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#project" href="#project">Project</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#contact" href="#contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <img
                src={
                  theme === "dark"
                    ? "https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                    : "https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                }
                style={{
                  cursor: "pointer",
                  width: "2rem",
                  margin: "0.3rem 1rem",
                }}
                alt="Sun Icon"
                onClick={() => toggleTheme()}
              />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

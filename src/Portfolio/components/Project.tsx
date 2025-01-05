import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useThemeContext } from "../../context/portfolioContext/portfolioContext";

interface Project {
  image: string;
  title: string;
  description: string;
}

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const { theme } = useThemeContext();
  return (
    <div
      id="project"
      className={theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}
    >
      <Container className="pt-5 pb-5">
        <h2 className="text-center mb-4">Projects</h2>
        <h4 className="text-center mb-4 text-primary">What I Built</h4>
        <Row className="mt-4">
          {projects.map((project, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100 text-center p-3 skill-card">
                <Card.Img
                  variant="top"
                  src={project.image || "https://via.placeholder.com/300"}
                  alt={project.title}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button
                    variant="primary"
                    href="#"
                    className="mt-3"
                  >
                    Read more
                    <svg
                      className="ml-2"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

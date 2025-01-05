import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useThemeContext } from "../../context/portfolioContext/portfolioContext";

interface Skill {
  name: string;
  img: string;
}

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const {theme} = useThemeContext();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry:any) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (skillRefs.current) {
        skillRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  return (
    <div
      id="skills"
      className={theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}
    >
      <Container className="pt-5 pb-5">
        <h2 className="text-center mb-4">Technologies and Tools</h2>
        <p className="text-center mb-5">
          Using a combination of cutting-edge technologies and reliable open-source software, I build user-focused, performant apps and websites for smartphones, tablets, and desktops.
        </p>
        <Row className="justify-content-center">
          {skills.map((skill, index) => (
            <Col
              key={skill.name}
              xs={6}
              sm={4}
              md={3}
              lg={2}
              className="mb-4 d-flex justify-content-center"
            >
              <Card
                className="text-center p-3 skill-card"
                ref={(el:any) => (skillRefs.current[index] = el)}
              >
                <Card.Img
                  variant="top"
                  src={skill.img}
                  className="w-50 mx-auto"
                />
                <Card.Body>
                  <Card.Title className="text-md">{skill.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

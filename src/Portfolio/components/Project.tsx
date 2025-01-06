import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useThemeContext } from "../../context/portfolioContext/portfolioContext";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProjects,
  portfolioSelector,
} from "../../redux/reducers/portfolioReducer";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

export const MyProjects: React.FC = () => {
  const { projects } = useSelector(portfolioSelector);
  const { theme } = useThemeContext();
  type AppDispatch = ThunkDispatch<any, any, AnyAction>;
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProjects());
  }, []);
  // console.log(projects);
  if (!projects) return <h1>error</h1>;
  return (
    <div
      className={theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}
    >
      <Container className="pt-5 pb-5">
        <h2 className="text-center mb-4">Projects</h2>
        <h4 className="text-center mb-4 text-primary">What I Built</h4>
        <Row className="mt-4">
          {projects.map((project: any, index: number) => (
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
                  <Link to={project.url}>
                    <Button variant="primary" className="mt-3">
                      Read more {"   "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

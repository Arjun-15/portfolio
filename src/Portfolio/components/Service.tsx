import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useThemeContext } from "../../context/portfolioContext/portfolioContext";

interface ServiceProps {
  services: any;
}

export const Service: React.FC<ServiceProps> = ({  services }) => {
  const {theme} = useThemeContext();
  return (
    <div
      className={theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}
      id="service"
    >
      <Container className="pt-5 pb-5">
        <h2 className="text-center mb-4">Services</h2>
        <h4 className="text-center mb-4 text-primary">What I Provide</h4>
        <Row className="mt-4">
          {services &&
            services.map((service: any, index: number) => (
              <Col key={index} md={4} className="mb-4">
                <Card className="h-100 text-center p-3 service-card service-card-animate">
                  <Card.Img
                    variant="top"
                    src={service.image}
                    // style={{ width: "20%", margin: "auto" }}
                  />
                  <Card.Body>
                    <Card.Title>{service.text}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Connection } from "./Connection";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../context/portfolioContext/portfolioContext";

export const Contact: React.FC = () => {
  const { theme } = useThemeContext();
  console.log(theme);
  return (
    <div id="contact" className={theme === "dark" ? "bg-dark text-light pt-5 pb-5" : "bg-light text-dark pt-5 pb-5"}>
      <Container>
        <h2 className="text-center mb-4">Contact</h2>
        <h4 className="text-center mb-4 text-primary">Connect with me</h4>
        <p className="text-center text-muted mb-5">
          If you want to know more about me or my work, or if you would just
          like to say hello, send me a message. I'd love to hear from you.
        </p>
        <Row className="justify-content-between">
          {/* Contact Form */}
          <Col md={6} className="mb-5">
            <Form>
              <Form.Group controlId="formName" className="mb-4">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-4">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter your message" required />
              </Form.Group>
              <div className="d-flex justify-content-between">
                <a href="mailto:aakash.sh858791@gmail.com" className="text-decoration-underline">Send me an email directly</a>
                <Button variant="primary" type="submit">
                  <a href="mailto:aakash.sh858791@gmail.com" className="text-white text-decoration-none">Submit</a>
                </Button>
              </div>
            </Form>
          </Col>

          {/* Contact Information */}
          <Col md={5} className="text-md-right" style={{textAlign:'right'}}>
            <h4>Email</h4>
            <p>
              <Link to="mailto:as506347@gmail.com" className="text-primary">as506347@gmail.com</Link>
            </p>
            <h4>Address</h4>
            <p>
              Salarpur Khadhar, Bhangel, Noida
              <br />
              India
            </p>
            <h4>Social</h4>
            <div className="d-flex justify-content-center justify-content-md-end">
              <Connection />
            </div>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <p className="text-muted">Made with <span className="text-danger">&hearts;</span> by Arjun Sharma</p>
        </div>
      </Container>
    </div>
  );
};

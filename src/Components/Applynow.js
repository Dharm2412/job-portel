import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

export default function Applynow() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cv: null,
    coverLetter: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission
    console.log({ ...formData, jobId: id });
    // You can add code to upload the form data to your backend or Firebase
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="mb-4 text-center">Apply for Job ID: {id}</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="cv">
              <Form.Label>Upload CV</Form.Label>
              <Form.Control
                type="file"
                name="cv"
                onChange={handleFileChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="coverLetter">
              <Form.Label>Cover Letter</Form.Label>
              <Form.Control
                as="textarea"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                placeholder="Write your cover letter here"
                rows={5}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="additionalInfo">
              <Form.Label>Additional Information</Form.Label>
              <Form.Control
                as="textarea"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                placeholder="Any additional information"
                rows={3}
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit">
                Submit Application
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

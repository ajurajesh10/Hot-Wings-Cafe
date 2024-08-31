import React, { useState } from "react";
import "./LocationFeedback.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from 'axios';  // Ensure axios is imported

const LocationFeedback = () => {
  const [feedbackForm, setFeedbackForm] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    feedback: "",
  });

  const [formError, setFormError] = useState({});

  const validateForm = () => {
    let err = {};
    
    // Name Validation
    if (!feedbackForm.name || feedbackForm.name.trim().length < 3) {
      err.name = "* required at least 3 characters.";
    }
  
    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (feedbackForm.email && !emailPattern.test(feedbackForm.email)) {
      err.email = "Please enter a valid email address.";
    }
  
    // Mobile Number Validation
    const mobilePattern = /^[0-9]{10}$/;
    if (feedbackForm.mobilenumber && !mobilePattern.test(feedbackForm.mobilenumber)) {
      err.mobilenumber = "Mobile number should be 10 digits long.";
    }
  
    // Feedback Validation
    if (!feedbackForm.feedback || feedbackForm.feedback.trim().length < 10) {
      err.feedback = "* required at least 10 characters.";
    }
  
    setFormError({ ...err });
  
    return Object.keys(err).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
  
    const isValid = validateForm();
  
    if (isValid) {
      // Web3Forms API request
      const formData = new FormData();
      formData.append("name", feedbackForm.name);
      formData.append("email", feedbackForm.email);
      formData.append("mobilenumber", feedbackForm.mobilenumber);
      formData.append("feedback", feedbackForm.feedback);
      formData.append("access_key", "4726c00e-3555-4878-ad43-468a21b5b499");
  
      const object = Object.fromEntries(formData.entries());
      const json = JSON.stringify(object);
  
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        }).then((res) => res.json());
  
        if (res.success) {
          toast.success("Thanks for your feedback!", {
            position: "bottom-right",
            style: { bottom: "40px", width: "300px" },
          });
          setFeedbackForm({
            name: "",
            email: "",
            mobilenumber: "",
            feedback: "",
          });
        } else {
          toast.error("Web3Forms submission failed. Please try again later.", {
            position: "bottom-right",
            style: { bottom: "40px", width: "300px" },
          });
        }
      } catch (error) {
        toast.error("An error occurred while submitting your feedback to Web3Forms.", {
          position: "bottom-right",
          style: { bottom: "40px", width: "300px" },
        });
      }
  
      // Spreadsheet update request
      const feedback = {
        "Name": feedbackForm.name,
        "Email": feedbackForm.email,
        "MobileNumber": feedbackForm.mobilenumber,
        "Feedback": feedbackForm.feedback,
        "Date": new Date().toLocaleString(),
      };
  
      try {
        const response = await axios.post("https://sheetdb.io/api/v1/dt9mhr3rc6kk4", feedback);
  
        if (response.status === 201) {
          console.log("Spreadsheet update successful:", response.data);
          // Optionally, provide feedback to the user here
        } 
        else {
          console.error("Unexpected response status:", response.status);
        }
      } catch (error) {
        console.error("Error during spreadsheet update:", error.response ? error.response.data : error.message);
        toast.error("An error occurred while updating the spreadsheet.", {
          position: "bottom-right",
          style: { bottom: "40px", width: "300px" },
        });
      }
    } else {
      console.log("Validation failed:", formError);
    }
  };
  

  return (
    <div className="location-feedback py-3">
      <Container>
        <Row>
          <Col lg={6} className="location-section d-flex justify-content-center align-items-center">
            <div className="iframe-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.9524122840603!2d78.0486151736379!3d10.966964655653124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2fad757dd96d%3A0x68f6df35c3b8b8ae!2sHot%20wings!5e0!3m2!1sen!2sin!4v1724688657196!5m2!1sen!2sin"
                className="w-100 h-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
                title="Location of Hot Wings Restaurant on Google Maps"
              ></iframe>
            </div>
          </Col>

          <Col lg={6} className="feedback-section p-3 mt-5 mt-lg-0">
            <Container className="d-flex justify-content-center align-items-center">
              <Form onSubmit={onSubmit}>
                <Row>
                  <Col>
                    <h2 className="fst-italic">Your Feedback Helps Us Improve!</h2>
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Form.Group as={Row} className="mb-3" controlId="formName">
                    <Form.Label column sm="2">Name</Form.Label>
                    <Col sm="10">
                      <Form.Control
                        type="text"
                        placeholder="Enter your name..."
                        name="name"
                        value={feedbackForm.name}
                        onChange={(e) => {
                          setFeedbackForm({
                            ...feedbackForm,
                            name: e.target.value,
                          });
                        }}
                      />
                      <div className="form-error mt-1 text-danger">
                        {formError.name}
                      </div>
                    </Col>
                  </Form.Group>
                </Row>

                <Row className="mt-2">
                  <Form.Group as={Row} className="mb-3" controlId="formEmail">
                    <Form.Label column sm="2">Email</Form.Label>
                    <Col sm="10">
                      <Form.Control
                        type="email"
                        placeholder="Enter your email... (optional)"
                        name="email"
                        value={feedbackForm.email}
                        onChange={(e) => {
                          setFeedbackForm({
                            ...feedbackForm,
                            email: e.target.value,
                          });
                        }}
                      />
                      <div className="form-error mt-1 text-danger">
                        {formError.email}
                      </div>
                    </Col>
                  </Form.Group>
                </Row>

                <Row className="mt-2">
                  <Form.Group as={Row} className="mb-3" controlId="formMobile">
                    <Form.Label column sm="2">Mobile</Form.Label>
                    <Col sm="10">
                      <Form.Control
                        type="text"
                        placeholder="Enter your number... (optional)"
                        name="mobilenumber"
                        value={feedbackForm.mobilenumber}
                        onChange={(e) => {
                          setFeedbackForm({
                            ...feedbackForm,
                            mobilenumber: e.target.value,
                          });
                        }}
                      />
                      <div className="form-error mt-1 text-danger">
                        {formError.mobilenumber}
                      </div>
                    </Col>
                  </Form.Group>
                </Row>

                <Row className="mt-2">
                  <Form.Group as={Row} className="mb-3" controlId="formFeedback">
                    <Form.Label column sm="2">Feedback</Form.Label>
                    <Col sm="10">
                      <Form.Control
                        type="text"
                        placeholder="We Value Your Opinion!..."
                        name="feedback"
                        value={feedbackForm.feedback}
                        onChange={(e) => {
                          setFeedbackForm({
                            ...feedbackForm,
                            feedback: e.target.value,
                          });
                        }}
                      />
                      <div className="form-error mt-1 text-danger">
                        {formError.feedback}
                      </div>
                    </Col>
                  </Form.Group>
                </Row>

                <Row>
                  <Col>
                    <div className="text-center mt-3">
                      <button className="sendBtn" type="submit">Send</button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LocationFeedback;

import React, { useState } from "react";
import "./ServicesGetaQuote.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";

const ServicesGetaQuote = () => {

    const [menus, setMenus] = useState({
        name: "",
        email: "",
        mobilenumber: "",
        location: "",
        menus: "",
        persons:""
      });
    
      const [formError, setFormError] = useState({});
    
      const ValidationForm = () => {
        let err = {};
    
        // Name validation: ensure it's not empty and contains only alphabetic characters
        const namePattern = /^[a-zA-Z\s]+$/;
        if (menus.name.trim() === "") {
          err.name = "* Name is required";
        } else if (!namePattern.test(menus.name)) {
          err.name = "* Name can only contain letters and spaces";
        }
    
        // Email validation: ensure it's not empty and follows a proper email format
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (menus.email.trim() === "") {
          err.email = "* Email is required";
        } else if (!emailPattern.test(menus.email)) {
          err.email = "* Invalid email format";
        }
    
        // Mobile number validation: ensure it's not empty and is exactly 10 digits
        const mobilePattern = /^[0-9]{10}$/;
        if (menus.mobilenumber.trim() === "") {
          err.mobilenumber = "* Mobile number is required";
        } else if (!mobilePattern.test(menus.mobilenumber)) {
          err.mobilenumber = "* Invalid mobile number. It should be 10 digits.";
        }
    
        // Location validation: ensure it's not empty
        if (menus.location.trim() === "") {
          err.location = "* Location is required";
        }
    
        // Menus validation: ensure it's not empty
        if (menus.menus.trim() === "") {
          err.menus = "* Menus are required";
        }
    
                // Guest validation: ensure it's not empty
                if (menus.persons.trim() === "") {
                    err.persons = "* Guest details required";
                  }
          
        setFormError({ ...err });
    
        // Return true if there are no errors
        return Object.keys(err).length < 1;
      };
    
      const onSubmit = async (event) => {
        event.preventDefault();
    
        const isValid = ValidationForm();
    
        if (isValid) {
          const formData = new FormData();
          formData.append("name", menus.name);
          formData.append("email", menus.email);
          formData.append("mobilenumber", menus.mobilenumber);
          formData.append("location", menus.location);
          formData.append("menus", menus.menus);
          formData.append("persons", menus.persons);
          formData.append("access_key", "4726c00e-3555-4878-ad43-468a21b5b499");
    
          const object = Object.fromEntries(formData.entries());
          const json = JSON.stringify(object);
    
          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: json,
          }).then((res) => res.json());
    
          if (res.success) {
            console.log("Success", res);
            toast.success("Will contact soon!", {
              position: "bottom-right",
              style: { bottom: "40px", width: "300px" },
            });
            setMenus({
              name: "",
              email: "",
              mobilenumber: "",
              location: "",
              menus: "",
              persons:""
            });
          } else {
            toast.error("Submission Failed", {
              position: "bottom-right",
              style: { bottom: "40px", width: "300px" },
            });
          }
        }
      };

    return (
        <div className='services-get-a-quote'>
      <Container>
        <Row>
          <Col className="quotation-section p-3">
            <Container>
              <Row>
                <Col>
                  <h2 className="heading">Get A Quote</h2>
                </Col>
              </Row>

              <Row>
                <Col md={8} lg={6}>
                  <Form onSubmit={onSubmit}>
                    <Row className="mt-4">
                      <Form.Group as={Row} className="mb-3" controlId="formName">
                        <Form.Label column sm="2">
                          Name
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control
                            type="text"
                            placeholder="Enter your name..."
                            name="name"
                            value={menus.name}
                            onChange={(e) => {
                              setMenus({
                                ...menus,
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
                        <Form.Label column sm="2">
                          Email
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control
                            type="email"
                            placeholder="Enter your email..."
                            name="email"
                            value={menus.email}
                            onChange={(e) => {
                              setMenus({
                                ...menus,
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
                        <Form.Label column sm="2">
                          Mobile
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control
                            type="text"
                            placeholder="Enter your number... (optional)"
                            name="mobilenumber"
                            value={menus.mobilenumber}
                            onChange={(e) => {
                              setMenus({
                                ...menus,
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
                      <Form.Group as={Row} className="mb-3" controlId="formLocation">
                        <Form.Label column sm="2">
                          Location
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control
                            type="text"
                            placeholder="Which location are you contacting?"
                            name="location"
                            value={menus.location}
                            onChange={(e) => {
                              setMenus({
                                ...menus,
                                location: e.target.value,
                              });
                            }}
                          />
                          <div className="form-error mt-1 text-danger">
                            {formError.location}
                          </div>
                        </Col>
                      </Form.Group>
                    </Row>

                    <Row className="mt-2">
                      <Form.Group as={Row} className="mb-3" controlId="formMenus">
                        <Form.Label column sm="2">
                          Menus
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control
                            type="text"
                            placeholder="What menus are you looking for?"
                            name="menus"
                            value={menus.menus}
                            onChange={(e) => {
                              setMenus({
                                ...menus,
                                menus: e.target.value,
                              });
                            }}
                          />
                          <div className="form-error mt-1 text-danger">
                            {formError.menus}
                          </div>
                        </Col>
                      </Form.Group>
                    </Row>

                    <Row className="mt-2">
                      <Form.Group as={Row} className="mb-3" controlId="formEmail">
                        <Form.Label column sm="2">
                          Persons
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control
                            type="number"
                            placeholder="How many guests...(members)"
                            name="email"
                            value={menus.persons}
                            onChange={(e) => {
                              setMenus({
                                ...menus,
                                persons: e.target.value,
                              });
                            }}
                          />
                          <div className="form-error mt-1 text-danger">
                            {formError.persons}
                          </div>
                        </Col>
                      </Form.Group>
                    </Row>

                    <Row>
                      <Col>
                        <div className="text-center mt-3">
                          <button className="sendBtn" type="submit">
                            Get Quote
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
              </div>
    );
}

export default ServicesGetaQuote;

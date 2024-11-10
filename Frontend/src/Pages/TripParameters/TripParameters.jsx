import React from 'react';
import './TripParameter.css';
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus, faTag, faCalendarAlt, faClock, faRoad, faGasPump } from "@fortawesome/free-solid-svg-icons";
import Header from '../../components/common/Header';

const TripParameters = () => {
  return (
    <div> <Header />
      <div style={{ backgroundColor: "#f1f1f1", padding: "20px" }}>

        <Container fluid className='TripParameters'>
          <Row>
            <Col xs={2}>
            </Col>
            <Col xs={6} className='mt-3'>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faBus} className="me-2 text-primary" />
                    Trip Parameters
                  </Card.Title>

                  <hr className="mb-4 align-hr" />

                  {/* Form Section */}
                  <Form>
                    {/* Outbound Section */}
                    <Form.Group className="mt-4">
                      <h6 className="mb-1">1. Outbound</h6>

                      <Row className="mt-3">
                        <Col>
                          <Form.Label className="mb-1" style={{ fontSize: "14px" }}>Driver</Form.Label>
                          <Form.Control as="select">
                            <option disabled selected value="">
                              Select Driver
                            </option>
                            <option>Driver 1</option>
                            <option>Driver 2</option>
                            <option>Driver 3</option>
                          </Form.Control>
                        </Col>
                        <Col>
                          <Form.Label className="mb-1" style={{ fontSize: "14px" }}>Conductor</Form.Label>
                          <Form.Control as="select">
                            <option disabled selected value="">
                              Select Conductor
                            </option>
                            <option>Conductor 1</option>
                            <option>Conductor 2</option>
                            <option>Conductor 3</option>
                          </Form.Control>
                        </Col>
                      </Row>

                      {/* location  */}
                      <Row className="mt-3">
                        <Col>
                          <Form.Label className="mb-1" style={{ fontSize: "14px" }}>Start Location</Form.Label>
                          <Form.Control as="select">
                            <option disabled selected value="">
                              Select Location
                            </option>
                            <option>Location 1</option>
                            <option>Location 2</option>
                            <option>Location 3</option>
                          </Form.Control>
                        </Col>
                        <Col>
                          <Form.Label className="mb-1" style={{ fontSize: "14px" }}>End Location</Form.Label>
                          <Form.Control as="select">
                            <option disabled selected value="">
                              Select Location
                            </option>
                            <option>Location 1</option>
                            <option>Location 2</option>
                            <option>Location 3</option>
                          </Form.Control>
                        </Col>
                      </Row>

                      {/* Date and Time Selection */}
                      <Row className='mt-3'>
                        <Col>
                          <Form.Label className="mb-1" style={{ fontSize: "14px" }}>Start Date</Form.Label>
                          <Form.Control type="date" placeholder="Select Date" />
                        </Col>
                        <Col>
                          <Form.Label className="mb-1" style={{ fontSize: "14px" }}>End Date</Form.Label>
                          <Form.Control type="date" placeholder="Select Date" />
                        </Col>
                      </Row>
                      <Row className="mt-2">
                        <Col>
                          <Form.Label className="mb-1" style={{ fontSize: "14px" }}>Start Time</Form.Label>
                          <Form.Control as="select">
                            <option disabled selected value="">
                              Select
                            </option>
                            <option>5:00 PM</option>
                            <option>6:00 PM</option>
                            <option>7:00 PM</option>
                            <option>8:00 PM</option>
                          </Form.Control>
                        </Col>
                        <Col></Col>
                      </Row>
                    </Form.Group>

                    {/* Return Section */}
                    <Form.Group className="mt-4">
                      <h6 className="mb-1">2. Return</h6>

                      <Row className="mt-3">
                        <Col>
                          <Form.Label className="mb-1" style={{ fontSize: "14px" }}>Driver</Form.Label>
                          <Form.Control as="select">
                            <option disabled selected value="">
                              Select Driver
                            </option>
                            <option>Driver 1</option>
                            <option>Driver 2</option>
                            <option>Driver 3</option>
                          </Form.Control>
                        </Col>
                        <Col>
                          <Form.Label className="mb-1" style={{ fontSize: "14px" }}>Conductor</Form.Label>
                          <Form.Control as="select">
                            <option disabled selected value="">
                              Select Conductor
                            </option>
                            <option>Conductor 1</option>
                            <option>Conductor 2</option>
                            <option>Conductor 3</option>
                          </Form.Control>
                        </Col>
                      </Row>


                      {/* location  */}
                      <Row className="mt-3">
                        <Col>
                          <Form.Label className="mb-1" style={{ fontSize: "14px" }}>Start Location</Form.Label>
                          <Form.Control as="select">
                            <option disabled selected value="">
                              Select Location
                            </option>
                            <option>Location 1</option>
                            <option>Location 2</option>
                            <option>Location 3</option>
                          </Form.Control>
                        </Col>
                        <Col>
                          <Form.Label className="mb-1" style={{ fontSize: "14px" }}>End Location</Form.Label>
                          <Form.Control as="select">
                            <option disabled selected value="">
                              Select Location
                            </option>
                            <option>Location 1</option>
                            <option>Location 2</option>
                            <option>Location 3</option>
                          </Form.Control>
                        </Col>
                      </Row>

                      <Row className='mt-3'>
                        <Col>
                          <Form.Label className="mb-1" style={{ fontSize: "14px" }}>Start Date</Form.Label>
                          <Form.Control type="date" placeholder="Select Date" />
                        </Col>
                        <Col>
                          <Form.Label className="mb-1" style={{ fontSize: "14px" }}>End Date</Form.Label>
                          <Form.Control type="date" placeholder="Select Date" />
                        </Col>
                      </Row>
                      <Row className="mt-2">
                        <Col>
                          <Form.Label className="mb-1" style={{ fontSize: "14px" }}>Start Time</Form.Label>
                          <Form.Control as="select">
                            <option disabled selected value="">
                              Select
                            </option>
                            <option>5:00 PM</option>
                            <option>6:00 PM</option>
                            <option>7:00 PM</option>
                            <option>8:00 PM</option>
                          </Form.Control>
                        </Col>
                        <Col></Col>
                      </Row>
                    </Form.Group>

                    {/* Vehicle Section */}
                    <Form.Group className="mt-4">
                      <h6 className="mb-1">3. Vehicle</h6>
                      <Row className='mt-3'>
                        <Col>
                          <Form.Check type="radio" label="Super Deluxe" name="vehicleType" />
                          <Form.Check type="radio" label="Fast Passenger" name="vehicleType" />
                          <Form.Check type="radio" label="Super Fast" name="vehicleType" />
                        </Col>
                        <Col>
                          <Form.Label className="mb-1">Select Vehicle</Form.Label>
                          <Form.Control as="select">
                            <option disabled selected value="">
                              Select
                            </option>
                            <option>KSRTC</option>
                          </Form.Control>

                          <Form.Check type="checkbox" label="Only Available" className="mt-2" />
                        </Col>
                      </Row>
                    </Form.Group>

                    {/* Action Buttons */}
                    <Row className="mt-4">
                      <Col>
                        <Button variant="outline-secondary" className="w-100">Cancel</Button>
                      </Col>
                      <Col>
                        <Button variant="success" className="w-100">Calculate</Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Trip Cost Sidebar */}
            <Col xs={3} className='mt-3'>
              <Card className="trip-cost-card shadow-sm border-0 p-0">
                <Card.Body>
                  <Card.Title className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faTag} className="me-2 text-secondary" />
                    <span>Trip Cost</span>
                  </Card.Title>

                  <hr className="mb-4 align-hr" />

                  <p><FontAwesomeIcon icon={faCalendarAlt} /> <strong>Dates:</strong> May 14, 2020 5:00PM - May 17, 2020 1:00PM</p>
                  <p><FontAwesomeIcon icon={faClock} /> <strong>Trip Time:</strong> 4d 3h</p>
                  <p><FontAwesomeIcon icon={faRoad} /> <strong>Distance:</strong> 4,239mi</p>
                  <p><FontAwesomeIcon icon={faGasPump} /> <strong>Fuel Consumption:</strong> 6.15 MPG</p>

                  <hr />
                  <h5 className="text-muted">Approx. Cost <span className="text-success total-cost ms-5">INR: 1,241.14</span></h5>

                  <Row className="mt-2">
                    <Col>
                      <Button variant="outline-secondary" className="w-100">Cancel</Button>
                    </Col>
                    <Col>
                      <Button variant="success" className="w-100">Schedule Trip</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={1}></Col>
          </Row>
        </Container>
      </div></div>
  );
};

export default TripParameters;

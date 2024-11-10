import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus, faCreditCard, faXmark } from '@fortawesome/free-solid-svg-icons'
import Header from '../../components/common/Header'
import NavSidebar from '../../components/common/Sidebar/NavSidebar'

const AddConductor = () => {
  return (
    <>
      <Row>
        <Header />
        <Col md={2}>
          <NavSidebar />
        </Col>
        <Col md={9}>
          <div >
            <Row>
              <Col md={2}></Col>
              <Col md={12} >
                <h6 className='fw-bold'>Add Conductors</h6>
                <hr className='vehicle-horizontal-line' />
                <div className='m-3 p-2' style={{ backgroundColor: 'white' }}>
                  <h6><FontAwesomeIcon icon={faBus} />Conductor Details</h6>
                  <hr className='vehicle-horizontal-line' />
                  <Form>
                    {/* --------------------- section 1 ---------------------*/}
                    <Form.Group className="my-4">
                      <h6 className='fw-bold'>1.Personal Informations</h6>
                      <Row className="mt-2">
                        <Col>
                          <Form.Label className="mb-1" style={{ fontSize: "14px" }}>First Name </Form.Label>
                          <Form.Control type="text" name="firstName" placeholder='Enter First Name' />
                        </Col>
                        <Col>
                          <Form.Label className="mb-1" style={{ fontSize: "14px" }}> Last Name</Form.Label>
                          <Form.Control type="text" name="lastName" placeholder='Enter Last Name' />
                        </Col>
                      </Row>
                      <Row className="mt-2">
                        <Col>
                          <Form.Label className="mb-1" style={{ fontSize: "14px" }}>Gender</Form.Label>
                          <Form.Control as="select">
                            <option disabled selected value="">
                              Select Gender
                            </option>
                            <option>Male</option>
                            <option>Female</option>
                          </Form.Control>
                        </Col>
                        <Col>
                          <Form.Label className="mb-1" style={{ fontSize: "14px" }}>Start Date</Form.Label>
                          <Form.Control type="date" placeholder="Select Date" />
                        </Col>
                      </Row>
                      {/* ----------------section 2---------------- */}
                      <Row className='mt-2'>
                        <h6 className='fw-bold mt-2'> 2.Contact Informations</h6>
                        <Col>
                          <Form.Label className="mb-1" style={{ fontSize: "14px" }}>Mobile No </Form.Label>
                          <Form.Control type="text" name="mobileNo" />
                        </Col>
                        <Col>
                        </Col>
                      </Row>
                      <Row className="mt-2">
                        <Col>
                          <Form.Label className="mb-1" style={{ fontSize: "14px" }}>Emergency Contact No </Form.Label>
                          <Form.Control type="text" name="emergencyNo" />
                        </Col>
                        <Col>
                          <Form.Label className="mb-1" style={{ fontSize: "14px" }}>License No </Form.Label>
                          <Form.Control type="text" name="licenseNo" />
                        </Col>
                      </Row>
                      {/* ---------------- section 3-------------------- */}
                      <Row className='mt-2'>
                        <h6 className='fw-bold mt-2'>3.Vehicle</h6>
                        <Col>
                          <Form.Label className="mb-1"> Vehicle Type</Form.Label>
                          <Form.Check type="radio" label="Super Deluxe" name="vehicleType" />
                          <Form.Check type="radio" label="Fast Passenger" name="vehicleType" />
                          <Form.Check type="radio" label="Super Fast" name="vehicleType" />
                        </Col>
                        <Col>
                          <Form.Label className="mb-1" style={{ fontSize: "14px" }}>Vehicle No Plate </Form.Label>
                          <Form.Control type="text" name="firstName" />
                          <Form.Check type="checkbox" label="Only Available" className="mt-2" />
                        </Col>
                      </Row>
                    </Form.Group>
                    <hr className='vehicle-horizontal-line' />
                    <div className="mt-4 text-end">
                      <Button className='btn tbn rounded me-2' style={{ backgroundColor: '#f8f9fa', color: 'black' }}><FontAwesomeIcon className='me-2' icon={faXmark} />Cancel</Button>
                      <Button className='btn tbn rounded ' style={{ backgroundColor: '#0d8a72' }}><FontAwesomeIcon className='me-2' icon={faCreditCard} />Calculate</Button>
                    </div>
                  </Form>
                </div>
              </Col>
              <Col md={1}>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={1}></Col>
      </Row>

    </>
  )
}

export default AddConductor


import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCog, faTrash, faCalendar, faBus, faClock, faUser, faEllipsisV
} from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/common/Header';
import { useNavigate } from 'react-router-dom';

export default function ScheduleTrip() {
  // Initial trip data
  const tripData = [
    { id: '#786473', vehicle: 'RT 2237', driver: 'John Doe', startDate: '2020-01-01T17:00', endDate: '2020-01-02T18:30', duration: '1d 1h 30 min' },
    { id: '#786474', vehicle: 'RT 2238', driver: 'Jane Doe', startDate: '2020-02-01T12:00', endDate: '2020-02-02T14:30', duration: '1d 2h 30 min' },
    { id: '#786475', vehicle: 'RT 2239', driver: 'John Smith', startDate: '2020-03-01T08:00', endDate: '2020-03-02T10:00', duration: '1d 2h' },
    // Add more data as needed
  ];

  const [vehicleFilter, setVehicleFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const navigate = useNavigate();
  const handleScheduleButton = () => {
    navigate("/add-trip")
  }
  // Filtered trips based on vehicle number and date
  const filteredTrips = tripData.filter(trip => {
    const matchesVehicle = trip.vehicle.toLowerCase().includes(vehicleFilter.toLowerCase());
    const matchesDate = dateFilter ? trip.startDate.startsWith(dateFilter) : true;
    return matchesVehicle && matchesDate;
  });

  return (
    <div>
      <Header />
      <Container fluid className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
        <Row>
          <Col md={2}></Col>

          <Col md={9}>
            <Row className="mb-4">
              <Col className="d-flex justify-content-between align-items-center">
                <h1 className="h5 mb-0">Schedule Trip</h1>
                <Button variant="success" onClick={handleScheduleButton} className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon icon={faCalendar} width="18" height="18" />
                  <span>SCHEDULE TRIP</span>
                </Button>
              </Col>
            </Row>

            {/* Filters */}
            <Row className="mb-3 align-items-center">
              <Col md={4}>
                <Form.Control
                  type="text"
                  placeholder="Filter by Vehicle"
                  value={vehicleFilter}
                  onChange={(e) => setVehicleFilter(e.target.value)}
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  type="date"
                  placeholder="Enter Date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                />
              </Col>
              <Col md={4} className="text-end">
                <Button variant="link" className="text-muted" onClick={() => { setVehicleFilter(''); setDateFilter(''); }}>CLEAR</Button>
              </Col>
            </Row>

            <hr className="my-3" />

            {/* Toolbar with count of items */}
            <Row className="align-items-center mb-3">
              <Col xs="auto">
                <FontAwesomeIcon icon={faCog} className="text-muted me-3" />
                <FontAwesomeIcon icon={faTrash} className="text-muted" />
              </Col>
              <Col className="text-end">
                {/* Displaying the count of filtered items */}
                <span>Items in the table:</span>
                <span className='text-info ms-2 me-5'>{filteredTrips.length}</span>
              </Col>
            </Row>

            {/* Table */}
            <Row>
              <Col>
                <Table hover responsive className="align-middle" style={{ borderSpacing: '0 10px' }}>
                  <thead>
                    <tr className="bg-light">
                      <th></th>
                      <th>TRIP</th>
                      <th>VEHICLE</th>
                      <th>DRIVER</th>
                      <th>START DATE</th>
                      <th>END DATE</th>
                      <th>DURATION</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredTrips.map(trip => (
                      <tr key={trip.id} className="bg-white">
                        <td><Form.Check type="checkbox" /></td>
                        <td>{trip.id} <span className="text-primary ms-1">SCHEDULED</span></td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <FontAwesomeIcon icon={faBus} className="text-muted me-2" />
                            <div>
                              <div>{trip.vehicle}</div>
                              <small className="text-muted">BUS</small>
                            </div>
                          </div>
                        </td>
                        <td>
                          <FontAwesomeIcon icon={faUser} className="text-muted me-2" />
                          {trip.driver}
                        </td>
                        <td>{new Date(trip.startDate).toLocaleDateString()}<br /><small className="text-muted">{new Date(trip.startDate).toLocaleTimeString()}</small></td>
                        <td>{new Date(trip.endDate).toLocaleDateString()}<br /><small className="text-muted">{new Date(trip.endDate).toLocaleTimeString()}</small></td>
                        <td>
                          <FontAwesomeIcon icon={faClock} className="text-muted me-2" />
                          {trip.duration}
                        </td>
                        <td>
                          <Button variant="link" className="p-0">
                            <FontAwesomeIcon icon={faEllipsisV} />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </Table>
              </Col>
            </Row>
          </Col>

          <Col md={1}></Col>
        </Row>
      </Container>
    </div>
  );
}

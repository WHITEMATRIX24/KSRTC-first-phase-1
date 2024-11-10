import { faBan, faChevronLeft, faChevronRight, faCircleCheck, faEllipsisVertical, faGear, faLocationDot, faPlus, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Header from '../../components/common/Header';
import NavSidebar from '../../components/common/Sidebar/NavSidebar';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Drivers = () => {
  const [activeStatus, setActiveStatus] = useState('ALL STATUSES');
  const [employmentType, setEmploymentType] = useState('Employment Type');
  const [status, setStatus] = useState('Status');


  const driversData = [
    { id: 1, name: 'John V', type: 'Permanent', status: 'AVAILABLE', salary: 80000, phoneNumber: '9876543210' },
    { id: 2, name: 'Abdul V', type: 'Temporary', status: 'ON LEAVE', salary: 85000, phoneNumber: '9876543210' },
    { id: 3, name: 'Vishnu V', type: 'Permanent', status: 'ON LEAVE', salary: 80000, phoneNumber: '9876543210' },
    { id: 4, name: 'John V', type: 'Permanent', status: 'ON LEAVE', salary: 86000, phoneNumber: '9876543210' },
    { id: 5, name: 'Abdul V', type: 'Temporary', status: 'AVAILABLE', salary: 82000, phoneNumber: '9876543210' },
    { id: 6, name: 'Vishnu V', type: 'Temporary', status: 'AVAILABLE', salary: 60000, phoneNumber: '9876543210' }
  ];

  const filterDrivers = () => {
    return driversData.filter(driver => {
      const statusMatch = activeStatus === 'ALL STATUSES' || driver.status === activeStatus;
      const typeMatch = employmentType === 'Employment Type' || driver.type === employmentType;
      const specificStatusMatch = status === 'Status' || driver.status === status.toUpperCase();
      return statusMatch && typeMatch && specificStatusMatch;
    });
  };
  const navigate = useNavigate();
  const filteredDrivers = filterDrivers();
  const handleAddDriver = () => {
    navigate("/add-driver")
  }

  return (
    <>
      <div className="row">
        <Header />
        <div className="col-md-2">
          <NavSidebar />
        </div>
        <div className="col-md-9">
          <div className='d-flex justify-content-between my-1 mx-3'>
            <h4>Drivers</h4>

            <button className='btn btn-success' onClick={handleAddDriver} style={{ backgroundColor: '#0d8a72', color: 'white' }}> <FontAwesomeIcon className='me-2' icon={faPlus} />ADD DRIVERS</button>

          </div>

          <hr className='vehicle-horizontal-line' />

          <div className='d-flex'>


            {['ALL STATUSES', 'LEAVE STATUS', 'PERMANENT', 'TEMPORARY'].map(status => (
              <button
                key={status}
                className="btn me-md-2"
                style={{ borderBottom: activeStatus === status ? '3px solid green' : 'none' }}
                onClick={() => setActiveStatus(status)}
              >
                {status}
              </button>
            ))}

          </div>

          <hr className='vehicle-horizontal-line' />

          <div className='container-fluid'>

            {/* filter */}
            <div className='d-flex justify-content-between py-2'>
              <div>
                <div className="btn-group">
                  <button type="button" className="btn btn-light border-dark border-1 dropdown-toggle rounded px-4 me-2" data-bs-toggle="dropdown" aria-expanded="false" >Driver Name</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">John</a></li>
                    <li><a className="dropdown-item" href="#">Abdul</a></li>
                  </ul>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-light border-dark border-1 dropdown-toggle rounded px-4 me-2" data-bs-toggle="dropdown" aria-expanded="false" >{employmentType}</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" onClick={() => setEmploymentType('Employment Type')}>Employment Type</a></li>
                    <li><a className="dropdown-item" onClick={() => setEmploymentType('Permanent')}>Permanent</a></li>
                    <li><a className="dropdown-item" onClick={() => setEmploymentType('Temporary')}>Temporary</a></li>

                  </ul>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-light border-dark border-1 dropdown-toggle rounded px-4" data-bs-toggle="dropdown" aria-expanded="false" >{status}</button>

                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" onClick={() => setStatus('Status')}>Status</a></li>
                    <li><a className="dropdown-item" onClick={() => setStatus('Available')}>Available</a></li>
                    <li><a className="dropdown-item" onClick={() => setStatus('On Leave')}>On Leave</a></li>

                  </ul>
                </div>
              </div>
              <div>
                <button className="btn btn-light border-dark rounded" onClick={() => {
                  setActiveStatus('ALL STATUSES');
                  setEmploymentType('Employment Type');
                  setStatus('Status');
                }}> <FontAwesomeIcon className='me-2' icon={faXmark} />CLEAR</button>
              </div>
            </div>

            <hr className='vehicle-horizontal-line' />
            <div className="d-flex justify-content-between align-items-center mt-3">
              {/* Left - gear and trash icons */}
              <div className="d-flex gap-5 ms-5">
                <FontAwesomeIcon icon={faGear} />
                <FontAwesomeIcon icon={faTrashCan} />
              </div>

              {/* Right - Items on page, dropdown, pagination */}
              <div className="d-flex gap-4 align-items-center me-5">
                <p className="mb-0">Items on page</p>
                <div className="btn-group">
                  <button type="button" className="btn btn-light dropdown-toggle rounded px-4" data-bs-toggle="dropdown" aria-expanded="false" >10</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">20</a></li>
                    <li><a className="dropdown-item" href="#">30</a></li>
                  </ul>
                </div>
                <FontAwesomeIcon icon={faChevronLeft} />
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </div>

            <div>
              <table className="vehicle-table table w-100">
                <thead>
                  <tr>
                    <th> {/*checkbox */}</th>
                    <th> {/*image */}</th>
                    <th>DRIVER NAME</th>
                    <th>EMPLOYMENT TYPE</th>
                    <th>STATUS</th>
                    <th>SALARY</th>
                    <th>PHONE NUMBER</th>
                    <th> {/*for map */} </th>
                    <th> {/*for delete option */}</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDrivers.map(driver => (
                    <tr key={driver.id}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        <img src="https://english.mathrubhumi.com/image/contentid/policy:1.5293129:1644566410/image.jpg?$p=0f6e831&f=4x3&w=1080&q=0.8" alt="" height={'50px'} width={'50px'} />
                      </td>
                      <td>
                        <strong>{driver.name}</strong>
                        <br />
                        <span>JN12345HJKDF</span>
                      </td>

                      <td>
                        {driver.type}
                      </td>

                      <td>
                        <div className='bg-light p-2 rounded' style={{ border: '1px solid black', borderRadius: '8px', display: 'inline-block' }}>
                          {driver.status === 'AVAILABLE' ?
                            (
                              <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#189be3' }} />
                            )
                            :
                            (
                              <FontAwesomeIcon icon={faBan} style={{ color: '#db5c4d' }} />
                            )
                          }


                          <span className="ms-2">{driver.status}</span>
                        </div>
                      </td>

                      <td>
                        <div className='bg-light p-2' style={{ border: '1px solid black', borderRadius: '8px', display: 'inline-block' }}>
                          ₹ INR {driver.salary}
                        </div>
                      </td>

                      <td>
                        {driver.phoneNumber}
                      </td>

                      <td>
                        <button className='btn-primary rounded p-1 px-3' style={{ border: 'none' }}><FontAwesomeIcon className='me-2' icon={faLocationDot} />Live View</button>
                      </td>

                      <td>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </td>

                    </tr>
                  ))}

                </tbody>
              </table>

            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  )
}

export default Drivers
import React, { useEffect, useState } from 'react'
import './vehicles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faChevronLeft, faChevronRight, faCircleCheck, faEllipsisVertical, faGear, faLocationArrow, faLocationDot, faPlus, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/common/Header';
import NavSidebar from '../../components/common/Sidebar/NavSidebar';
import { getAllVehicles } from '../../services/allAPI';
import { useNavigate } from 'react-router-dom';

const Vehicles = () => {
    const [vehiclesData, setVehiclesData] = useState([]);
    const [activeStatus, setActiveStatus] = useState('ALL STATUSES');
    const [vehicleType, setVehicleType] = useState('All Types');
    const navigate = useNavigate();

    // const vehiclesData = [
    //     { id: 1, name: 'CR 1565', type: 'Super Deluxe', status: 'AVAILABLE', healthRate: 65, criticalErrors: true },
    //     { id: 2, name: 'FR 2345', type: 'Fast Passenger', status: 'EN ROUTE', healthRate: 85, criticalErrors: false },
    //     { id: 3, name: 'GR 3456', type: 'Super Fast', status: 'OUT OF SERVICE', healthRate: 50, criticalErrors: true },
    //     { id: 4, name: 'CR 1565', type: 'Super Deluxe', status: 'AVAILABLE', healthRate: 32, criticalErrors: true },
    //     { id: 5, name: 'FR 2345', type: 'Fast Passenger', status: 'EN ROUTE', healthRate: 85, criticalErrors: false },
    //     { id: 6, name: 'GR 3456', type: 'Super Fast', status: 'AVAILABLE', healthRate: 50, criticalErrors: false }
    // ];



    const getAllVehiclesData = async () => {
        try {
            const allVehicles = await getAllVehicles();
            console.log(allVehicles.data);

            if (allVehicles.status == 200) {
                setVehiclesData(allVehicles.data);
            } else {
                console.log("Something went wrong");
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAllVehiclesData();
    }, [])
    const handleAddVehicle = () => {
        navigate('/add-vehicle')
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
                        <h4>Vehicles</h4>
                        <button className='btn' onClick={handleAddVehicle} style={{ backgroundColor: '#0d8a72', color: 'white' }}> <FontAwesomeIcon className='me-2' icon={faPlus} />ADD VEHICLE</button>
                    </div>

                    <hr className='vehicle-horizontal-line' />

                    <div className='d-flex'>
                        {['ALL STATUSES', 'EN ROUTE', 'AVAILABLE', 'OUT OF SERVICE'].map(status => (
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
                                    <button type="button" className="btn btn-light border-dark border-1 dropdown-toggle rounded px-4 me-2" data-bs-toggle="dropdown" aria-expanded="false" >All Vehicles</button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">All Vehicles</a></li>
                                        <li><a className="dropdown-item" href="#">All Vehicles</a></li>
                                    </ul>
                                </div>
                                <div className="btn-group">
                                    <button className="btn btn-light border-dark dropdown-toggle px-4 me-2" data-bs-toggle="dropdown">
                                        {vehicleType}
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" onClick={() => setVehicleType('All Types')}>All Types</a></li>
                                        <li><a className="dropdown-item" onClick={() => setVehicleType('deluxe')}>Super Deluxe</a></li>
                                        <li><a className="dropdown-item" onClick={() => setVehicleType('super')}>Fast Passenger</a></li>
                                        <li><a className="dropdown-item" onClick={() => setVehicleType('superfast')}>Super Fast</a></li>
                                    </ul>
                                </div>

                            </div>
                            <div>
                                <button className="btn btn-light border-dark rounded" onClick={() => {
                                    setActiveStatus('ALL STATUSES');
                                    setVehicleType('All Types');

                                }}>
                                    <FontAwesomeIcon className='me-2' icon={faXmark} />CLEAR
                                </button>
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

                        {/* table */}
                        <div>
                            <table className="vehicle-table table w-100 ">
                                <thead className='vehicle-thead '>
                                    <tr>
                                        <th> {/*checkbox */}</th>
                                        <th> {/*image */}</th>
                                        <th>VEHICLE</th>
                                        <th>TYPE</th>
                                        <th>STATUS</th>

                                        <th> {/*update */} </th>
                                        <th> {/*for delete option */}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {vehiclesData.length>0 && vehiclesData.map(vehicle => (
                                        <tr key={vehicle.id}> */}
                                    {vehiclesData
                                        .filter(vehicle => vehicleType === 'All Types' || vehicle.transport_type === vehicleType)
                                        .map(vehicle => (
                                            <tr key={vehicle.id}>
                                                <td>
                                                    <input type="checkbox" />
                                                </td>

                                                <td>
                                                    <img src="https://english.mathrubhumi.com/image/contentid/policy:1.5293129:1644566410/image.jpg?$p=0f6e831&f=4x3&w=1080&q=0.8" alt="" height={'50px'} width={'50px'} />
                                                </td>

                                                <td>
                                                    <strong>{vehicle.number}</strong>
                                                    <br />
                                                    <span>{vehicle.model}</span>
                                                </td>

                                                <td>
                                                    {vehicle.transport_type}
                                                </td>

                                                <td>
                                                    <div className='bg-light p-2 rounded' style={{ border: '1px solid black', borderRadius: '8px', display: 'inline-block' }}>
                                                        {vehicle.status === 'available' && (
                                                            <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#189be3' }} />

                                                        )}
                                                        {vehicle.status === 'enroute' && (
                                                            <FontAwesomeIcon icon={faLocationArrow} style={{ color: '#0d8a72' }} />
                                                        )}
                                                        {vehicle.status === 'out_of_services' && (
                                                            <FontAwesomeIcon icon={faBan} style={{ color: '#db5c4d' }} />
                                                        )}
                                                        <span className="ms-2">{vehicle.status}</span>
                                                    </div>
                                                </td>



                                                <td>
                                                    <button className='btn-primary rounded p-1 px-3'>Update Status</button>
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

export default Vehicles


import { faBolt, faCalendarDays, faCarSide, faCircleCheck, faCircleInfo, faClock, faLocationDot, faMoon, faTriangleExclamation, faTruck, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'


function TripOverviewComponent() {
    let dateToday = new Date()
    dateToday = dateToday.toISOString().split('T')[0];
    
    const [datePick,setDatePick]=useState(dateToday)
    const [chosenTrip,setChosenTrip]=useState(0)
    const [tripStatuses]=useState(["LIVE", "COMPLETED", "WITH DELAY", "FAILED", "UPCOMING"])
    const [trips,setTrips]=useState([])
    const [filteredTrips,setFilteredTrips]=useState([])
    const [trip,setTrip]=useState(filteredTrips[chosenTrip])

    useEffect(()=>{
        setTrips([
            {
                id:"11111",
                bus:"AT 1111",
                driver:"John Doe",
                date:"2024-11-08",
                status:0,
                departure:{
                    location:"1961 Chain Bridge rd, Tyson",
                    time:"6/17/20 2:00pm"
                },
                arrival:{
                    location:"1961 Chain Bridge rd, Tyson",
                    time:"6/17/20 2:00pm"
                },
                distanceTraveled:"1111km",
                duration:"11hr 30m",
                idleTime:"2h",
                averageFuel:"3km/L",
                averageSpeed:"40km/hr",
                stops:[
                    {
                        stop:"DEPARTURE",
                        type:0,
                        text:"",
                        location:"1961 Chain Bridge rd, Tyson",
                        time:"6/17/20 2:00pm"
                    },
                    {
                        stop:"STOP",
                        type:1,
                        text:"info text",
                        location:"1961 Chain Bridge rd, Tyson",
                        time:"6/17/20 2:00pm"
                    },
                    {
                        stop:"STOP",
                        type:2,
                        text:"warning text",
                        location:"1961 Chain Bridge rd, Tyson",
                        time:"6/17/20 2:00pm"
                    },
                    {
                        stop:"STOP",
                        type:3,
                        text:"error text",
                        location:"1961 Chain Bridge rd, Tyson",
                        time:"6/17/20 2:00pm"
                    },
                    {
                        stop:"ARRIVAL",
                        type:0,
                        text:"",
                        location:"1961 Chain Bridge rd, Tyson",
                        time:"6/17/20 2:00pm"
                    },
                ]
            },
            {
                id:"2222",
                bus:"AT 2222",
                driver:"Manu",
                date:"2024-11-08",
                status:1,
                departure:{
                    location:"1961 Chain Bridge rd, Tyson",
                    time:"6/17/20 2:00pm"
                },
                arrival:{
                    location:"1961 Chain Bridge rd, Tyson",
                    time:"6/17/20 2:00pm"
                },
                distanceTraveled:"999km",
                duration:"10hr 40m",
                idleTime:"1h",
                averageFuel:"5km/L",
                averageSpeed:"35km/hr",
                stops:[
                    {
                        stop:"DEPARTURE",
                        type:0,
                        text:"",
                        location:"1961 Chain Bridge rd, Tyson",
                        time:"6/17/20 2:00pm"
                    },
                    {
                        stop:"STOP",
                        type:3,
                        text:"error text",
                        location:"1961 Chain Bridge rd, Tyson",
                        time:"6/17/20 2:00pm"
                    },
                    {
                        stop:"STOP",
                        type:1,
                        text:"info text",
                        location:"1961 Chain Bridge rd, Tyson",
                        time:"6/17/20 2:00pm"
                    },
                    {
                        stop:"STOP",
                        type:2,
                        text:"warning text",
                        location:"1961 Chain Bridge rd, Tyson",
                        time:"6/17/20 2:00pm"
                    },
                    {
                        stop:"ARRIVAL",
                        type:0,
                        text:"",
                        location:"1961 Chain Bridge rd, Tyson",
                        time:"6/17/20 2:00pm"
                    }
                ]
            },
            {
                id:"3333",
                bus:"AT 3333",
                driver:"Manu",
                date:"2024-11-08",
                status:2,
                departure:{
                    location:"1961 Chain Bridge rd, Tyson",
                    time:"6/17/20 2:00pm"
                },
                arrival:{
                    location:"1961 Chain Bridge rd, Tyson",
                    time:"6/17/20 2:00pm"
                },
                distanceTraveled:"999km",
                duration:"10hr 40m",
                idleTime:"1h",
                averageFuel:"3km/L",
                averageSpeed:"40km/hr",
                stops:[
                    {
                        stop:"DEPARTURE",
                        type:0,
                        text:"",
                        location:"1961 Chain Bridge rd, Tyson",
                        time:"6/17/20 2:00pm"
                    },
                    {
                        stop:"STOP",
                        type:3,
                        text:"error text",
                        location:"1961 Chain Bridge rd, Tyson",
                        time:"6/17/20 2:00pm"
                    },
                    {
                        stop:"STOP",
                        type:1,
                        text:"info text",
                        location:"1961 Chain Bridge rd, Tyson",
                        time:"6/17/20 2:00pm"
                    },
                    {
                        stop:"STOP",
                        type:2,
                        text:"warning text",
                        location:"1961 Chain Bridge rd, Tyson",
                        time:"6/17/20 2:00pm"
                    },
                    {
                        stop:"ARRIVAL",
                        type:0,
                        text:"",
                        location:"1961 Chain Bridge rd, Tyson",
                        time:"6/17/20 2:00pm"
                    }
                ]
            },
            {
                id:"4444",
                bus:"AT 4444",
                driver:"Manu",
                date:"2024-11-08",
                status:3,
                departure:{
                    location:"1961 Chain Bridge rd, Tyson",
                    time:"6/17/20 2:00pm"
                },
                arrival:{
                    location:"1961 Chain Bridge rd, Tyson",
                    time:"6/17/20 2:00pm"
                },
                distanceTraveled:"999km",
                duration:"10hr 40m",
                idleTime:"1h",
                averageFuel:"3km/L",
                averageSpeed:"40km/hr",
                stops:[
                    {
                        stop:"DEPARTURE",
                        type:0,
                        text:"",
                        location:"1961 Chain Bridge rd, Tyson",
                        time:"6/17/20 2:00pm"
                    },
                    {
                        stop:"STOP",
                        type:3,
                        text:"error text",
                        location:"1961 Chain Bridge rd, Tyson",
                        time:"6/17/20 2:00pm"
                    },
                    {
                        stop:"STOP",
                        type:1,
                        text:"info text",
                        location:"1961 Chain Bridge rd, Tyson",
                        time:"6/17/20 2:00pm"
                    },
                    {
                        stop:"STOP",
                        type:2,
                        text:"warning text",
                        location:"1961 Chain Bridge rd, Tyson",
                        time:"6/17/20 2:00pm"
                    },
                    {
                        stop:"ARRIVAL",
                        type:0,
                        text:"",
                        location:"1961 Chain Bridge rd, Tyson",
                        time:"6/17/20 2:00pm"
                    }
                ]
            },
            {
                id:"5555",
                bus:"AT 5555",
                driver:"Manu",
                date:"2024-11-09",
                status:4,
                departure:{
                    location:"1961 Chain Bridge rd, Tyson",
                    time:"6/17/20 2:00pm"
                },
                arrival:{
                    location:"1961 Chain Bridge rd, Tyson",
                    time:"6/17/20 2:00pm"
                },
                distanceTraveled:"999km",
                duration:"10hr 40m",
                idleTime:"1h",
                averageFuel:"3km/L",
                averageSpeed:"40km/hr",
                stops:[]
            }
        ])
    },[])


    useEffect(()=>{
        setFilteredTrips(trips.filter((item)=>item.date == datePick))
    },[datePick,trips])


    useEffect(()=>{
        setChosenTrip(0)
    },[filteredTrips])


    useEffect(()=>{
        setTrip(filteredTrips[chosenTrip])
    },[filteredTrips,chosenTrip])


    // chnages trip based on filter by bus
    const handleBusSearch = (e) => {
        const bus = e.target.value
        setChosenTrip(filteredTrips.findIndex(item=>item.bus==bus))
    }

    // returns color of trip statuses
    const tripStatusColor = (status) => {
        if(status==0 || status == 1 || status == 4){
            return "text-success"
        }else if(status==2){
            return "text-warning"
        }else{
            return "text-danger"
        }
    }


    // returns styling for arrival time based on trip status
    const tripStatusArrival = (status) => {
        if (status==0 || status==4){
            return "opacity-50"
        }else if(status == 3){
            return "text-danger"
        }else{
            return ""
        }
    }

    // returns color of location icon based events
    const stopEventColor = (status)=>{
        if(status==0){
            return "text-success"
        }else if(status==1){
            return "text-info"
        }else if(status==2){
            return "text-warning"
        }else{
            return "text-danger"
        }
    }

    // returns icons for events
    const stopEventIcon = (status)=>{
        if(status==0){
            return <FontAwesomeIcon icon={faCircleCheck} />
        }else if(status==1 || status == 2){
            return <FontAwesomeIcon icon={faCircleInfo} />
        }else{
            return <FontAwesomeIcon icon={faTriangleExclamation} />
        }
    }

    // number of errors
    const numOfErrors = () => {
        let arr = trip?.stops.filter((item)=>(
            item.type == 3
        ))
        return arr?.length
    }

    
    // number of warnings
    const numOfWarnings = () => {
        let arr = trip?.stops.filter((item)=>(
            item.type == 2
        ))
        return arr?.length
    }


  return (
    <div>
      <div className="row TripOverview border ms-3" style={{width:"100%"}}>
        <div className="col-4 trips border-end p-0">
            <div className="d-flex justify-content-between align-items-center border-bottom">
                <h5 className='m-0 p-2 ms-2'>Trips</h5>
                <span><FontAwesomeIcon icon={faXmark} className='me-2'/></span>
            </div>
            <div className='p-2 border-bottom d-flex align-items-center gap-2 mb-2'>
                <select defaultValue={""} className='form-control' onChange={(e)=>handleBusSearch(e)}>
                    <option disabled value="">Filter By Vehicle</option>
                    {
                        filteredTrips.map((item,index)=>(
                            <option key={index} value={item.bus} >{item.bus}</option>
                        ))
                    }
                </select>
                <label htmlFor="date" onClick={() => document.getElementById('date').showPicker()}>
                    <FontAwesomeIcon icon={faCalendarDays} className='pointer'/>
                </label>
                <input type="date" style={{opacity:"0",width:"0",height:"0"}} id='date' value={datePick} onChange={(e)=>setDatePick(e.target.value)}/>
            </div>

            {
                filteredTrips.map((item,index)=>(
                    index==chosenTrip?
                    <div key={index} className="border border-success border-2 rounded px-3 p-2 mb-2 pointer" style={{backgroundColor:"rgba(236,246,244,255)"}}>
                        <div className="d-flex justify-content-between align-items-center text-success">
                            <div className='d-flex align-items-center'>
                                <div className='circlePick circle p-1 me-2'><FontAwesomeIcon icon={faCarSide} /></div>
                                <h4>{item?.bus}</h4>
                            </div>
                            <div className={`d-flex flex-column align-items-end ${tripStatusColor(item?.status)}`}>
                                <span className='fw-semibold'>{tripStatuses[item?.status]}</span>
                                <span>#{item?.id}</span>
                            </div>
                        </div>
                        <div className={`ms-5 mt-3 ${item?.status==4?tripStatusArrival(item?.status):""}`}>
                            <div className="d-flex align-items-center">
                                <FontAwesomeIcon icon={faLocationDot} className='me-2'/>
                                <div className="d-flex flex-column ms-2">
                                    <span className='fw-semibold'>{item?.departure?.location}</span>
                                    <span>{item?.departure?.time}</span>
                                </div>
                            </div>
                        </div>
                        <div className={`ms-5 mt-3 ${tripStatusArrival(item?.status)}`}>
                            <div className="d-flex align-items-center">
                                <FontAwesomeIcon icon={faLocationDot} className='me-2'/>
                                <div className="d-flex flex-column ms-2">
                                    <span className='fw-semibold'>{item?.arrival?.location}</span>
                                    <span>{item?.arrival?.time}</span>
                                </div>
                            </div>
                        </div>
                    </div>:
                    <div key={index} className="border border-2 rounded px-3 p-2 mb-2 pointer" onClick={()=>setChosenTrip(index)}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className='d-flex align-items-center'>
                                <div className='circle p-1 me-2'><FontAwesomeIcon icon={faCarSide} /></div>
                                <h4>{item?.bus}</h4>
                            </div>
                            <div className={`d-flex flex-column align-items-end ${tripStatusColor(item?.status)}`}>
                                <span className='fw-semibold'>{tripStatuses[item?.status]}</span>
                                <span>#{item?.id}</span>
                            </div>
                        </div>
                        <div className={`ms-5 mt-3 ${item?.status==4?tripStatusArrival(item?.status):""}`}>
                            <div className="d-flex align-items-center">
                                <FontAwesomeIcon icon={faLocationDot} className='me-2'/>
                                <div className="d-flex flex-column ms-2">
                                    <span className='fw-semibold'>{item?.departure?.location}</span>
                                    <span>{item?.departure?.time}</span>
                                </div>
                            </div>
                        </div>
                        <div className={`ms-5 mt-3 ${tripStatusArrival(item?.status)}`}>
                            <div className="d-flex align-items-center">
                                <FontAwesomeIcon icon={faLocationDot} className='me-2'/>
                                <div className="d-flex flex-column ms-2">
                                    <span className='fw-semibold'>{item?.arrival?.location}</span>
                                    <span>{item?.arrival?.time}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>





        <div className="col-8 details p-0">
            <h5 className='m-0 p-2 text-success border-bottom'><span style={{borderBottom:"green 3px solid"}}>DETAILS</span></h5>
            <div className="row justify-content-center gap-3 px-4">
                <div className="col p-0 pb-3 border">
                    <div className=''>
                        <h5 className='m-0 p-2 border-bottom'>Route Details</h5>
                        <div className="row gap-2 m-2">
                            <div className="col border d-flex justify-content-center align-items-center flex-column py-2">
                                <span className='text-secondary'><FontAwesomeIcon icon={faClock} /> Trip Duration</span>
                                <span>{trip?.duration}</span>
                            </div>
                            <div className="col border d-flex justify-content-center align-items-center flex-column py-2">
                                <span className='text-secondary'><FontAwesomeIcon icon={faMoon} /> Idle Time</span>
                                <span>{trip?.idleTime}</span>
                            </div>
                        </div>
                        {
                            trip?.stops.map((item,index)=>(
                                <div key={index} className='mt-4 d-flex justify-content-between'>
                                    <div className="d-flex flex-column ps-3">
                                        <span className='text-secondary fw-semibold'><FontAwesomeIcon icon={faLocationDot} className={`me-2 ${stopEventColor(item.type)}`}/>{item.stop}</span>
                                        <span className='fw-semibold ms-4'>{item.location}</span>
                                        <span className='text-secondary ms-4'>{item.time}</span>
                                    </div>
                                    <span className={`${stopEventColor(item.type)} me-2`}>{stopEventIcon(item.type)} {item.text}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="col p-0">
                    <div className='border pb-3'>
                        <h5 className='m-0 p-2 border-bottom'>Details</h5>
                        <div className="row mt-4 mx-4">
                            <div className="col">
                                <p className='text-secondary m-0'><FontAwesomeIcon icon={faCalendarDays} /> Start Date</p>
                                <span className='fw-semibold'>{trip?.arrival.time}</span>
                            </div>
                            <div className="col">
                                <p className='m-0 text-secondary'><FontAwesomeIcon icon={faCalendarDays} /> End Date</p>
                                <span className='fw-semibold'>{trip?.departure.time}</span>
                            </div>
                        </div>
                        <div className="row mt-3 mx-4">
                            <div className="col">
                                <p className='m-0 text-secondary'><FontAwesomeIcon icon={faTruck} /> Distance Covered</p>
                                <span className='fw-semibold'>{trip?.distanceTraveled}</span>
                            </div>
                            <div className="col">
                                <p className='m-0 text-secondary'><FontAwesomeIcon icon={faUser}/> Driver</p>
                                <span className='fw-semibold'>{trip?.driver}</span>
                            </div>
                        </div>
                        <div className="row mt-4 mx-3 gap-2">
                            <div className="col p-2 d-flex flex-column justify-content-center align-items-center border">
                                <span className='text-center text-secondary'><FontAwesomeIcon icon={faClock} /> Average Fuel Conception</span>
                                <span className='fw-semibold'>{trip?.averageFuel}</span>
                            </div>
                            <div className="col p-2 d-flex flex-column justify-content-center align-items-center border">
                                <span className='text-center text-secondary'><FontAwesomeIcon icon={faBolt} /> Average Speed</span>
                                <span className='fw-semibold'>{trip?.averageFuel}</span>
                            </div>
                        </div>
                        <div className="row mt-2 mx-3 gap-2">
                        <div className="col p-2 d-flex flex-column justify-content-center align-items-center border">
                                <span className='text-center text-secondary'><FontAwesomeIcon icon={faClock} /> Average Fuel Conception</span>
                                <span className='fw-semibold'>{trip?.averageFuel}</span>
                            </div>
                            <div className="col p-2 d-flex flex-column justify-content-center align-items-center border">
                                <span className='text-center text-secondary'><FontAwesomeIcon icon={faBolt} /> Average Speed</span>
                                <span className='fw-semibold'>{trip?.averageSpeed}</span>
                            </div>
                        </div>
                    </div>
                    <div className="border mt-3" >
                        <h5 className='m-0 p-2 border-bottom'>Events</h5>
                        <div className="row p-2 gap-2">
                            <div className="col border d-flex flex-column justify-content-center align-items-center p-3">
                                <span className='text-center text-secondary'><FontAwesomeIcon icon={faTriangleExclamation} /> Number of Errors</span>
                                <span className='fw-semibold'>{numOfErrors()}</span>
                            </div>
                            <div className="col border d-flex flex-column justify-content-center align-items-center p-3">
                                <span className='text-center text-secondary'><FontAwesomeIcon icon={faCircleInfo} /> Number of Warnings</span>
                                <span className='fw-semibold'>{numOfWarnings()}</span>
                            </div>
                        </div>
                        <div className="d-flex my-3 flex-column gap-2 ms-3">
                        {
                            trip?.stops.map((item,index)=>(
                                <span key={index} className={`${stopEventColor(item.type)} me-2`}>{stopEventIcon(item.type)} {item.text}</span>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    </div>
  )
}

export default TripOverviewComponent

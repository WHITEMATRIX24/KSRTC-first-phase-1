import commonAPI from "./commonAPI"
import SERVERURL from "./serverUrl"



//get all vehicles
export const getAllVehicles = async () => {
    return await commonAPI("GET", `${SERVERURL}/getAllVehicles`, "")
}

// addvehicle

export const addvehicleAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/addNewVehichle`, reqBody, "")
}

export const getAllTripApi = async () => {
    return await commonAPI('GET', `${SERVERURL}/getAllTripDetails`, "", "")
}

export const updateTripApi = async (reqBody, trip_id) => {
    return await commonAPI('PUT', `${SERVERURL}/editTripDetails/${trip_id}`, reqBody, "")
}




// add Trip
export const addTripApi = async (vehicleId,driverId,conductorId,data) => {
    return commonAPI("POST",`${SERVERURL}/addnewTrip/${vehicleId}/${driverId}/${conductorId}`,data,"")
}

// new edit trip
export const updateTripApiNew = async (trip_id,vehicle_id,driver_id,conductor_id,data) => {
    return commonAPI("PUT",`${SERVERURL}/editTripDetailsnew/${trip_id}/${vehicle_id}/${driver_id}/${conductor_id}`,data,"")
}

// get all drivers
export const getDriversListApi = async () =>{
    return commonAPI("GET",`${SERVERURL}/getAllDriverDetails`,"","")
}

// get all conductors
export const getConductorsListApi = async () =>{
    return commonAPI("GET",`${SERVERURL}/getAllConductordetails`,"","")
}
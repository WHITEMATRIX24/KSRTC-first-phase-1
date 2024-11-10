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
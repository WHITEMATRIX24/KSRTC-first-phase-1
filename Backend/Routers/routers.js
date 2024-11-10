// Import necessary modules
import express from 'express';
import multerConfig from '../MiddleWares/MulterMiddleware.js';  // Add .js extension
import { addNewVehicle, editVehicleDetails, getAllVehicles } from '../Controllers/VehicleController.js';  // Add .js extension
import { addNewDriver, editDriverDetails, getAllDriverDetails } from '../Controllers/DriverController.js';  // Add .js extension
import { addNewConductor, editConductorDetails, getAllConductorDetails } from '../Controllers/ConductorController.js';  // Add .js extension
import { addNewTrip, editTripDetails, editTripDetailsNew, getAllTripDetails } from '../Controllers/TripController.js';  // Add .js extension
import { getAllLedgerData, newLedgerData } from '../Controllers/LedgerController.js';  // Add .js extension

// Initialize router
const router = express.Router();

// <<<<<<<........VehicleRouter........>>>>>>>

// Adding New Vehicle
router.post('/addNewVehichle', addNewVehicle);
// Get all Vehicle Details
router.get('/getAllVehicles', getAllVehicles);
// Edit Vehicle Details By vehicle_id
router.put('/editVehicleById/:vehicle_id', editVehicleDetails);


// <<<<<<<........DriverRouter.........>>>>>>>

// Adding new Driver
router.post('/addNewDriver', multerConfig.single('image'),addNewDriver);
// Get all Driver Details
router.get('/getAllDriverDetails',getAllDriverDetails);
// Edit Driver Details By driver_id
router.put('/editDriverById/:driver_id', editDriverDetails);


// <<<<<<<.......ConductorRouter.......>>>>>>>

// Adding new Conductor
router.post('/addNewConductor', multerConfig.single('image'),addNewConductor);
// Get all Conductor Details
router.get('/getAllConductordetails', getAllConductorDetails);
// Edit Conductor Details By conductor_id
router.put('/editConductorById/:conductor_id',editConductorDetails);


// <<<<<<<...........TripRouter.......>>>>>>>>

// Adding new Trip info
router.post('/addnewTrip/:vehicle_id/:driver_id/:conductor_id',addNewTrip);
// Get all Trip Details
router.get('/getAllTripDetails',getAllTripDetails);
// Edit Trip Details by trip_id
router.put('/editTripDetails/:trip_id/:vehicle_id/:driver_id/:conductor_id',editTripDetails);
// New Edit Trip Details
router.put('/editTripDetailsnew/:trip_id/:vehicle_id/:driver_id/:conductor_id',editTripDetailsNew);



// <<<<<<<...........LedgerRouter.......>>>>>>>>

// Adding ledger details
router.post('/addNewLedgerData',newLedgerData);
// Get all Ledger Data
router.get('/getAllLedgerData',getAllLedgerData);

// Export the router
export default router;

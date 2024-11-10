import Trip from '../Models/TripSchema.js';
import Vehicle from '../Models/VechicleSchema.js';
import Conductor from '../Models/ConductorSchema.js';
import Driver from '../Models/DiverSchema.js';

// <<<<<<::::::::Adding New Trip Details::::::::>>>
export const addNewTrip = async (req, res) => {
    const { start_date, end_date, start_time, end_time, departure_location, arrival_location } = req.body;
    const { vehicle_id, driver_id, conductor_id } = req.params;

    try {
        const vehicle = await Vehicle.findById(vehicle_id);
        const driver = await Driver.findById(driver_id);
        const conductor = await Conductor.findById(conductor_id);

        if (!vehicle || !driver || !conductor) {
            return res.status(404).json({ error: "One or more related entities not found" });
        }

        const newTrip = new Trip({
            start_date, end_date, start_time, end_time,
            departure_location: {
                city: departure_location.city,
                address: departure_location.address
            },
            arrival_location: {
                city: arrival_location.city,
                address: arrival_location.address
            },
            vehicle_id: vehicle_id,
            driver_id: driver_id,
            conductor_id: conductor_id
        });

        await newTrip.save();
        res.status(201).json(newTrip);
    } catch (err) {
        console.log("Error at catch in tripController/addNewTrip::::::", err);
        res.status(500).json({ error: "Internal server error" });
    }
};

// <<<<<<<:::::::Getting All Trip Details From DB::::::::>>>>>>>>>
export const getAllTripDetails = async (req, res) => {
    try {
        const allTripDetails = await Trip.find();
        if (allTripDetails) {
            res.status(200).json(allTripDetails);
        } else {
            res.status(406).json("Can't Find Any Data::::::");
        }
    } catch (err) {
        console.log("Error at catch in tripController/getAllTripDetails::::::", err);
        res.status(500).json({ error: "Internal server error" });
    }
};

// <<<<<:::::::::Editing Trip Details By trip_id:::::::::>>>>>>>> 
export const editTripDetails = async (req, res) => {
    const { start_date, end_date, start_time, end_time, departure_location, arrival_location } = req.body;
    const { vehicle_id, driver_id, conductor_id, trip_id } = req.params;

    try {
        const vehicle = await Vehicle.findById(vehicle_id);
        const driver = await Driver.findById(driver_id);
        const conductor = await Conductor.findById(conductor_id);

        if (!vehicle || !driver || !conductor) {
            return res.status(404).json({ error: "One or more related entities not found" });
        }

        const updatedTrip = await Trip.findByIdAndUpdate(trip_id, {
            start_date, end_date, start_time, end_time,
            departure_location: {
                city: departure_location.city,
                address: departure_location.address
            },
            arrival_location: {
                city: arrival_location.city,
                address: arrival_location.address
            },
            vehicle_id: vehicle_id,
            driver_id: driver_id,
            conductor_id: conductor_id
        }, { new: true });

        if (updatedTrip) {
            res.status(200).json(updatedTrip);
        } else {
            res.status(406).json("Trip Update Failed ::::::");
        }
    } catch (err) {
        console.log("Error at catch in tripController/editTripDetails::::::", err);
        res.status(500).json({ error: "Internal server error" });
    }
};

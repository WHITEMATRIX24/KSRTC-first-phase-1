import Vehicles from "../Models/VechicleSchema.js";

// <<<<<<::::::::Adding New Vehicle Details::::::::>>>
export const addNewVehicle = async (req, res) => {
    const { number, model, status, transport_type, odometer } = req.body;
    try {
        const existingVehicle = await Vehicles.findOne({ number });
        if (existingVehicle) {
            res.status(406).json("Vehicle is Already Existing:::::");
        } else {
            const newVehicle = new Vehicles({
                number, model, status, transport_type, odometer
            });
            await newVehicle.save();
            res.status(201).json(newVehicle);
        }
    } catch (err) {
        console.log("Error at catch in vehicleController/addNewVehicle::::::", err);
        res.status(500).json({ error: "Internal server error" });
    }
};

// <<<<<<<:::::::Getting All Vehicle Details From DB::::::::>>>>>>>>>
export const getAllVehicles = async (req, res) => {
    try {
        const allVehicleDetails = await Vehicles.find();
        if (allVehicleDetails) {
            res.status(200).json(allVehicleDetails);
        } else {
            res.status(406).json("Can't find any vehicle Details:::: ");
        }
    } catch (err) {
        console.log("Error at catch in vehicleController/getAllVehicles::::::", err);
        res.status(500).json({ error: "Internal server error" });
    }
};

// <<<<<:::::::::Editing Vehicle Details By vehicle_id:::::::::>>>>>>>> 
export const editVehicleDetails = async (req, res) => {
    const { vehicle_id } = req.params;
    const { number, model, status, transport_type, odometer } = req.body;
    try {
        const updatedVehicle = await Vehicles.findByIdAndUpdate(vehicle_id, {
            number, model, status, transport_type, odometer
        }, { new: true });

        if (updatedVehicle) {
            res.status(200).json(updatedVehicle);
        } else {
            res.status(406).json("Updation Failed Error at editVehicleDetails::::: ");
        }
    } catch (err) {
        console.log("Error at catch in vehicleController/editVehicleDetails::::::", err);
        res.status(500).json({ error: "Internal server error" });
    }
};

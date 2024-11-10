import Conductor from '../Models/ConductorSchema.js';

// <<<<<<::::::::Adding New Conductor Details::::::::>>>
export const addNewConductor = async (req, res) => {
    const { first_name, last_name, dob, role, is_permanent, salary, salary_frequency,
        aadhaar_number, phone, email, } = req.body;
    const image = req.file ? req.file.filename : null;
    try {
        const existingConducter = await Conductor.findOne({ aadhaar_number });
        if (existingConducter) {
            res.status(406).json("Conductor is Already Existing:::::");
        } else {
            const newConductor = new Conductor({
                first_name, last_name, dob, role, is_permanent, salary, salary_frequency,
                aadhaar_number,
                contact_info: {
                    phone: phone || null,
                    email: email || null
                },
                image
            });
            await newConductor.save();
            res.status(201).json(newConductor);
        }
    } catch (err) {
        console.log("Error at catch in ConductorController/addNewConductor::::::", err);
        res.status(500).json({ error: "Internal server error" });
    }
}

// <<<<<<<:::::::Getting All Conductor Details From DB::::::::>>>>>>>>>
export const getAllConductorDetails = async (req, res) => {
    try {
        const allConductorDetails = await Conductor.find();
        if (allConductorDetails) {
            res.status(200).json(allConductorDetails);
        } else {
            res.status(406).json("Can't find Any Conductor Details::::")
        }
    } catch (err) {
        console.log("Error at catch in DriverController/getAllConductorDetails::::::", err);
        res.status(500).json({ error: "Internal server error" });
    }
}

// <<<<<:::::::::Editing Conductor Details By conductor_id:::::::::>>>>>>>>>
export const editConductorDetails = async (req, res) => {
    const { first_name, last_name, dob, role, is_permanent, salary, salary_frequency, on_leave,
        aadhaar_number, phone, email, blood_group } = req.body;
    const { conductor_id } = req.params;
    try {
        const updatedConductor = await Conductor.findByIdAndUpdate(conductor_id, {
            first_name, last_name, dob, role, is_permanent, salary, salary_frequency,
            on_leave, aadhaar_number,
            contact_info: {
                phone: phone,
                email: email,
            },
            blood_group
        }, { new: true });
        if (updatedConductor) {
            res.status(200).json(updatedConductor);
        } else {
            res.status(406).json("Updation of Conductor is Failed, Error in editConductorDetails (if..) :::::::");
        }
    } catch (err) {
        console.log("Error at catch in ConductorController/editConductorDetails::::::", err);
        res.status(500).json({ error: "Internal server error" });
    }
}

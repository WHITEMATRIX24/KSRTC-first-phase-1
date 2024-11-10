import Driver from '../Models/DiverSchema.js';

// <<<<<<::::::::Adding New Driver Details::::::::>>>
export const addNewDriver = async (req, res) => {
    const { first_name, last_name, dob, role, is_permanent, salary, salary_frequency,
        aadhaar_number, license_number, phone, email, blood_group } = req.body;
    const image = req.file ? req.file.filename : null;
    try {
        const existingDriver = await Driver.findOne({ license_number });
        if (existingDriver) {
            res.status(406).json("Driver is Already Existing:::::");
        } else {
            const newDriver = new Driver({
                first_name, last_name, dob, role, is_permanent, salary, salary_frequency,
                aadhaar_number, license_number,
                contact_info: {
                    phone: phone || null,
                    email: email || null
                },
                blood_group,
                image
            });
            await newDriver.save();
            res.status(201).json(newDriver);
        }
    } catch (err) {
        console.log("Error at catch in DriverController/addNewDriver::::::", err);
        res.status(500).json({ error: "Internal server error" });
    }
}

// <<<<<<<:::::::Getting All Driver Details From DB::::::::>>>>>>>>>
export const getAllDriverDetails = async (req, res) => {
    try {
        const allDriverDetails = await Driver.find();
        if (allDriverDetails) {
            res.status(200).json(allDriverDetails);
        } else {
            res.status(406).json("Can't find Any Driver Details::::");
        }
    } catch (err) {
        console.log("Error at catch in DriverController/getAllDriverDetails::::::", err);
        res.status(500).json({ error: "Internal server error" });
    }
}

// <<<<<:::::::::Editing Driver Details By driver_id:::::::::>>>>>>>>>
export const editDriverDetails = async (req, res) => {
    const { first_name, last_name, dob, role, is_permanent, salary, salary_frequency, on_leave,
        aadhaar_number, license_number, phone, email, blood_group } = req.body;
    const { driver_id } = req.params;
    try {
        const updatedDriver = await Driver.findByIdAndUpdate(driver_id, {
            first_name, last_name, dob, role, is_permanent, salary, salary_frequency,
            on_leave, aadhaar_number, license_number,
            contact_info: {
                phone: phone,
                email: email,
            },
            blood_group
        }, { new: true });
        
        if (updatedDriver) {
            res.status(200).json(updatedDriver);
        } else {
            res.status(406).json("Updation of Driver is Failed, Error in editDriverDetails (if..) :::::::");
        }
    } catch (err) {
        console.log("Error at catch in DriverController/editDriverDetails::::::", err);
        res.status(500).json({ error: "Internal server error" });
    }
}

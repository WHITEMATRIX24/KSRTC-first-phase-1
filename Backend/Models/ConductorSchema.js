import mongoose from 'mongoose';

const conductorSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    image: {
        type: String
    },
    role: {
        type: String,
        enum: ["driver", "conductor"],
        required: true
    },
    is_permanent: {
        type: Boolean,
    },
    salary: {
        type: Number,
        required: true
    },
    salary_frequency: {
        type: String,
        enum: ["daily", "monthly"],
        required: true
    },
    on_leave: {
        type: Boolean,
        default: false
    },
    aadhaar_number: {
        type: String,
        unique: true,
        required: true
    },
    contact_info: {
        phone: {
            type: String,
            unique: true
        },
        email: {
            type: String,
            unique: true
        }
    },
    assigned_vehicles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicles'
    }],
    blood_group: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

// Create the model
const Conductors = mongoose.model('Conductors', conductorSchema);

// Export the model
export default Conductors;

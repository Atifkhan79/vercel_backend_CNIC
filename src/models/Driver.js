import mongoose from "mongoose";

const driverSchema = new mongoose.Schema(
  {
    cnic: String,
    licenseNumber: String,
    driverName: String,
    fatherName: String,
    allowedVehicles: String,
    state: String,
    city: String,
    issueDate: String,
    validFrom: String,
    validTo: String,

    image: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Driver", driverSchema);
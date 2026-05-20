import Driver from "../models/Driver.js";

export const addDriver = async (req, res) => {
  try {
    console.log("Body:", req.body);      // ✅ check fields
    console.log("File:", req.file);      // ✅ check image upload

    const driverData = {
      ...req.body,
      image: req.file ? req.file.path : "",
    };

    const driver = await Driver.create(driverData);

    res.status(201).json({ success: true, driver });
  } catch (error) {
    console.log("ERROR:", error.message);  // ✅ see exact error
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();

    res.status(200).json({
      success: true,
      drivers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateDriver = async (req, res) => {
  try {
    const updateData = {
      ...req.body,
    };

    if (req.file) {
      updateData.image = req.file.path;  // ✅ changed from req.file.filename
    }

    const driver = await Driver.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.status(200).json({
      success: true,
      driver,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteDriver = async (req, res) => {
  try {
    await Driver.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Driver Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
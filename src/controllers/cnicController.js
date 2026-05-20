import Driver from "../models/Driver.js";

export const verifyCNIC = async (req, res) => {
  try {
    const { cnic } = req.params;

    const driver = await Driver.findOne({ cnic });

    if (!driver) {
      return res.status(404).json({
        success: false,
        message: "Record Not Found",
      });
    }

    res.status(200).json({
      success: true,
      data: driver,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
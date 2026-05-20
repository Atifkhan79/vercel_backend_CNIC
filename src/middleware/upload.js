import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "cnic-verification",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

export default multer({ storage });
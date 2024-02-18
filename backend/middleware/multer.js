import multer from "multer";
const storage = multer.memoryStorage()
const upload = multer({ storage: storage });
export const uploadImage = upload.array("image");

import DatauriParser from "datauri/parser.js";
import path from "path";
import cloudinary from "cloudinary";
const parser = new DatauriParser();






const productImages = [];
export async function uploadImages(images) {
  for (const image of images) {
    const extname = path.extname(image.originalname).toString();
    const bufferImage = parser.format(extname, image.buffer).content;

    try {
      const result = await cloudinary.v2.uploader.upload(bufferImage);
      productImages.push({
        url: result.secure_url,
        public_id: result.public_id,
      });
    } catch (error) {
      console.error(error);
      throw new ErrorHandler(500, "Error uploading images to Cloudinary");
    }
  }
  return productImages;
}

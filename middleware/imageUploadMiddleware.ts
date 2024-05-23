

import multer from "multer";
import { Request } from "express";
const path = require('path')

const imageFilter : any = (
  req: Request,
  file: Express.Multer.File,
  cb: (error: Error | null, acceptFile: boolean) => void
) => {
  if (
    file.mimetype.includes("image/png") ||
    file.mimetype.includes("image/jpeg") ||
    file.mimetype.includes("image/jpg") ||
    file.mimetype.includes("image/webp") 
  ) {
    cb(null, true);
  } else {
    cb(new Error("Please upload only jpg, png, webp or jpeg images."), false);
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const destinationPath = path.join(__dirname, "../public/userImg"); 
    cb(null, destinationPath);
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    const filename = Date.now() + "." + ext;
    req.body.filename = filename; 
    cb(null, filename);
  },
});

const uploadFile = multer({ storage, fileFilter: imageFilter });

export default uploadFile;



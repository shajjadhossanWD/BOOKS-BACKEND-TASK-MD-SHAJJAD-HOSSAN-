import express from "express";
import {
    uploadBook,
    updateBook,
    getAllBooks,
    getAllBooksAdmin,
    getBookById,
    deleteBookById,
    deleteAllBooks,
    getAllBooksAuthor
} from "../controllers/books.controller";
const userRouter = express.Router();

import { isAuthenticated } from "../middleware/auth";

userRouter.post("/create-book-author", isAuthenticated, uploadBook);
userRouter.put("/update-book-author/:id", isAuthenticated, updateBook);
userRouter.get("/get/all", getAllBooks);
userRouter.get("/get/all/books-author", getAllBooksAuthor);
userRouter.get("/get-all/admin", isAuthenticated, getAllBooksAdmin);
userRouter.get("/get/:id", getBookById);
userRouter.delete("/delete/:id", isAuthenticated, deleteBookById);
userRouter.delete("/delete/all", isAuthenticated, deleteAllBooks);


export default userRouter;

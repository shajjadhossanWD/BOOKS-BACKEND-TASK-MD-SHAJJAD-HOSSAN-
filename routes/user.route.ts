import express from "express";
import {
    registrationUser,
    activateUser,
    activateAuthorAsUser,
    loginUser,
    logoutUser,
    updateAccessToken,
    getUserInfo,
    getUserInfoById,
    updateUserInfo,
    getAllUsers,
    deleteUserById,
    deleteAllUsers,
} from "../controllers/user.controller";
const userRouter = express.Router();

import { isAuthenticated } from "../middleware/auth";
import uploadFile from "../middleware/imageUploadMiddleware";

userRouter.put("/update-user",uploadFile.single("image"), isAuthenticated, updateUserInfo);
userRouter.get("/get/all", getAllUsers);
userRouter.post("/registration", registrationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/activate-author", activateAuthorAsUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", isAuthenticated, logoutUser);
userRouter.get("/refresh-token", updateAccessToken);
userRouter.get("/me", isAuthenticated, getUserInfo);
userRouter.get("/get/:id", getUserInfoById);
userRouter.delete("/delete/:id", deleteUserById);
userRouter.delete("/delete/all", deleteAllUsers);


export default userRouter;

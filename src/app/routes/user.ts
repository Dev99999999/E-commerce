import express from 'express';
import userController from '../controllers/user';
import upload from '../middleware/fileUpload';
import auth from '../middleware/auth';

const router = express.Router();

router.post("/signup", auth.Authorization, upload.single("image"), userController.signUp);
router.post("/createuser", auth.Authorization, auth.roleAuthorization("admin"), upload.single("image"), userController.signUp)
router.post("/login", userController.login);
router.put("/update",auth.Authorization, upload.single("image"), userController.update)
router.delete("/delete",auth.Authorization, userController.delete)
router.get("/selectAll", auth.Authorization, auth.roleAuthorization('admin'), userController.selectAll)
router.get("/totalcount",auth.Authorization, auth.roleAuthorization('admin'), userController.totalCount)

export default router;

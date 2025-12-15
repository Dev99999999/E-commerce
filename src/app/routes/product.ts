import express from 'express'
import product from "../controllers/product";
import upload from '../middleware/fileUpload';
import auth from '../middleware/auth';

const router = express.Router()

router.post("/add-product", auth.Authorization, auth.roleAuthorization, upload.single("image"), product.addProduct)
router.put("/updateproduct/:id", auth.Authorization, auth.roleAuthorization('admin'), upload.single("image"), product.updateProduct)
router.delete("/deleteproduct/:id", auth.Authorization, auth.roleAuthorization('admin'), product.deleteProduct)
router.get("/all-product", product.selectAll)

export default router

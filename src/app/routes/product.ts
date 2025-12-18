import express from 'express'
import product from "../controllers/product";
import upload from '../middleware/fileUpload';
import auth from '../middleware/auth';

const router = express.Router()

/**
 * @swagger
 * /add-product:
 *   post:
 *     security:
 *        - Bearer: []
 *     tags:
 *       - products
 *     summary: Create new Product
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Samsung Galaxy M17 5G
 *               price:
 *                 type: number
 *                 example: 120000
 *               qty:
 *                 type: number
 *                 example: 1
 *               description:
 *                 type: string
 *                 example: "This is Good Product.."
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Product Addeded SuccessFully..
 *       400:
 *         description: Bad Request
 */
router.post("/add-product", auth.Authorization, auth.roleAuthorization, upload.single("image"), product.addProduct)

/**
 * @swagger
 * /updateproduct/{id}:
 *   put:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - products
 *     summary: Update product by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Product ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               price:
 *                 type: number
 *                 example: 79999
 *               qty:
 *                 type: number
 *                 example: 1
 *               description:
 *                 type: string
 *                 example: Latest Apple iPhone
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized
 */
router.put("/updateproduct/:id", auth.Authorization, auth.roleAuthorization('admin'), upload.single("image"), product.updateProduct)

/**
 * @swagger
 * /deleteproduct/{id}:
 *   delete:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - products
 *     summary: Delete product by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized
 */
router.delete("/deleteproduct/:id", auth.Authorization, auth.roleAuthorization('admin'), product.deleteProduct)

/**
 * @swagger
 * /all-product:
 *   get:
 *     tags:
 *       - products
 *     summary: Get all products
 * 
 *     responses:
 *       200:
 *         description: All products
 *       400:
 *         description: Bad Request
 */
router.get("/all-product", product.selectAll)

export default router

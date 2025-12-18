import express  from "express";
import product from "../controllers/card";
import auth from '../middleware/auth';

const router = express.Router()

/**
 * @swagger
 * /add-product:
 *   post:
 *     security:
 *        - Bearer: []
 *     tags:
 *       - cards
 *     summary: Create card
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
router.post("/addcard/:id",auth.Authorization, product.addCard)
router.delete("/removecard/:id",auth.Authorization, product.deleteCard)
router.put("/updatecard/:id",auth.Authorization, product.updateCard)
router.get("/viewcard", auth.Authorization ,product.getDataForUSer)
router.get("/allcard", auth.Authorization, auth.roleAuthorization('admin') ,product.allCard)

export default router
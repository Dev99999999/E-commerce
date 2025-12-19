import express  from "express";
import product from "../controllers/card";
import auth from '../middleware/auth';

const router = express.Router()

/**
 * @swagger
 * /addcard/{id}:
 *   post:
 *     security:
 *        - Bearer: []
 *     tags:
 *       - cards
 *     summary: Product add in Card..
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
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               qty:
 *                 type: number
 *                 example: 1
 *     responses:
 *       200:
 *         description: Product Add In card..
 *       400:
 *         description: Bad Request
 */
router.post("/addcard/:id",auth.Authorization, product.addCard)


/**
 * @swagger
 * /removecard/{id}:
 *   delete:
 *     security:
 *        - Bearer: []
 *     tags:
 *       - cards
 *     summary: Product remove in Card..
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Card ID
 *     responses:
 *       200:
 *         description: Product remove in Card..
 *       400:
 *         description: Bad Request
 */
router.delete("/removecard/:id",auth.Authorization, product.deleteCard)


/**
 * @swagger
 * /updatecard/{id}:
 *   put:
 *     security:
 *        - Bearer: []
 *     tags:
 *       - cards
 *     summary: Product Updated Card..
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Card ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               qty:
 *                 type: number
 *                 example: 1
 *     responses:
 *       200:
 *         description: Product Update card..
 *       400:
 *         description: Bad Request
 */
router.put("/updatecard/:id",auth.Authorization, product.updateCard)


/**
 * @swagger
 * /viewcard:
 *   get:
 *     security:
 *        - Bearer: []
 *     tags:
 *       - cards
 *     summary: Product view in Card..
 *     responses:
 *       200:
 *         description: Product view in card..
 *       400:
 *         description: Bad Request
 */
router.get("/viewcard", auth.Authorization ,product.getDataForUSer)


/**
 * @swagger
 * /allcard:
 *   get:
 *     security:
 *        - Bearer: []
 *     tags:
 *       - cards
 *     summary: All Card..
 *     responses:
 *       200:
 *         description: All card..
 *       400:
 *         description: Bad Request
 */
router.get("/allcard", auth.Authorization, auth.roleAuthorization('admin') ,product.allCard)


export default router
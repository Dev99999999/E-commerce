import express from 'express';
import userController from '../controllers/user';
import upload from '../middleware/fileUpload';
import auth from '../middleware/auth';

const router = express.Router();

/**
 * @swagger
 * /signup:
 *   post:
 *     security:
 *        - Bearer: []
 *     tags:
 *       - users
 *     summary: Create new user
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                 type: number
 *                 example: 9876226688
 *               name:
 *                 type: string
 *                 example: Dev
 *               city:
 *                 type: number
 *                 example: 1
 *               gender:
 *                 type: string
 *                 example: male
 *               password:
 *                 type: string
 *                 example: bbdb363
 *               hobbies:
 *                 type: string
 *                 example: cricket, football
 *               image:
 *                 type: string
 *                 format: binary
 *               role:
 *                 type: string
 *                 example: user
 *     responses:
 *       200:
 *         description: signUp SuccessFully..
 *       400:
 *         description: Bad Request
 */
router.post("/signup", auth.Authorization, upload.single("image"), userController.signUp);
router.post("/createuser", auth.Authorization, auth.roleAuthorization("admin"), upload.single("image"), userController.signUp)


/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - users
 *     summary: user login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                 type: number
 *                 example: 9876226688
 *               password:
 *                 type: string
 *                 example: bbdb363
 *     responses:
 *       201:
 *         description: Login Successfully
 *       400:
 *         description: Validation error
 */
router.post("/login", userController.login);


/**
 * @swagger
 * /update:
 *   put:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - users
 *     summary: Update user profile
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Dev
 *               city:
 *                 type: number
 *                 example: 1
 *               gender:
 *                 type: string
 *                 example: male
 *               hobbies:
 *                 type: string
 *                 example: cricket, football
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized
 */
router.put("/update", auth.Authorization, upload.single("image"), userController.update)


/**
 * @swagger
 * /delete:
 *   delete:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - users
 *     summary: Delete user
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       401:
 *         description: Unauthorized
 *       400:
 *         description: Bad Request
 */
router.delete("/delete", auth.Authorization, userController.delete)

/**
 * @swagger
 * /selectAll:
 *   get:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - users
 *     summary: Get all users
 * 
 *     responses:
 *       200:
 *         description: All users
 *       401:
 *         description: Unauthorized
 *       400:
 *         description: Bad Request
 */
router.get("/selectAll", auth.Authorization, auth.roleAuthorization('admin'), userController.selectAll)

/**
 * @swagger
 * /totalcount:
 *  get:
 *    security:
 *      - Bearer: []
 *    tags:
 *      - users
 *    summary: total user count
 *    responses:
 *       200:
 *         description: total
 *       401:
 *         description: Unauthorized
 *       400:
 *         description: Bad Request
 *        
 */
router.get("/totalcount", auth.Authorization, auth.roleAuthorization('admin'), userController.totalCount)

export default router;

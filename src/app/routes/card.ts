import express  from "express";
import product from "../controllers/card";
import auth from '../middleware/auth';

const router = express.Router()

router.post("/addcard/:id",auth.Authorization, product.addCard)
router.delete("/removecard/:id",auth.Authorization, product.deleteCard)
router.put("/updatecard/:id",auth.Authorization, product.updateCard)
router.get("/viewcard", auth.Authorization ,product.getDataForUSer)
router.get("/allcard", auth.Authorization, auth.roleAuthorization('admin') ,product.allCard)

export default router
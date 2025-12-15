import { success } from "zod";
import card from "../models/card";
import { cardSchema } from "../schema/card";
// import jwt from 'jsonwebtoken';


class cardController {

    async addCard(req: any, res: any) {
        try {

            const qty = await cardSchema.safeParseAsync(req.body)

            if(!qty.success){
                return res.status(300).json({
                    success: false,
                    message: qty.error
                })
            }

            const result = await card.addCard({
                userid: req.user.id,
                productid: req.params.id,
                qty: qty.data
            })

            return res.status(200).json({
                success: true,
                message: "New product added..",
                data: result
            })

        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error
            })
        }
    }

    async getDataForUSer(req: any, res: any) {
        try {

            const result = await card.getCardBYID(req.user.id);

            return res.status(200).json({
                success: true,
                data: result
            });

        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error
            })
        }
    }

    async allCard(req: any, res: any) {
        try {

            const result = await card.allCard();

            return res.status(200).json({
                success: true,
                data: result
            });

        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error
            })
        }
    }
    // async addCard()
    async updateCard(req: any, res: any) {
        try {

            const cardid = parseInt(req.params.id)

            const result = await card.updateCard(req.user.id, cardid, req.body);
            // console.log(result)

            return res.status(200).json({
                success: true,
                message: "card updated Successfully..",
                data: result
            });

        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error
            })
        }
    }

    async deleteCard(req: any, res: any) {
        try {

            const cardid = parseInt(req.params.id)

            const result = await card.deleteCard(req.user.id, cardid);

            // if (!result) {
            //     return res.status(404).json({
            //         success: false,
            //         message: "Card ID does not exist"
            //     });
            // }

            return res.status(200).json({
                success: true,
                message: "Card deleted Succefully..",
                data: result
            });

        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error
            })
        }
    }
}

export default new cardController()
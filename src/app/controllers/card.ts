import { success } from "zod";
import card from "../models/card";
import { cardSchema } from "../schema/card";
// import jwt from 'jsonwebtoken';


class cardController {

    async addCard(req: any, res: any) {
        try {

            const body = await cardSchema.safeParseAsync(req.body)

            console.log(body.data)

            if(!body.success){
                return res.status(300).json({
                    Field: body.error.issues[0].path,
                    message: body.error.issues[0].message
                })
            }

            const result = await card.addCard({
                userid: req.user.id,
                productid: req.params.id,
                qty:  body.data.qty
            })

            return res.status(200).json({
                success: true,
                message: "New product added in Card..",
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

            const body = await cardSchema.safeParseAsync(req.body)

            console.log(body.data)

            if(!body.success){
                return res.status(300).json({
                    Field: body.error.issues[0].path,
                    message: body.error.issues[0].message
                })
            }

            const cardid = parseInt(req.params.id)

            const result = await card.updateCard(req.user.id, cardid, body.data.qty);
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
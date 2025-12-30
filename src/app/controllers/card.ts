import card from "../models/card";
import { cardSchema } from "../schema/card";
// import jwt from 'jsonwebtoken';
import nodemailer from "nodemailer";

class cardController {

    async addCard(req: any, res: any) {
        try {

            const body = await cardSchema.safeParseAsync(req.body)

            console.log(body.data)

            if (!body.success) {
                return res.status(300).json({
                    Field: body.error.issues[0].path,
                    message: body.error.issues[0].message
                })
            }

            const result = await card.addCard({
                userid: req.user.id,
                productid: req.params.id,
                qty: body.data.qty
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

            if (!body.success) {
                return res.status(300).json({
                    Field: body.error.issues[0].path,
                    message: body.error.issues[0].message
                })
            }

            const cardid = parseInt(req.params.id)

            const result = await card.updateCard(req.user.id, cardid, body.data);
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

    async deleteCardEmail(req: any, res: any) {
        try {

            const { email } = req.body

            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "sonawanedevendra109@gmail.com",
                    pass: "ptowlouuumwcppvh",
                },
            });

            await transporter.sendMail({
                from: "sonawanedevendra109@gmail.com",
                to: email,
                subject: "Product Deliver",
                text: "Product Place SucceFully.."
                // html: "<h1>Hello from Node.js</h1>",
            });

            res.send("Email sent!");
            console.log("Email sent successfully!");
        } catch (err: any) {
            console.log("Error:", err.message);
            res.send("Failed to send email");
        }

        // if (!result) {
        //     return res.status(404).json({
        //         success: false,
        //         message: "Card ID does not exist"
        //     });
        // }

        // return res.status(200).json({
        //     success: true,
        //     data: result
        // });

        // } catch (error) {
        //     return res.status(400).json({
        //         success: false,
        //         message: error
        //     })
        // }
    }
}

export default new cardController()
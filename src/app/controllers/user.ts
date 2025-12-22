// const userModel = require("../models/user.ts")
import user from "../models/user"
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { userCreateSchema, UserLoginSchema, userUpdateSchema } from "../schema/user";

class userCRUD {

    async signUp(req: any, res: any) {
        try {

            if (req.user.role === "admin") {

                const body = await userCreateSchema.safeParseAsync(req.body)

                if (!body.success) {
                    return res.status(300).json({
                        message: `${body.error.issues[0].path} ${body.error.issues[0].message}`
                    })
                }

                const hashpass = await bcrypt.hash(req.body.password, 10)

                if (!req.file) {
                    return res.status(400).json({
                        success: false,
                        message: "file is nessary"
                    })
                }

                // const result = await user.signUp(req.body, req?.file.filename)

                const result = await user.signUp({ ...body.data, password: hashpass }, req?.file.filename)

                return res.status(200).json({
                    success: true,
                    message: "signUp SuccessFully..",
                    data: result
                })
            }
            else {
                return res.status(300).json({
                    success: false,
                    message: "This is not admin",
                })
            }
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error
            })
        }
    }

    async login(req: any, res: any) {
        try {

            const body = await UserLoginSchema.safeParseAsync(req.body)

            if (!body.success) {
                return res.status(300).json({
                    Field: body.error.issues[0].path,
                    message: body.error.issues[0].message
                })
            }

            const result = await user.login(body.data)

            if (result.length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid User..!"
                });
            }

            const userData = result[0];

            const isMatch = await bcrypt.compare(req.body.password, userData.password)

            if (!isMatch) {
                return res.status(400).json({
                    success: false,
                    message: "Password is incorrected.."
                })
            }

            const token = jwt.sign(
                {
                    id: userData.id,
                    phone: userData.phone,
                    role: userData.role
                },
                process.env.JWT_SECRET_KEY as string,
                { expiresIn: "1d" }
            );

            return res.status(200).json({
                success: true,
                message: "Login Successfully",
                data: userData,
                token: token
            });
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error
            })
        }
    }

    async update(req: any, res: any) {
        try {

            const id = req.user.id;
            const image = req.file ? req.file.filename : null;

            // const body = { ...req.body, id };

            const updateSchema = await userUpdateSchema.safeParseAsync({...req.body})

            if (!updateSchema.success) {
                return res.status(300).json({
                    Field: updateSchema.error.issues[0].path,
                    message: updateSchema.error.issues[0].message
                })
            }
            
            const body = { ...updateSchema.data, id };

            const result = await user.update(body, image);

            return res.status(200).json({
                success: true,
                message: "User data update SucceFully",
                data: result
            })
        } catch (error: any) {
            return res.status(400).json({
                success: false,
                message: error.message
            })
        }
    }

    async delete(req: any, res: any) {
        try {
            const id = parseInt(req.user.id)

            const result = await user.delete(id)
            return res.status(200).json({
                success: true,
                message: "User deleted SuccessFully..",
                data: result
            })
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error
            })
        }
    }

    async selectAll(req: any, res: any) {

        try {

            // const { page = 1, limit= 1 }

            const result = await user.selectAll()

            return res.status(200).json({
                success: true,
                data: result
            })
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error
            })
        }

    }

    async totalCount(req: any, res: any) {

        try {
            const result = await user.totalCount()

            return res.status(200).json({
                success: true,
                data: result
            })
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error
            })
        }
    }
}

export default new userCRUD()
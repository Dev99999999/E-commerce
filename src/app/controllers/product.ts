import product from "../models/product";
import { productSchema } from "../schema/product";

class productController {
    async addProduct(req: any, res: any) {
        try {

            if (!req.file) {
                return res.status(400).json({
                    success: false,
                    message: "file is nesssasary.."
                })
            }

            const body = await productSchema.safeParseAsync(req.body)

            if(!body.success){
                return res.status(300).json({
                    success: false,
                    message: body.error.format()
                })
            }

            const result = await product.addProduct(body.data, req.file.filename)

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

    async updateProduct(req: any, res: any) {
        try {

            const id = parseInt(req.params.id);
            const image = req.file ? req.file.filename : null;

            const body = { ...req.body, id};

            const result = await product.updateProduct(body, image);

            return res.status(200).json({
                success: true,
                message: "Product update SucceFully",
                data: result
            })


        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error
            })
        }
    }

    async deleteProduct(req: any, res: any) {
        try {
            const id = parseInt(req.params.id)

            const result = await product.delete(id)
            return res.status(200).json({
                success: true,
                message: "Product deleted SuccessFully..",
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
            
            const result = await product.selectAll()

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

export default new productController()
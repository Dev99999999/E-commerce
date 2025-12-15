import pool from "../../configs/db";

class productModel {

    async addProduct(body: any, image: String) {

        const { name, price, qty, description } = body
        const query = "call productCRUD(?,?,?,?,?,?,?)";

        const values = [
            'INSERT',
            null,
            name, price, qty, description, image
        ]

        try {
            const [rows]: any = await pool.query(query, values)
            const result = rows[0];

            return result;
        } catch (error) {
            console.log("DB ERROR:", error);
            throw error;
        }
    }

    async updateProduct(body: any, image: string) {

        const { id, price, qty, description } = body

        const [currentRows]: any = await pool.query("SELECT * FROM product WHERE id = ?", [id]);
        if (!currentRows.length) throw new Error("Product not found");
        const currentProduct = currentRows[0];

        const query = "call productCRUD(?,?,?,?,?,?,?)";

        const values = [
            'UPDATE',
            id,
            null,
            price ? Number(price) : currentProduct.price,
            qty ? Number(qty) : currentProduct.qty,
            description || currentProduct.description,
            image || currentProduct.image
        ]

        try {
            const [rows]: any = await pool.query(query, values)
            const result = rows[0];

            return result;
        } catch (error) {
            console.log("DB ERROR:", error);
            throw error;
        }

    }

    async delete(id: number) {
        const query = "call productCRUD(?,?,?,?,?,?,?)";
        const values = [
            'DELETE',
            id,
            null, null, null, null, null
        ];

        try {
            const [rows]: any = await pool.query(query, values)
            const result = rows[0];

            return result;

        } catch (error) {
            console.log(error)
            return error
        }
    }

    async selectAll() {
        const query = "call productCRUD(?,?,?,?,?,?,?)";
        const values = [
            'SELECTALL',
            null, null, null, null, null, null, null
        ]

        try {

            const [rows]: any = await pool.query(query, values)
            const result = rows[0]

            return result;

        } catch (error) {
            console.log("DB ERROR:", error);
            throw error;
        }
    }
    
}

export default new productModel()
import pool from "../../configs/db";

class cardModel {
    async addCard(body: any) {
        const { userid, productid, qty } = body
        const query = "call cardCRUD(?,?,?,?,?,?)";

        const values = [
            'INSERT',
            null,
            userid, productid, qty,
            null
        ]

        try {
            const [row]: any = await pool.query(query, values)
            const result = row[0]

            return result

        } catch (error) {
            console.log("DB ERROR:", error);
            throw error;
        }
    }

    async getCardBYID(userid: number) {
        const query = "call cardCRUD(?,?,?,?,?,?)";

        const values = [
            'SELECT BY ID',
            null,
            userid,
            null,
            null,
            null
        ]

        try {
            const [row]: any = await pool.query(query, values)
            const result = row[0]

            return result

        } catch (error) {
            console.log("DB ERROR:", error);
            throw error;
        }
    }

    async updateCard(userid: number, id: number, body: any) {

        const { qty } = body
        const query = "call cardCRUD(?,?,?,?,?,?)";

        const values = [
            'UPDATE',
            id,
            userid,
            null,
            qty,
            null
        ]

        try {
            const [row]: any = await pool.query(query, values)
            const result = row[0]

            return result;

        } catch (error) {
            console.log("DB ERROR:", error);
            throw error;
        }
    }

    async deleteCard(userid: number, id: number) {
        const query = "call cardCRUD(?,?,?,?,?,?)";

        const values = [
            'DELETE',
            id,
            userid,
            null,
            null,
            null
        ]

        try {
            const [row]: any = await pool.query(query, values)
            const result = row[0]

            return result;

        } catch (error) {
            console.log("DB ERROR:", error);
            throw error;
        }
    }

    //for Admin
    async allCard() {
        const query = "call cardCRUD(?,?,?,?,?,?)";

        const values = [
            'SELECTALL',
            null,
            null,
            null,
            null,
            null
        ]

        try {
            const [row]: any = await pool.query(query, values)
            const result = row[0]

            return result

        } catch (error) {
            console.log("DB ERROR:", error);
            throw error;
        }
    }
}

export default new cardModel()
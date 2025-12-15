// import { resolve } from "path";
import pool from "../../configs/db";

class UserModel {

    async signUp(body: any, image:any) {

        const { phone, name, city, gender, password, hobbies, role } = body;

        const query = "call userCRUD(?,?,?,?,?,?,?,?,?,?)";
        const values = ['INSERT', null, phone, name, city, gender, password, hobbies, image, role];

        try {
            const [rows]: any = await pool.query(query, values)
            const result = rows[0];

            return result;
        } catch (error) {
            console.log("DB ERROR:", error);
            throw error;
        }
    }

    async login(body: any) {

        const { phone, password } = body

        const query = "call userCRUD(?,?,?,?,?,?,?,?,?,?)";
        const values = ['CHECK', null, phone, null, null, null, password, null, null, null];
        
        try {
            const [rows]: any = await pool.query(query, values)
            const result = rows[0];

            return result;

        } catch (error) {
            console.log(error)
            return error
        }
    }

    async update(body: any, image: string) {
        const { id, name, city, gender, hobbies } = body

        const [currentRows]: any = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
        if (!currentRows.length) throw new Error("User not found");
        const currentUser = currentRows[0];

        const query = "call userCRUD(?,?,?,?,?,?,?,?,?,?)";
        const values = [
            'UPDATE',
            id,
            null,
            name || currentUser.name,
            city || currentUser.city,
            gender || currentUser.gender,
            null,
            hobbies || currentUser.hobbies,
            image || currentUser.image,
            null
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

    async delete(id: number) {
        const query = "CALL userCRUD(?,?,?,?,?,?,?,?,?,?)";
        const values = [
            'DELETE',
            id,
            null, null, null, null, null, null, null, null
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

        const query = 'call userCRUD(?,?,?,?,?,?,?,?,?,?)'
        const values = [
            'SELECTALL',
            null, null, null, null, null, null, null, null, null
        ]

        try {
            const [rows] = await pool.query(query, values);
            return rows;
        } catch (error) {
            console.log(error)
            return error
        }
    }

    async totalCount() {
        const query = 'call userCRUD(?,?,?,?,?,?,?,?,?,?)'
        const values = [
            'TOTALCOUNT',
            null, null, null, null, null, null, null, null, null
        ]

        try {
            const [rows]: any = await pool.query(query, values);
            const result = rows[0]

            return result;
        } catch (error) {
            console.log(error)
            return error
        }
    }
}

export default new UserModel();

import jwt from "jsonwebtoken";

const Authorization = (req: any, res: any, next: any) => {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) {
        return res.status(400).json({
            messsage: "Token is Required..!"
        })
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY as string, (err: any, decoded: any) => {
        if (err) return res.status(401).json({ message: "Invalid Token.." })

        req.user = decoded
    })

    next()
}

const roleAuthorization = (...allowedrole: any) => {
    return (req: any, res: any, next: any) => {

        if (!req.user) {
            return res.status(401).json({ message: "Not authenticated" });
        }

        console.log(req.user.role)

        if (!allowedrole.includes(req.user.role)) {
            return res.status(403).json({ message: "Access denied: insufficient role" });
        }

        next()
    }
}

export default {
    Authorization, roleAuthorization
}

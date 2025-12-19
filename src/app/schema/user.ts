import z from "zod";

export const userSchema = z.object({
    phone: z.coerce.number().min(1000000000).max(9999999999), 
    name: z.string(), 
    city: z.union([z.literal(1), z.literal(2), z.literal(3)]),
    gender: z.enum(["male", "female"]), 
    password: z.string(), 
    hobbies: z.string(), 
    // image: z.file(), 
    role: z.enum(["admin", "user"]).default("user")
})


import z from "zod";

export const userCreateSchema = z.object({
    phone: z.coerce.number().min(1000000000).max(9999999999), 
    name: z.string(), 
    city: z.coerce.number().min(1).max(3),
    gender: z.enum(["male", "female"]), 
    password: z.string(), 
    hobbies: z.string(), 
    // image: z.file(), 
    role: z.enum(["admin", "user"]).default("user")
})

export const UserLoginSchema = z.object({
    phone: z.coerce.number().min(1000000000).max(9999999999),
    password: z.string(), 
})

export const userUpdateSchema = z.object({
    name: z.string().nullable(), 
    city: z.coerce.number().min(1).max(3).nullable(),
    gender: z.enum(["male", "female"]).nullable(), 
    hobbies: z.string().nullable()
})


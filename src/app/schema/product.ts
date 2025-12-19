import z from "zod";

export const productCreateSchema = z.object({
    name: z.string(), 
    price: z.coerce.bigint(), 
    qty: z.coerce.number().min(1).max(10), 
    description: z.string()
})

export const productUpdateSchema = z.object({
    price: z.coerce.bigint(), 
    qty: z.coerce.number().min(1).max(10), 
    description: z.string()
})
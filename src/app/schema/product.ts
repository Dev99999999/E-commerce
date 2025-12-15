import z from "zod";

export const productSchema = z.object({
    name: z.string(), 
    price: z.number(), 
    qty: z.number().min(1).max(10), 
    description: z.string(), 
    image: z.string()
})
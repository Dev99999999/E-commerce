import z from "zod";

export const productSchema = z.object({
    name: z.string(), 
    price: z.coerce.bigint(), 
    qty: z.coerce.number().min(1).max(10), 
    description: z.string()
})
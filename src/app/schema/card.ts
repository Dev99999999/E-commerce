import z from "zod";

export const cardSchema = z.object({
    qty: z.number().min(1).max(10).nullable()
})
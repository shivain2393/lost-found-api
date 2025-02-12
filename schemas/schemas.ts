import { z } from "zod";

export const LostItemSchema = z.object({
    name: z.string().min(1).max(20),
    description: z.string().min(1).max(100),
    location: z.string().min(1).max(32),
    date: z.string()
        .refine((val) => !isNaN(Date.parse(val)), {
            message: "Invalid date format. Use YYYY-MM-DD",
        })
        .transform((val) => new Date(val))
})

export const FoundItemSchema = z.object({
    name: z.string().min(1).max(20),
    description: z.string().min(1).max(100),
    location: z.string().min(1).max(32),
    date: z.string()
        .refine((val) => !isNaN(Date.parse(val)), {
            message: "Invalid date format. Use YYYY-MM-DD",
        })
        .transform((val) => new Date(val))
})
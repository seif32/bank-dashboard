import z from "zod";

export const transferSchema = z
  .object({
    fromAccountId: z.string(),
    toAccountId: z.string(),
    amount: z.number().positive(),
    description: z.string().optional(),
  })
  .refine((data) => data.fromAccountId !== data.toAccountId, {
    path: ["toAccountId"],
    error: "Account must be different",
  });

export type TransferFormData = z.infer<typeof transferSchema>;

import type { TransactionType } from "../../types";

export const transactionTypeBadge: Record<
  TransactionType,
  "info" | "danger" | "warning" | "success"
> = {
  deposit: "success",
  withdrawal: "danger",
  transfer: "info",
};

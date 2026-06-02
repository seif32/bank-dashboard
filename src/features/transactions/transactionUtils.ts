import type { TransactionType } from "../../types";

export const transactionTypeBadge: Record<
  TransactionType,
  "info" | "danger" | "warning" | "success"
> = {
  deposit: "success",
  withdrawal: "danger",
  transfer: "info",
};

export const transactionAmountColor: Record<TransactionType, string> = {
  deposit: "text-green-700",
  withdrawal: "text-red-700",
  transfer: "text-gray-900",
};

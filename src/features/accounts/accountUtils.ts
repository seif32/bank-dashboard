import type { Account } from "../../types";

export const badgeVariantMap: Record<
  Account["type"],
  "info" | "success" | "warning"
> = {
  checking: "info",
  savings: "success",
  investment: "warning",
};

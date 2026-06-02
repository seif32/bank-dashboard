export type Account = {
  readonly id: string;
  readonly name: string;
  readonly type: "checking" | "savings" | "investment";
  readonly balance: number;
  readonly currency: string;
  readonly createdAt: string;
};

export type TransactionType = "withdrawal" | "deposit" | "transfer";

export type Transaction = {
  readonly id: string;
  readonly amount: number;
  readonly description: string;
  readonly balanceAfter: number;
  readonly accountId: string;
  readonly type: TransactionType;
  readonly date: string;
};

export type Transfer = {
  readonly id: string;
  readonly transferFrom: string;
  readonly transferTo: string;
  readonly amount: number;
  readonly timestamp: string;
};

export type User = {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly phone: string;
};

export type NotificationType = "transaction" | "low_balance" | "general";

export type Notification = {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  isRead: boolean;
  readonly type: NotificationType;
  readonly timestamp: string;
};

export type Currency = {
  code: string;
  label: string;
};

export type ExchangeRate = {
  base: string;
  rates: Record<string, number>;
  timestamp: string;
};

export type ApiResponse<T> =
  | { type: "success"; data: T }
  | { type: "failure"; error: string };

export type FetchState<T> =
  | { type: "success"; data: T }
  | { type: "error"; error: string }
  | { type: "loading" };

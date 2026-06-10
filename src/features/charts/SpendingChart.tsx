import {
  Pie,
  Tooltip,
  Legend,
  PieChart,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { Card } from "../../components/ui";
import { useMemo } from "react";
import type { Transaction } from "../../types";
import { formatCurrency } from "../../utils";

type SpendingChartType = {
  name: string;
  value: number;
};

type TransactionsObjType = {
  deposit: number;
  withdrawal: number;
  transfer: number;
};

type SpendingChartProps = {
  transactions: Transaction[];
};

const COLORS: Record<string, string> = {
  deposit: "#22c55e",
  withdrawal: "#ef4444",
  transfer: "#3b82f6",
};

export default function SpendingChart({ transactions }: SpendingChartProps) {
  const transactionTypeTotal: TransactionsObjType = useMemo(
    () =>
      transactions.reduce(
        (accumulator, transaction) => {
          if (transaction.type === "deposit") {
            accumulator.deposit += transaction.amount;
          } else if (transaction.type === "withdrawal") {
            accumulator.withdrawal += transaction.amount;
          } else {
            accumulator.transfer += transaction.amount;
          }
          return accumulator;
        },
        {
          deposit: 0,
          withdrawal: 0,
          transfer: 0,
        },
      ),
    [transactions],
  );

  const chartTransactions: SpendingChartType[] = useMemo(() => {
    return Object.entries(transactionTypeTotal).map((transaction) => ({
      name: transaction[0],
      value: transaction[1],
    }));
  }, [transactionTypeTotal]);

  return (
    <Card>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Spending Breakdown
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={chartTransactions} dataKey="value" nameKey="name">
            {chartTransactions.map((entry) => (
              <Cell key={entry.name} fill={COLORS[entry.name]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => formatCurrency(value)} />{" "}
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
}

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { Transaction } from "../../types";
import { useMemo } from "react";
import { Card } from "../../components/ui";
import { format } from "date-fns";
import { formatCurrency } from "../../utils";

type TransactionChartType = {
  date: string;
  balance: number;
};

type BalanceChartProps = {
  transactions: Transaction[];
};

export default function BalanceChart({ transactions }: BalanceChartProps) {
  const chartTransactions: TransactionChartType[] = useMemo(
    () =>
      transactions
        .map((transaction) => ({
          date: transaction.date,
          balance: transaction.balanceAfter,
        }))
        .sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        ),
    [transactions],
  );

  return (
    <Card>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Balance Over Time
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartTransactions}>
          <XAxis
            dataKey="date"
            tickFormatter={(value) => format(new Date(value), "MM/dd")}
          />
          <YAxis width={100} tickFormatter={(value) => formatCurrency(value)} />
          <Tooltip formatter={(value: number) => formatCurrency(value)} />
          <Line type={"monotone"} dataKey={"balance"} stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

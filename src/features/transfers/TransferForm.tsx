import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { transferSchema, type TransferFormData } from "./transferSchema";
import { Button, Card, Input, Select } from "../../components/ui";
import { mockAccounts } from "../../services/mockData";
import { useState } from "react";
import TransferConfirmModal from "./TransferConfirmModal";

export default function TransferForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TransferFormData>({
    resolver: zodResolver(transferSchema),
  });

  const [pendingTransfer, setPendingTransfer] =
    useState<TransferFormData | null>(null);

  function handlePendingSubmit(data: TransferFormData) {
    setPendingTransfer(data);
  }

  function handleConfirmTransfer() {
    console.log(pendingTransfer);
    setPendingTransfer(null);
  }

  return (
    <>
      <Card className="max-w-md mx-auto">
        <form
          className="space-y-4"
          onSubmit={handleSubmit(handlePendingSubmit)}
        >
          <h2 className="text-xl font-bold text-gray-900">Money Transfer</h2>
          <div className="flex gap-2">
            <div className="flex-1">
              <Select
                label="From"
                options={mockAccounts.map((account) => ({
                  label: account.name,
                  value: account.id,
                }))}
                className="flex-1"
                {...register("fromAccountId")}
              />
              {errors.fromAccountId && (
                <p className="text-red-500 text-xs">
                  {errors.fromAccountId.message}
                </p>
              )}
            </div>
            <div className="flex-1">
              <Select
                label="To"
                options={mockAccounts.map((account) => ({
                  label: account.name,
                  value: account.id,
                }))}
                className="flex-1"
                {...register("toAccountId")}
              />
              {errors.toAccountId && (
                <p className="text-red-500 text-xs">
                  {errors.toAccountId.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <Input
              label="Amount"
              type="number"
              {...register("amount", { valueAsNumber: true })}
            />
            {errors.amount && (
              <p className="text-red-500 text-xs">{errors.amount.message}</p>
            )}
          </div>
          <div>
            <Input label="Description" {...register("description")} />
            {errors.description && (
              <p className="text-red-500 text-xs">
                {errors.description.message}
              </p>
            )}
          </div>
          <div className="mt-8 flex justify-end">
            <Button type="submit">Transfer</Button>
          </div>
        </form>
      </Card>
      <TransferConfirmModal
        pendingTransfer={pendingTransfer}
        onClose={() => setPendingTransfer(null)}
        onConfirm={handleConfirmTransfer}
      />
    </>
  );
}

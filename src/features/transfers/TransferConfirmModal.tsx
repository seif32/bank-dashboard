import { ArrowRight } from "lucide-react";
import { formatCurrency } from "../../utils";
import { Button, Modal } from "../../components/ui";
import { mockAccounts } from "../../services/mockData";
import type { TransferFormData } from "./transferSchema";

type TransferConfirmModalProps = {
  pendingTransfer: TransferFormData | null;
  onClose: () => void;
  onConfirm: () => void;
};

export default function TransferConfirmModal({
  pendingTransfer,
  onClose,
  onConfirm,
}: TransferConfirmModalProps) {
  return (
    <Modal isOpen={pendingTransfer !== null} onClose={onClose}>
      <p className="text-xl text-gray-900 font-bold text-center mb-4">
        Confirm Transfer?
      </p>
      <div className="flex justify-center items-center gap-4 py-4 border-b border-gray-100">
        <span className="font-semibold text-gray-900">
          {
            mockAccounts.find(
              (account) => account.id === pendingTransfer?.fromAccountId,
            )?.name
          }
        </span>
        <ArrowRight className="text-gray-400 w-5 h-5" />
        <span className="font-semibold text-gray-900">
          {
            mockAccounts.find(
              (account) => account.id === pendingTransfer?.toAccountId,
            )?.name
          }
        </span>
      </div>
      <div className="space-y-3">
        <div>
          <p className="text-xs text-gray-400">Amount</p>
          <p className=" font-bold text-2xl">
            {formatCurrency(pendingTransfer?.amount ?? 0)}
          </p>
        </div>
        {pendingTransfer?.description && (
          <div>
            <p className="text-xs text-gray-400">Description</p>
            <p className="">{pendingTransfer?.description}</p>
          </div>
        )}
      </div>
      <div className="flex justify-between mt-4">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onConfirm}>Confirm</Button>
      </div>
    </Modal>
  );
}

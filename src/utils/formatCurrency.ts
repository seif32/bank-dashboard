export default function formatCurrency(
  amount: number,
  currencyCode: string = "USD",
): string {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  }).format(amount);
}

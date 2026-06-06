export function convertCurrency(
  fromCode: string,
  toCode: string,
  rates: Record<string, number>,
  amount: number,
): number {
  const amountInUSD = amount / rates[fromCode];
  const result = amountInUSD * rates[toCode];

  return result;
}

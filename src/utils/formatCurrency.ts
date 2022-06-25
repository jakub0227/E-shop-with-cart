const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "PLN",
  style: "currency",
});

export const formatCurrency = (val: number) => {
  return CURRENCY_FORMATTER.format(val);
};

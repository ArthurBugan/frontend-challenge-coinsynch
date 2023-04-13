const coin = (value: number = 0) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "USD",
  }).format(value);

const percent = (value: number = 0) =>
  new Intl.NumberFormat("pt-BR", {
    style: "percent",
    maximumFractionDigits: 1,
    signDisplay: "always",
  }).format(value);

export { coin, percent };

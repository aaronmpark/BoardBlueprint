// Formats the currency.
// Ex: 5432      ---> $54.32 

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined,
    { currency: "USD", style: "currency" })

export function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number)
}
function convert() {
  const amount = document.getElementById('amount').value
  const from = document.getElementById('from').value
  const to = document.getElementById('to').value
  const exchangeRates = {
    USD: 1,
    EUR: 0.95,
    RUB: 0.025,
  }

  const convertedAmount = amount * exchangeRates[from] * exchangeRates[to]
  document.getElementById(
    'result'
  ).textContent = `${amount} ${from} = ${convertedAmount} ${to}`
}

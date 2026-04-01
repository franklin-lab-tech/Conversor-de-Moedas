const convertButton = document.querySelector('.convert-button')
const selectCurrency = document.querySelector('.select-currency')
const selectConvert = document.querySelector('.select-convert')

const currencies = {
  real: { name: 'Real', code: 'BRL', img: './assets/brasil 2-1.png', rate: 1.0, locale: 'pt-BR' },
  dolar: { name: 'Dólar Americano', code: 'USD', img: './assets/estados-unidos (1) 1.png', rate: 5.19, locale: 'en-US' },
  euro: { name: 'Euro', code: 'EUR', img: './assets/euro.png', rate: 6.01, locale: 'de-DE' },
  libra: { name: 'Libra', code: 'GBP', img: './assets/LIBRAS.png', rate: 6.88, locale: 'en-GB' },
  bitcoin: { name: 'Bitcoin', code: 'BTC', img: './assets/bitcoin 1.png', rate: 352.923, locale: 'en-US' },
  rubr: { name: 'Rublo Russo', code: 'RUB', img: './assets/rubro russo (1).png', rate: 0.064, locale: 'ru-RU' }
}

function formatCurrency(value, currencyKey) {
  const currency = currencies[currencyKey]
  return new Intl.NumberFormat(currency.locale, { style: 'currency', currency: currency.code }).format(value)
}

function convertValues() {
  const input = Number(document.querySelector('.input-currancy').value.replace(',', '.'))
  if (!input || input <= 0) {
    alert('Digite um valor válido maior que zero.')
    return
  }

  const fromCurrency = selectConvert.value
  const toCurrency = selectCurrency.value

  const valueInReal = input * currencies[fromCurrency].rate
  const convertedValue = valueInReal / currencies[toCurrency].rate

  document.querySelector('.coin-value-real').innerText = formatCurrency(input, fromCurrency)
  document.querySelector('.coin-value-dolar').innerText = formatCurrency(convertedValue, toCurrency)
}

function changeCurrency() {
  const fromCurrency = currencies[selectConvert.value]
  const toCurrency = currencies[selectCurrency.value]

  document.querySelector('.coin-real').innerText = fromCurrency.name
  document.querySelector('.real img').src = fromCurrency.img

  document.querySelector('.coin-dolar').innerText = toCurrency.name
  document.querySelector('.logo-coin-usa').src = toCurrency.img

  convertValues()
}

selectCurrency.addEventListener('change', changeCurrency)
selectConvert.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)

// Inicializa com os valores atuais
changeCurrency()

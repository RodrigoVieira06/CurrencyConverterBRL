export const environment = {
  production: true,
  CURRENCY_CONVERTER_API_BASE_URL: 'https://economia.awesomeapi.com.br',
  CURRENCY_CONVERTER_API_GET_ENDPOINT: '/json/last/CAD-BRL,ARS-BRL,GBP-BRL',
  INITIAL_CURRENCIES_MOCKDATA: [
    {
      name: 'Dólar Canadense',
      bid: '0.00',
      pctChange: '0',
      create_date: '00:00:00'
    },
    {
      name: 'Peso Argentino',
      bid: '0.00',
      pctChange: '0',
      create_date: '00:00:00'
    },
    {
      name: 'Libra Esterlina',
      bid: '0.00',
      pctChange: '0',
      create_date: '00:00:00'
    }
  ]
};

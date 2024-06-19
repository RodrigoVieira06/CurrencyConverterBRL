export type ICurrencyTypes = {
  [key: string]: ICurrency
}

export type ICurrency = {
  name: string;
  pctChange: string;
  bid: string;
  create_date: string;
  code?: string;
  codein?: string;
  high?: string;
  low?: string;
  varBid?: string;
  ask?: string;
  timestamp?: string;
}

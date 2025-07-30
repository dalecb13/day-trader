export type Account = {
  id: string;
  status: string;
  crypto_status: string;
  currency: string;
  buying_power: string;
  regt_buying_power: string;
  daytrading_buying_power: string;
  non_marginable_buying_power: string;
  cash: string;
  accrued_fees: string;
  pending_transfer_out: string | null;
  pending_transfer_in: string | null;
  portfolio_value: string;
  pattern_day_trader: boolean;
  trading_blocked: boolean;
  transfers_blocked: boolean;
  account_blocked: boolean;
  created_at: string; // ISO 8601
  trade_suspended_by_user: boolean;
  multiplier: string;
  shorting_enabled: boolean;
  equity: string;
  last_equity: string;
  long_market_value: string;
  short_market_value: string;
  initial_margin: string;
  maintenance_margin: string;
  last_maintenance_margin: string;
  sma: string;
  daytrade_count: number;
  options_buying_power: string;
  options_approved_level: number;
  options_trading_level: number;
};

export type CongressTrade = {
  Representative: string,
  BioGuideID: string,
  ReportDate: number,
  TransactionDate: number,
  Ticker: string,
  Transaction: string,
  Range: string,
  House: string,
  Amount: string,
  Party: string,
  last_modified: string, // YYYY-MM-DD
  TickerType: string,
  Description: string,
  ExcessReturn: number,
  PriceChange: number,
  SPYChange: number
}

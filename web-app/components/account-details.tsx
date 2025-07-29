import { Account } from "@/models";

type AccountDetailsProps = {
  account: Account
  isShowAllProperties: boolean
}

const formatCurrency = (value: string, currency: string) => {
  return `${currency} ${Number(value).toLocaleString()}`
}

const AccountDetails: React.FC<AccountDetailsProps> = ({ account, isShowAllProperties }) => {
  return (
    <div>
      <p>ID: {account.id}</p>
      <p>Status: {account.status}</p>
      <p>Cash: {formatCurrency(account.cash, account.currency)}</p>
      <p>Equity: {formatCurrency(account.equity, account.currency)}</p>
      <p>Daytrade Count: {account.daytrade_count}</p>
      <p>Today&apos;s growth: {formatCurrency(`${Number(account.equity) - Number(account.last_equity)}`, account.currency)}</p>

      {
        isShowAllProperties && (
          <pre>{JSON.stringify(account, null, 2)}</pre>
        )
      }
    </div>
  );
}

export default AccountDetails;

import AccountDetails from "@/components/account-details";
import TradeList from "@/components/trade-list";

export default async function Home() {
  const data = await fetch('http://127.0.0.1:8000/accounts')
  const accounts = await data.json()

  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20">
      <main className="flex flex-row gap-[32px] row-start-2 items-center sm:items-start">
        <div className="row-span-8">
          <AccountDetails account={accounts} isShowAllProperties={true} />
        </div>
        <div className="row-span-4">
          <TradeList />
        </div>
      </main>
    </div>
  );
}

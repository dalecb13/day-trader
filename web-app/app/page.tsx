import AccountDetails from "@/components/account-details";

export default async function Home() {
  const data = await fetch('http://127.0.0.1:8000/accounts')
  const accounts = await data.json()

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <AccountDetails account={accounts} isShowAllProperties={true} />
      </main>
    </div>
  );
}

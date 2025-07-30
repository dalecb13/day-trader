// nextjs refetch

import { CongressTrade } from "@/models"
import TradeListItem from "./trade-list-item"

export default async function TradeList() {
  const data = await fetch('http://127.0.0.1:8000/congress-trades', { next: { revalidate: 1 } })
  const trades: CongressTrade[] = await data.json()
  return (
    // <pre>
    //   {JSON.stringify(trades[0], null, 2)}
    // </pre>
    <div>
      {trades.map((trade, index) => (
        <TradeListItem key={index} congressTrade={trade} />
      ))}
    </div>
  )
}

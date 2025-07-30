import { CongressTrade } from "@/models"
import { convertTsToString } from "@/utils"

type CongressTradeListItemProps = {
  congressTrade: CongressTrade
}

const TradeListItem: React.FC<CongressTradeListItemProps> = ({ congressTrade }) => {
  return (
    <>
      <h3>{congressTrade.Representative} ({congressTrade.Party})</h3>
      <p>{convertTsToString(congressTrade.TransactionDate)}</p>
      <p>{congressTrade.Ticker}</p>
    </>
  )
}

export default TradeListItem;

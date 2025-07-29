import os
from dotenv import load_dotenv
from alpaca.trading.client import TradingClient

load_dotenv()
ALPACA_KEY_ID = os.getenv("APCA_API_KEY_ID")
ALPACA_SECRET_KEY = os.getenv("APCA_API_SECRET_KEY")
ALPACA_ENDPOINT = os.getenv("APCA_API_ENDPOINT")

trading_client = TradingClient(ALPACA_KEY_ID, ALPACA_SECRET_KEY, paper=True)
account = trading_client.get_account()

print(account)

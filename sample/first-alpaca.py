import requests
import os
from dotenv import load_dotenv
from alpaca.trading.client import TradingClient

load_dotenv()
ALPACA_KEY_ID = os.getenv("APCA_API_KEY_ID")
ALPACA_SECRET_KEY = os.getenv("APCA_API_SECRET_KEY")
ALPACA_ENDPOINT = os.getenv("APCA_API_ENDPOINT")

# ALPACA_ACCOUNT_ENDPOINT = f"{ALPACA_ENDPOINT}/account"

# account_request = requests.get(ALPACA_ACCOUNT_ENDPOINT, auth=(ALPACA_KEY_ID, ALPACA_SECRET_KEY))

# print(account_request.json())

trading_client = TradingClient(ALPACA_KEY_ID, ALPACA_SECRET_KEY, paper=True)
account = trading_client.get_account()

print(account)
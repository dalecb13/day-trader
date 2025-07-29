import os
from dotenv import load_dotenv
from alpaca.trading.client import TradingClient
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()
ALPACA_KEY_ID = os.getenv("APCA_API_KEY_ID")
ALPACA_SECRET_KEY = os.getenv("APCA_API_SECRET_KEY")
ALPACA_ENDPOINT = os.getenv("APCA_API_ENDPOINT")

app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/accounts")
def read_accounts():
    trading_client = TradingClient(ALPACA_KEY_ID, ALPACA_SECRET_KEY, paper=True)
    account = trading_client.get_account()
    return account

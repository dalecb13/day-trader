#./bin/python3

#Import the package
import quiverquant
import os
from dotenv import load_dotenv 
load_dotenv()
token = os.getenv("QUIVERQUANT_AUTH_TOKEN")

#Connect to the API using your token
#Replace <TOKEN> with your token
quiver = quiverquant.quiver(token)

#Get recent trades by members of U.S. Congress
dfCongress = quiver.congress_trading()

#Get trades of a Tesla by members of congress
dfCongress_Tesla = quiver.congress_trading("TSLA")

#Get trades made by U.S. Senator Richard Burr
dfCongress_Burr = quiver.congress_trading("Dan Meuser", politician=True)

#Get recent corporate lobbying
dfLobbying = quiver.lobbying()

#Get corporate lobbying by Apple
dfLobbying_Apple = quiver.lobbying("AAPL")

#Get data on government contracts
dfContracts = quiver.gov_contracts()

#Get data on government contracts to Lockheed Martin
dfContracts_Lockheed = quiver.gov_contracts("LMT")

#Get data on off-exchange short volume
dfOTC = quiver.offexchange()

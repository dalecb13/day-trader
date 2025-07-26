# Auto Trader

## Description

BROOOOOOOOO

- Use Quiver Quantitative API to get info on trades from Congressmen and other high profile people
- Use a stock market simulator to buy/sell according to a collection of people

## Architecture

Cron job that calls a NodeJS script that

1. Calls Quiver Quant
2. Pulls in config
3. Makes decision
4. Sends trade request to Investopedia
5. Write digest to Opensearch

Pre-cron

1. Create library in NodeJS that hits Investopedia API translated from the Python API
2. Create a config file
3. Read in config file
4. Write code to make decision
5. Write code that writes to Opensearch
6. Write code that is able to filter based on config--config file needs a version or date or at least needs to be written

#!/usr/bin/env python3

import os
import yaml
from dotenv import load_dotenv
import ita
from opensearchpy import OpenSearch

load_dotenv()  # take environment variables from .env.
INVESTOPEDIA_EMAIL = os.getenv('INVESTOPEDIA_EMAIL')
INVESTOPEDIA_PASSWORD = os.getenv('INVESTOPEDIA_PASSWORD')

ALGORITHM_PARAMETERS_INDEX = 'algorithm-parameters'
ALGORITHM_PARAMETERS_INDEX = {
  'settings': {
    'index': {
      'number_of_shards': 4
    }
  }
}

# function that reads in a yaml file called config.yml
def read_config():
  with open('config.yml', 'r') as file:
    config = yaml.safe_load(file)
  return config

def create_opensearch_client():
  host = 'localhost'
  port = 9200
  auth = ('admin', 'admin') # For testing only. Don't store credentials in code.
  ca_certs_path = '/Users/dalec/projects/auto-trader/root-ca.pem' # Provide a CA bundle if you use intermediate CAs with your root CA.

  # Create the client with SSL/TLS enabled, but hostname verification disabled.
  client = OpenSearch(
      hosts = [{'host': host, 'port': port}],
      http_compress = True, # enables gzip compression for request bodies
      http_auth = auth,
      use_ssl = True,
      verify_certs = True,
      # use_ssl = False,
      # verify_certs = False,
      ssl_assert_hostname = False,
      ssl_show_warn = False,
      ca_certs = ca_certs_path
  )

  return client


def main():
  config = read_config()
  print(config)

  client = create_opensearch_client()

  if not client.indices.exists(ALGORITHM_PARAMETERS_INDEX):
    response = client.indices.create(ALGORITHM_PARAMETERS_INDEX, body=ALGORITHM_PARAMETERS_INDEX)
    print(response)

if __name__ == "__main__":
  main()
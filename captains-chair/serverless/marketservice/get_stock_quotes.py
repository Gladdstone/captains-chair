import json, os, requests

TRADIER_ACCESS_TOKEN = os.environ['TRADIER_ACCESS_TOKEN']


def get_stock_quotes(event, context):
  symbols = event['pathParameters']['symbols']
  headers = {
    'accept': 'application/json',
    'authorization': 'Bearer ' + TRADIER_ACCESS_TOKEN
  }
  payload = {
    'symbols': symbols
  }
  res = requests.post('https://sandbox.tradier.com/v1/markets/quotes', headers=headers, data=payload)
  json_response = res.json()

  return {
    'statusCode': 200,
    'body': json.dumps(json_response)
  }

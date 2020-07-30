from flask_restful import Resource, reqparse

import json, requests

from settings import TRADIER_ACCESS_TOKEN


parser = reqparse.RequestParser()
parser.add_argument('symbols', action='append', required=False)

class get_stock_quotes(Resource):
  def post(self):
    parsed_args = parser.parse_args()
    symbols = (',').join(parsed_args['symbols'])
    headers = {
      'accept': 'application/json',
      'authorization': 'Bearer ' + TRADIER_ACCESS_TOKEN
    }
    payload = {
      'symbols': symbols
    }
    res = requests.post('https://sandbox.tradier.com/v1/markets/quotes', headers=headers, data=payload)
    json_response = res.json()
    return json_response
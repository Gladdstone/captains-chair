from datetime import date
import json


def get_date(event, context):
  current_date = date.today()
  today = {
    'date': current_date.strftime("%m/%d/%Y")
  }

  return {
    'statusCode': 200,
    'body': json.dumps(today)
  }

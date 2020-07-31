from datetime import date
import json


def get_date_long(event, context):
  current_date = date.today()
  today = {
    'date': current_date.strftime('%d %B, %Y')
  }

  return {
    'statusCode': 200,
    'body': json.dumps(today)
  }

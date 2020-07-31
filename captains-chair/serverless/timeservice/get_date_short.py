from datetime import date
import json


def get_date_short(event, context):
  current_date = date.today()
  today = {
    'date': current_date.strftime('%m/%d/%y')
  }

  return {
    'statusCode': 200,
    'body': json.dumps(today)
  }

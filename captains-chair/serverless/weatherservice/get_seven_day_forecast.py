import json, os, requests

OPEN_WEATHER_ACCESS_TOKEN = os.environ['OPEN_WEATHER_ACCESS_TOKEN']


def get_seven_day_forecast(event, context):
  res = requests.get(f'https://api.openweathermap.org/data/2.5/forecast/daily?zip=14620,us&appid={OPEN_WEATHER_ACCESS_TOKEN}')
  json_response = json.loads(res.content)

  forecast = json_response['list']
  daily_forecast = []
  for i in range(7):
    day = {
      'weather': forecast[i]['weather'][0]['main'],
      'icon': forecast[i]['weather'][0]['icon'],
      'min': forecast[i]['temp']['min'],
      'max': forecast[i]['temp']['max']
    }
    daily_forecast.append(day)

  output = {
    'list': daily_forecast
  }

  return {
    'statusCode': 200,
    'body': json.dumps(output)
  }

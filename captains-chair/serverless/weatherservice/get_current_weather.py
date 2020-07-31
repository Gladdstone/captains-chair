import json, os, requests

OPEN_WEATHER_ACCESS_TOKEN = os.environ['OPEN_WEATHER_ACCESS_TOKEN']


def get_current_weather(event, context):
  res = requests.get(f'https://api.openweathermap.org/data/2.5/weather?zip=14620,us&appid={OPEN_WEATHER_ACCESS_TOKEN}')
  json_response = json.loads(res.content)

  output = {
    'weather': json_response['weather'][0]['main'],
    'icon': json_response['weather'][0]['icon'],
    'temp': json_response['main']['temp'],
    'feels_like': json_response['main']['feels_like'],
    'humidity': json_response['main']['humidity'],
    'sunrise': json_response['sys']['sunrise'],
    'sunset': json_response['sys']['sunset']
  }

  return {
    'statusCode': 200,
    'body': json.dumps(output)
  }

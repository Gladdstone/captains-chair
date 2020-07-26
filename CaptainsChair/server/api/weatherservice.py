from flask_restful import Resource

import json, requests

from settings import OPEN_WEATHER_ACCESS_TOKEN

class get_current_weather(Resource):
  def get(self):
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

    return output

class get_seven_day_forecast(Resource):
  def get(self):
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

    return output

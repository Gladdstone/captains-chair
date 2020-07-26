from flask import Flask
from flask_restful import Api
from dotenv import load_dotenv

# Local
from api import weatherservice, timeservice, twitterservice, nestservice


load_dotenv('.env')

app = Flask(__name__)
api = Api(app)

# api urls
LOCAL_URL = 'http://localhost:5000'

API_WEATHER_CURRENT = '/weather/current'
API_WEATHER_SEVEN_DAY = '/weather/seven-day'
API_DATE = '/date'
API_DATE_LONG = '/date/long'
API_DATE_SHORT = '/date/short'
API_TWITTER_TRENDS = '/twitter/trends'
API_NEST_MOTION = '/nest/motion'

# Nest Service
api.add_resource(nestservice.get_has_motion, API_NEST_MOTION)
# Time Service
api.add_resource(timeservice.get_date, API_DATE)
api.add_resource(timeservice.get_date_long, API_DATE_LONG)
api.add_resource(timeservice.get_date_short, API_DATE_SHORT)
# Twitter Service
api.add_resource(twitterservice.get_top_50, API_TWITTER_TRENDS)
# Weather Service
api.add_resource(weatherservice.get_current_weather, API_WEATHER_CURRENT)
api.add_resource(weatherservice.get_seven_day_forecast, API_WEATHER_SEVEN_DAY)

if __name__ == "__main__":
  # app.run(host='0.0.0.0')    # Dockerized
  app.run(debug=True)    # Debug
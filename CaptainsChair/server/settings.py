import os
from dotenv import load_dotenv

load_dotenv('.env')

CONSUMER_KEY = os.getenv('CONSUMER_KEY')
CONSUMER_SECRET = os.getenv('CONSUMER_SECRET')
ACCESS_TOKEN = os.getenv('ACCESS_TOKEN')
ACCESS_TOKEN_SECRET = os.getenv('ACCESS_TOKEN_SECRET')
OPEN_WEATHER_ACCESS_TOKEN = os.getenv('OPEN_WEATHER_ACCESS_TOKEN')

WOEID = os.getenv('WOEID')

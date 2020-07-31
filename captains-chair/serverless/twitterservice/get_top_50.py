import tweepy

import json, os

CONSUMER_KEY = os.environ['CONSUMER_KEY']
CONSUMER_SECRET = os.environ['CONSUMER_SECRET']
ACCESS_TOKEN = os.environ['ACCESS_TOKEN']
ACCESS_TOKEN_SECRET = os.environ['ACCESS_TOKEN_SECRET']
WOEID = os.environ['WOEID']


def authenticate(f):
  def wrapped(*args, **kwargs):
    auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
    auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)

    api = tweepy.API(auth)
    new_args = (*args, api)
    r = f(*new_args, **kwargs)
    return r
  return wrapped

@authenticate
def get_top_50(event, context):
  json_response = api.trends_place(WOEID)

  return {
    'statusCode': 200,
    'body': json.dumps(output)
  }

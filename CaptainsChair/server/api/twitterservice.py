from flask_restful import Resource
import tweepy

import json

from settings import CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET, WOEID


def authenticate(f):
  def wrapped(*args, **kwargs):
    auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
    auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)

    api = tweepy.API(auth)
    new_args = (*args, api)
    r = f(*new_args, **kwargs)
    return r
  return wrapped

class get_top_50(Resource):
  @authenticate
  def get(self, api):
    json_response = api.trends_place(WOEID)

    return json_response

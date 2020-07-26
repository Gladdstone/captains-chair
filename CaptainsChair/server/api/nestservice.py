from flask_restful import Resource

import hashlib, json, requests


def authenticate(f):
  def wrapped(*args, **kwargs):
    payload = {
      'code': 'code',
      'client_id': 'client_id',
      'client_secret': 'client_secret',
      'grant_type': 'authorization_code'
    }
    headers = { 'content-type': "application/x-www-form-urlencoded" }


    res = requests.post('https://api.home.nest.com/oauth2/access_token', params=payload, headers=headers)
    json_response = json.load(res.content)

    access_token = json_response['access_token']

    new_args = (*args, access_token)
    r = f(*new_args, **kwargs)
    return r
  return wrapped

# class first_time_setup(Resource):
#   def get(self):
#     state = hashlib.md5(os.urandom(32)).hexdigest()
#     AUTHORIZATION_URL = 'https://home.nest.com/login/oauth2?client_id={0}&state={1}'

#     payload = {
#       'code': 'code',
#       'client_id': 'client_id',
#       'client_secret': 'client_secret',
#       'grant_type': 'authorization_code'
#     }
#     headers = { 'content-type': "application/x-www-form-urlencoded" }


class get_has_motion(Resource):
  @authenticate
  def get(self, access_token):
    headers = {'authorization': "Bearer {0}".format(access_token)}
    res = requests.get('https://developer-api.nest.com/devices/cameras/device_id/last_event/has_motion', headers=headers)
    json_response = json.load(res.content)

    output = { 'has_motion': json_response['devices']['cameras']['device_id']['last_event'] }
    return output

class get_web_url(Resource):
  @authenticate
  def get(self, access_token):
    headers = {'authorization': "Bearer {0}".format(access_token)}
    res = requests.get('https://developer-api.nest.com/devices/cameras/device_id/web_url', headers=headers)
    json_response = json.load(res.content)

    output = { 'web_url': json_response['devices']['cameras']['device_id']['web_url'] }
    return output

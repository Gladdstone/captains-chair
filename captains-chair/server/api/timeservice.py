from flask_restful import Resource

from datetime import date
import json


class get_date(Resource):
  def get(self):
    current_date = date.today()
    today = {
      'date': current_date.strftime("%m/%d/%Y")
    }

    return today

class get_date_long(Resource):
  def get(self):
    current_date = date.today()
    today = {
      'date': current_date.strftime('%d %B, %Y')
    }

    return today

class get_date_short(Resource):
  def get(self):
    current_date = date.today()
    today = {
      'date': current_date.strftime('%m/%d/%y')
    }

    return today
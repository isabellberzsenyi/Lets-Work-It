from flask import Flask, request
import json
import os
import time
from .classes import Workout
from .generate_workout import generate_workout

app = Flask(__name__, static_folder='../build', static_url_path='/')

@app.route('/', methods=['GET'])
def index():
    return app.send_static_file('index.html')

if __name__ == "__main__":
  app.run(host='0.0.0.0',
  debug=False,
  port=os.environ.get('PORT', '5000'))

WORKOUT = Workout()

from .routes import *
from flask import Flask
from app.classes import Workout

app = Flask(__name__)

WORKOUT = Workout()

from app import routes
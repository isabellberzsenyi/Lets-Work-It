import time
import json
import ast
from flask import Flask, request

app = Flask(__name__)
GLOBAL = ''

@app.route('/time')
def get_current_time():
    return {'time': GLOBAL}

@app.route('/send', methods=['POST'])
def get_form():
    if request.method == 'POST':
        decoded_data = request.data.decode('utf-8')
        form = json.loads(decoded_data)
        print(form)
        return "1"

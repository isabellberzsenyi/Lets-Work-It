from .app import app, WORKOUT
import time
import json
from flask import request, jsonify
from .generate_workout import generate_workout

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

@app.route('/result', methods=['GET'])
def get_workout_result():
    result = {
        "workout_type": WORKOUT.workout_type,
        "exercises": WORKOUT.exercises,
        "reps": WORKOUT.reps,
        "sets": WORKOUT.sets,
    }
    return jsonify(result)

@app.route('/send', methods=['GET', 'POST'])
def get_form():
    if request.method == 'POST':
        decoded_data = request.data.decode('utf-8')
        form = json.loads(decoded_data)
        result_workout = generate_workout(form)
        WORKOUT.workout_type = form['type']
        WORKOUT.exercises = result_workout["exercises"]
        if form['type'] == 'circuit':
            WORKOUT.reps = result_workout["reps"]
            WORKOUT.sets = result_workout["sets"]
        else:
            WORKOUT.reps = []
            WORKOUT.sets = 0
    return jsonify({'result': 'ok!'})
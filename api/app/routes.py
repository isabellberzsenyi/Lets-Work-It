from app import app, WORKOUT
import time
import json
import ast
from flask import request
from generate_workout import generate_workout

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/result')
def get_workout_result():
    return {
        "workout_type": WORKOUT.workout_type,
        "exercises": WORKOUT.exercises,
        "reps": WORKOUT.reps,
        "sets": WORKOUT.sets,
    }

@app.route('/send', methods=['POST'])
def get_form():
    if request.method == 'POST':
        decoded_data = request.data.decode('utf-8')
        form = json.loads(decoded_data)
        result_workout = generate_workout(form)
        WORKOUT.workout_type = form['type']
        print(WORKOUT.workout_type)
        WORKOUT.exercises = result_workout["exercises"]
        if form['type'] == 'circuit':
            WORKOUT.reps = result_workout["reps"]
            WORKOUT.sets = result_workout["sets"]
        else:
            WORKOUT.reps = 0
            WORKOUT.sets = 0
        print("w", WORKOUT.exercises, WORKOUT.reps, WORKOUT.sets)
    return "1"
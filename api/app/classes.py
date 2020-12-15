
import json
class Workout:
    def __init__(self, workout_type = '', exercises = [], reps = [], sets = 0):
        self.exercises = exercises
        self.reps = reps
        self.sets = sets
        self.workout_type = workout_type

    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, 
            sort_keys=True, indent=4)

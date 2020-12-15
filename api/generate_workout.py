import csv
import pandas
from io import StringIO
from random import randint

def get_exercise(part, names, dumbbells):
    grouped_names = {}
    exercises = {}

    for n in names:
        if n in grouped_names:
            val = grouped_names[n]
            grouped_names[n] = val + 1
        else:
            grouped_names[n] = 1

    for name, num in grouped_names.items():
        if num > 0:
            with open('exercises.csv', 'r') as file:
                df = pandas.read_csv(file) #change file to filepath
                filtered_csv = ""
                
                if part:
                    if dumbbells:
                        filtered_csv = df[(df.Part == name)].to_csv(sep=',',index=False)
                    else:
                        filtered_csv = df[(df.Part == name) & (df.Dumbbells == 0)].to_csv(sep=',',index=False)
                else:
                    if dumbbells:
                        filtered_csv = df[(df.Movement == name)].to_csv(sep=',',index=False)
                    else:
                        filtered_csv = df[(df.Movement == name) & (df.Dumbbells == 0)].to_csv(sep=',',index=False)

                filtered_list = pandas.read_csv(StringIO(filtered_csv), usecols=['Exercise']) # dataframe
                flat_list = [item for sublist in filtered_list.values.tolist() for item in sublist]
                # print(name, flat_list)

                random_nums = []
                while num > 0:
                    rand_num = randint(0, 100)
                    rand_num = rand_num % len(flat_list)
                    while rand_num in random_nums:
                        rand_num = randint(0, 100)
                        rand_num = rand_num % len(flat_list)
                    random_nums.append(rand_num)
                    num = num - 1
                    exercises[flat_list[rand_num]] = name
    return exercises

def get_reps(exercises):
    reps = []
    for e in exercises:
        if e == 'legs':
            reps.append(12)
        elif e == 'core':
            reps.append(20)
        else:
            reps.append(10)
    return reps

def interval_workout(length, dummbbells):
    num_ex = int(int(length) / 5)
    exercise_types = ['legs', 'chest', 'shoulders', 'back', 'arms', 'core']
    for i in range(num_ex - 6):
        if i == 0:
            exercise_types.append('legs')
        elif i == 1:
            exercise_types.append('core')
        elif i == 2:
            exercise_types.append('core')
    
    exercise_dict = get_exercise(1, exercise_types, dummbbells)
    exercises = list(exercise_dict.keys())

    result = {
        'exercises': exercises
    }
    return result

def circuit_workout(group, difficulty, dumbbells):
    reps = []
    exercises = []
    exercise_types = []
    if group == 'full-body':
        exercise_types = ['legs', 'pull', 'push', 'core', 'core']
    elif group == 'upper-body':
        exercise_types = ['chest', 'shoulders', 'arms', 'back', 'core']
    else:
        exercise_types = ['legs', 'legs', 'legs', 'core', 'core']
    
    if difficulty == 'hard':
        if group == 'full-body' or group == 'lower-body':
            exercise_types.append('legs')
        elif group == 'upper-body':
            exercise_types.append('core')

    if group == 'full-body':
        exercise_dict = get_exercise(0, exercise_types, dumbbells)
        exercises = list(exercise_dict.keys())
        reps = get_reps(list(exercise_dict.values()))
    else:
        exercise_dict = get_exercise(1, exercise_types, dumbbells)
        exercises = list(exercise_dict.keys())
        reps = get_reps(list(exercise_dict.values()))

    sets = 3
    if difficulty == 'medium' or difficulty == 'hard':
        sets = 4

    result = {
        'exercises': exercises,
        'reps': reps,
        'sets': sets,
    }
    return result

def generate_workout(workout_form):
    workout_type = workout_form['type']
    length = workout_form['length']
    difficulty = workout_form['difficulty']
    group = workout_form['group']
    dumbbells = workout_form['dumbbells']

    workout = {}
    if workout_type == 'interval':
        workout = interval_workout(length, dumbbells)
    else:
        workout = circuit_workout(group, difficulty, dumbbells)
    return workout
    # print(workout)

# print(circuit_workout('upper-body', 'medium', 0))



    
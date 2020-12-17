import React, { useState, useEffect } from "react";
import Button from "reactstrap/lib/Button";
import RoutineSection from "./routine-section.jsx";
import Set from "./set.jsx";
import { useHistory } from "react-router-dom";
import { warmUpText, warmUpExercises, coolDownText, coolDownExercises } from "../info";

const WorkoutResult = () => {
  let history = useHistory();
  const [workoutType, setWorkoutType] = useState();
  const [exercises, setExercises] = useState([]);
  const [reps, setReps] = useState([]);
  const [sets, setSets] = useState(0);

  async function getResult() {
    try {
      await fetch("/result")
        .then((res) => res.json())
        .then((data) => {
          setWorkoutType(data.workout_type);
          setExercises(data.exercises);
          setReps(data.reps);
          setSets(data.sets);
        });
    } catch (e) {
      return;
    }
  }
  useEffect(async () => {
    getResult();
  }, []);

  return (
    <div className='container component'>
      <div className='row'>
        <div className='col-sm-2 col-sm-offset-1'>
          <Button id='back-button' onClick={() => history.push("/")}>
            Back
          </Button>
        </div>
        <div className='col-sm-6'>
          <p>Here's your personalized type group workout!</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-8 col-sm-offset-2 workout-result'>
          <RoutineSection
            title='Warm Up'
            sectionDescription={warmUpText}
            bullets={warmUpExercises}
          />
          {workoutType === "circuit" && (
            <Set workout_type={workoutType} setNum='3' exercises={exercises} reps={reps} />
          )}
          {workoutType === "interval" && <Set workout_type={workoutType} exercises={exercises} />}
          <RoutineSection
            title='Cool Down'
            sectionDescription={coolDownText}
            bullets={coolDownExercises}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkoutResult;

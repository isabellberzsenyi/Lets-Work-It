import React, { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import Button from "reactstrap/lib/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";

const WorkoutForm = () => {
  let history = useHistory();
  const [type, setType] = useState(null);
  const [length, setLength] = useState("30");
  const [difficulty, setDifficulty] = useState(null);
  const [group, setGroup] = useState(null);
  const [dumbbells, setDumbbells] = useState(null);
  const [valid, setValid] = useState(true);

  function validateForm() {
    if (type === "interval") {
      return length != null && group != null;
    } else if (type === "circuit") {
      return difficulty != null && group != null;
    } else {
      return false;
    }
  }

  function showError(section) {
    let errorMessage = "";
    switch (section) {
      case "type":
        errorMessage = "workout type";
        break;
      case "difficulty":
        errorMessage = "difficulty level";
        break;
      case "group":
        errorMessage = "muscle group";
        break;
      default:
        errorMessage = "";
        break;
    }
    return !valid ? (
      <div className='col-sm-6'>
        <p className='error'>Please select a {errorMessage}!</p>
      </div>
    ) : null;
  }

  async function sendData() {
    if (validateForm()) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: type,
          length: length,
          difficulty: difficulty,
          group: group,
          dumbbells: dumbbells,
        }),
      };

      try {
        await fetch("/send", requestOptions).then((response) => response.json());
      } catch (e) {
        history.push("/oops");
        return;
      }

      history.push("/workout");
    } else {
      setValid(false);
    }
  }

  return (
    <div>
      <Form className='workout-form'>
        <h2 id='form-title'>Let's get to it</h2>
        <FormGroup tag='fieldset' className='form-group'>
          <Label className='form-labels'>Choose your Workout Type:</Label>
          <FormGroup check>
            <Label check className='labels'>
              <Input
                type='radio'
                name='type'
                className='opt'
                onClick={() => {
                  setType("interval");
                  setGroup("full-body");
                }}
              />
              Interval
            </Label>
            <Label check className='labels'>
              <Input type='radio' name='type' className='opt' onClick={() => setType("circuit")} />
              Circuit
            </Label>
          </FormGroup>
          {type === null && showError("type")}
        </FormGroup>
        {type === "interval" && (
          <FormGroup className='form-group'>
            <Label className='form-labels'>Choose your Workout Length:</Label>
            <Input
              style={{ width: "50%" }}
              type='select'
              name='length'
              onChange={(event) => {
                setLength(event.target.value);
              }}>
              <option value='30'>30 mins</option>
              <option value='35'>35 mins</option>
              <option value='40'>40 mins</option>
              <option value='45'>45 mins</option>
            </Input>
          </FormGroup>
        )}
        {type === "circuit" && (
          <FormGroup className='form-group'>
            <Label className='form-labels'>Choose your Workout Difficulty:</Label>
            <FormGroup check>
              <Label check className='labels'>
                <Input
                  type='radio'
                  name='difficulty'
                  className='opt'
                  onClick={() => setDifficulty("easy")}
                />
                Easy
              </Label>
              <Label check className='labels'>
                <Input
                  type='radio'
                  name='difficulty'
                  className='opt'
                  onClick={() => setDifficulty("medium")}
                />
                Medium
              </Label>
              <Label check className='labels'>
                <Input
                  type='radio'
                  name='difficulty'
                  className='opt'
                  onClick={() => setDifficulty("difficult")}
                />
                Hard
              </Label>
            </FormGroup>
            {difficulty === null && showError("difficulty")}
          </FormGroup>
        )}
        <FormGroup className='form-group'>
          <Label className='form-labels'>Choose your Muscle Group:</Label>
          <FormGroup check>
            <Label check className='labels'>
              <Input
                type='radio'
                name='group'
                className='opt'
                checked={type === "interval" || group === "full-body"}
                onChange={() => setGroup("full-body")}
              />
              Full Body
            </Label>
            <Label check className='labels'>
              <Input
                type='radio'
                name='group'
                className='opt'
                disabled={type === "interval"}
                onChange={() => setGroup("upper-body")}
              />
              Upper Body
            </Label>
            <Label check className='labels'>
              <Input
                type='radio'
                name='group'
                className='opt'
                disabled={type === "interval"}
                onChange={() => setGroup("lower-body")}
              />
              Lower Body
            </Label>
          </FormGroup>
          {group === null && showError("group")}
        </FormGroup>
        <FormGroup check>
          <Label check className='labels'>
            <Input type='checkbox' onClick={() => setDumbbells(!dumbbells)} />
            Use Dumbbells
          </Label>
        </FormGroup>
        <FormGroup
          check
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Button
            id='form-button'
            onClick={(e) => {
              // e.preventDefault;
              sendData();
            }}>
            Work It
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default WorkoutForm;

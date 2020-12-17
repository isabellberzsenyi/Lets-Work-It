import React from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

const Oops = () => {
  let history = useHistory();
  return (
    <div>
      <div className='row'>
        <div className='col-sm-8 col-sm-offset-2'>
          <h3>Oh no, something went wrong!</h3>
          <p>Please try again later.</p>
          <Button id='form-button' onClick={() => history.push("/")}>
            Back Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Oops;

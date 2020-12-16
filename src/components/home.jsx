import React from "react";
import WorkoutForm from "./workout-form.jsx";

const Home = () => {
  return (
    <div className='container component'>
      <div className='row'>
        <div className='col-md-6 col-md-offset-3'>
          <p>
            It can be daunting to create your own workout, and we all know it’d be way easier if
            someone just told you what muscles to work out. That’s why we have <b>Work It!</b> Work
            It allows you chose your workout settings and in return get a personalized workout,
            including recommendations for your warm up and cool down.
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-8 col-md-offset-2'>
          <WorkoutForm />
        </div>
      </div>
    </div>
  );
};

export default Home;

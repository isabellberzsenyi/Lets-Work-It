import React from "react";

const RoutineSection = (props) => {
  return (
    <div>
      <div className='row'>
        <div className='col-sm-12'>
          <h5 style={{ fontSize: "32px" }}>{props.title}</h5>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12' id='section-description'>
          {props.sectionDescription}
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-10'>
          <ul className='list-item ml-1'>
            {props.bullets.map((bullet) => (
              <li>
                <p>{bullet}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoutineSection;

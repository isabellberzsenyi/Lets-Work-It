import React from 'react';
import WorkoutForm from './workout-form';

function Home() {
	return (
		<div className='container component'>	
			<div className="row">
				<div className="col-md-6 col-md-offset-3">
					<p>
						Lorem ipsu dolor sit amet, consectetur adipiscing elit. Nunc
						maximus, nulla ut commodo sagittis, sapien dui mattis dui, non
						pulvinar lorem felis nec erat Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nunc maximus, nulla ut commodo
						sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat
						pulvinar lorem felis nec erat Lorem ipsum dolor sit amet,
					</p>
				</div>
			</div>	
			<div className="row">
				<div className="col-md-8 col-md-offset-2">
					<WorkoutForm />
				</div>
			</div>
		</div>
	);
}

export default Home;

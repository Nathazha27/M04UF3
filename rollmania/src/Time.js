import './Time.css';
import { useState } from 'react';

function Time() {

	let [number, setNumber] = useState(5);

	function countdown()
	{
		setNumber(number);
	}

	return (
		<div className="Time">
			<p className="TimeNumber">{number}</p>	
		</div>
	);
}

export default Time;

import './Die.css';
import { useState } from 'react';

function Die() {

	let [number, setNumber] = useState(1);

	function roll()
	{
		let number = Math.floor(Math.random() * (7 - 1) + 1);
		setNumber(number);
	}

	return (
		<button className="Die" onClick={roll}>
			<p className="DieNumber">{number}</p>	
		</button>
	);
}

export default Die;

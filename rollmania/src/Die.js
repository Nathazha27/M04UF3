import './Die.css';
import { useState } from 'react';

function Die(props) {

	let [number, setNumber] = useState("-");

	function get_random()
	{
		let number = Math.floor(Math.random() * 6 + 1);
		return number;
	}

	function set_random (){
		let r = get_random();
		setNumber(r);
	}

	if (props.roll){
		setNumber(get_random());
	}

	return (
		<button className="Die" onClick={set_random}>
			<p className="DieNumber">{number}</p>	
		</button>
	);
}

export default Die;

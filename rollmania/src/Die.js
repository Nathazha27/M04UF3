import './Die.css';
import { useState } from 'react';
import {useEffect } from 'react';

function Die(props) {

	let [number, setNumber] = useState("-");
	let [isRolling,setRoll] =useState(false);

	function get_random()
	{
		let number = Math.floor(Math.random() * 6 + 1);
		return number;
	}

	function set_random (){
		let r = get_random();
		setNumber(r);
	}
	useEffect(() => {
		if (props.roll){
			setNumber(get_random());
		}
	},[props.roll]);

	return (
		<button className="Die" onClick={set_random}>
			<p className="DieNumber">{number}</p>	
		</button>
	);
}

export default Die;

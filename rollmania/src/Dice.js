import './Dice.css';
import Die from './Die.js';
import {useRef} from 'react';

function Dice(props) {
	const total = useRef(0);
	const counter = useRef(0);

	function add_result (value) {
		total.current += value;
		console.log(value+" "+total.current);
		counter.current++;
		if (counter.current == props.quantity){
			props.onTotal(total.current);
		}
	}
	function get_dice (quantity, roll){
		let dice_list = [];

		for (let i = 0; i < quantity; i++){
			dice_list.push(<Die key={i} roll={roll} onResult={add_result} />);
		}
		return dice_list;
	}
	return (
		<section className="Dados">
			{get_dice(props.quantity, props.roll)}
		</section>
	);
}

export default Dice;

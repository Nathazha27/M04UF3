import './Dice.css';
import Die from './Die.js';
import React from 'react';

function get_dice (quantity, roll) {
	let dice_list = [];
	for (let i = 0; i < quantity; i++){
		dice_list.push(<Die key={i} roll={roll}/>);
	}
return dice_list;	
}

function Dice(props) {
	return (
		<section className="Dados">
			{get_dice(props.quantity, props.roll)}	
		</section>
	);
}

export default Dice;

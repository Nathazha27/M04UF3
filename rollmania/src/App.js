import './App.css';
import Title from './Title.js';
import Dice from './Dice.js';
import Roll from './Roll.js';
import Score from './Score.js';

import {useState} from 'react';

function App() {
	let [roll,setRoll] = useState(false);
	function roll_dice (click) {
		setRoll(true);
	}
	let click = false;
	return (
		<main className="App">
			<Title text="ROLLMANIA"/>
			<Dice quantity="3" roll={roll}/>
			<Roll roll_func={roll_dice}/>
			<Score />
		</main>
	);
}

export default App;

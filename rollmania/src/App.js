import './App.css';
import Title from './Title.js';
import Dice from './Dice.js';
import Roll from './Roll.js';
import Score from './Score.js';
import PlayerName from './PlayerName.js';

import {useState} from 'react';

function App() {
	let [roll,setRoll] = useState(false);
	function roll_dice () {
		setRoll(true);
		setTimeout(() => {
			setRoll(false);
		}, 1000);
	}
	let [playerset, setplayerset] = useState(false);
	function player_name (props){
			setplayername(true);
	}
	return (
		<main className="App">
			<Title text="ROLLMANIA"/>
			<PlayerName setname={player_name}/>
			<Dice quantity="3" roll={roll}/>
			<Roll roll_func={roll_dice}/>
			<Score />
		</main>
	);
}

export default App;

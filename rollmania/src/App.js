import './App.css';
import Title from './Title.js';
import Dice from './Dice.js';
import Roll from './Roll.js';
import Score from './Score.js';
import PlayerName from './PlayerName.js';

import {useState,useRef} from 'react';

function App() {
	const [roll,setRoll] = useState(false);
	const player_name = useRef("");
	const player_score = useRef(0);
	function roll_dice () {
		setRoll(true);
	}
	function set_player_name (name) {
		player_name.current = name;
		console.log("El nombre del jugador es: "+name);
	}
	function set_player_score (total) {
		player_score.current = total;
		console.log("Puntuación total: "+total);
	}
	return (
		<main className="App">
			<Title text="ROLLMANIA"/>
			<PlayerName onPlayerNameChange={set_player_name}/>
			<Dice quantity="3" roll={roll} onTotal={set_player_score}/>
			<Roll roll_func={roll_dice}/>
			<Score />
		</main>
	);
}
export default App;

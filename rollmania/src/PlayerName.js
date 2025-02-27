import './PlayerName.css';
import {useState} from 'react';

function PlayerName(props){
	let [player_name,setPlayerName] = useState("");
	let [playerset,setplayerset] = (false);
	function save_name(){
		setplayerset(true);
	}
	return (
		<p><input type="text" name="player_name" placeholder="Nombre del jugador"/> 
		<button onClick={props.}>Guardar</button></p>
	);
}
export default PlayerName;

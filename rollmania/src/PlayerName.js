import './PlayerName.css';
import {useState} from 'react';

function PlayerName(props){
	let [player_name,setPlayerName] = useState("");
	let [show_name,setShowName] =useState(false);
	let pl_name="Jugador: "+player_name;
	function update_name (event){
		setPlayerName(event.target.value);
	}
	function write_name(){
		let pl_tmp = player_name.trim();
		if (pl_tmp.length < 3 || pl_tmp.length > 12){
			return;
		}
		setShowName(true);
	}
	if (!show_name){
		return (
			<p className="input_nombre"><input type="text" name="player_name" placeholder="Nombre del jugador" onChange={update_name}/> 
			<button onClick={write_name}>Guardar</button></p>
		);
	}
	else{
		return (
			<p className="jugador"><strong>{pl_name}</strong></p>
		);
	}
}
export default PlayerName;

import './Score.css';
import ScoreItem from './ScoreItem.js';

function Score(props){
	let scores_json = localStorage.getItem("scores");
	let score_list = [];
	let scores_parsed = JSON.parse(scores_json);
	if (scores_parsed === null){
		scores_parsed = [];
	}
	for (let i =0; i < scores_parsed.length; i++){
		let name = scores_parsed[i].nombre;
		let score = scores_parsed[i].score;
		score_list.push(<ScoreItem player_name={name} player_score={score} key={i} />);
	}
	return(
		<div className="score_title">
			<h2>SCORE</h2>
			<ol>
				{score_list}
			</ol>
		</div>
	);
}
export default Score;

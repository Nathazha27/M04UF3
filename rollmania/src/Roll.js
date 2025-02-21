import './Roll.css';

function Roll(props) {
	return (
		<button className="Button" onClick={props.roll_func}>
			RollButton
		</button>
	);
}

export default Roll;

import './Roll.css';
import {useState,useEffect} from 'react';

function Roll(props) {
	let [count,setCount] = useState(5);
	useEffect(() => {
		setTimeout(() => {
			setCount(count-1);
		},1000);
	});
	return (
		<button className="Button" onClick={props.roll_func} disabled={count > 0 ? "true" : ""}>
			{count > 0 ? count : "Roll!!"}
		</button>
	);
}

export default Roll;

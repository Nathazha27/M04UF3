import './App.css';
import Die from './Die.js';
import Title from './Title.js';
import Time from './Time.js';

function App() {
	return (
		<main className="App">
			<Title />
		<section className="Dados">
			<Die />
			<Die />
		</section>
		<section className="Tiempo">
			<Time />
		</section>
		</main>
	);
}

export default App;

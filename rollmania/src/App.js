import './App.css';
import Die from './Die.js';
import Title from './Title.js';

function App() {
	return (
		<main className="App">
			<Title />
		<section className="Dados">
			<Die />
			<Die />
		</section>
		</main>
	);
}

export default App;

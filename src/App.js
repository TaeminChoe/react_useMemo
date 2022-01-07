import "./App.css";
import { useState } from "react";
import Info from "./components/Info";

function App() {
	const [color, setColor] = useState("");
	const [movie, setMovie] = useState("");

	function onChangeHandler(event) {
		if (event.target.id === "color") {
			setColor(event.target.value);
		} else {
			setMovie(event.target.value);
		}
	}

	return (
		<div className="App">
			<div>
				<label>
					What is your favorite color of rainbow ?
					<input
						id="color"
						value={color}
						onChange={onChangeHandler}
					/>
				</label>
			</div>
			<div>
				What is your favorite movie among these ?
				<label>
					<input
						type="radio"
						name="movie"
						value="Marriage Story"
						onChange={onChangeHandler}
					/>
					Marriage Story
				</label>
				<label>
					<input
						type="radio"
						name="movie"
						value="The Fast And The Furious"
						onChange={onChangeHandler}
					/>
					The Fast And The Furious
				</label>
				<label>
					<input
						type="radio"
						name="movie"
						value="Avengers"
						onChange={onChangeHandler}
					/>
					Avengers
				</label>
			</div>
			<Info color={color} movie={movie} />
		</div>
	);
}

export default App;

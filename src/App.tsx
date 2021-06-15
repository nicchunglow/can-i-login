import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Containers/Home";
import Register from "./Components/Register";
function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Route exact path="/" component={Home} />
				<Route exact path="/register" component={Register} />
			</div>
		</BrowserRouter>
	);
}

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Containers/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Reports from "./Components/Reports";
function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Route exact path="/" component={Home} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/reports" component={Reports} />
			</div>
		</BrowserRouter>
	);
}

export default App;

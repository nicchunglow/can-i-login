import React from "react";
import "./Home.css";
import logo from "../../src/logo.svg";

const Home = () => {
	return (
		<div className="Home-border">
			<div className="Home-align">
				<img src={logo} alt="logo" />
				<p>
					This is the home page of the project. It will contain a login and register functionality for the user to
					access the application! Enjoy!
				</p>
			</div>
		</div>
	);
};

export default Home;

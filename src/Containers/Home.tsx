import React from "react";
import "./Home.css";
import logo from "../../src/logo.svg";

const Home = () => {
	return (
		<div className="Home-border">
			<div className="Home-align">
				<img src={logo} className="Home-logo" alt="LOGO" />
				<h2>ANALYTICAL REPORT</h2>
				<p>Summarised Reports at your fingertips.</p>
				<button>REGISTER</button>
				<button>LOGIN</button>
			</div>
		</div>
	);
};

export default Home;

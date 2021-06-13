import React from "react";
import "./Home.css";
import logo from "../../src/logo.svg";
import { Box, Button, Container } from "@material-ui/core";

const Home = () => {
	return (
		<Container maxWidth="sm">
			<div className="home-border">
				<div className="home-align">
					<img src={logo} className="home-logo" alt="LOGO" />
					<h2>ANALYTICAL REPORT</h2>
					<p>Summarised Reports at your fingertips.</p>
					<Box component="span" m={1} className="home-button-container">
						<Button variant="contained" color="secondary">
							REGISTER
						</Button>
						<Button variant="contained" color="primary">
							LOGIN
						</Button>
					</Box>
				</div>
			</div>
		</Container>
	);
};

export default Home;

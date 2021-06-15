import React from "react";
import "./Home.css";
import logo from "../../src/logo.svg";
import { Box, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../Components/Shared/Button.css";

const Home = () => {
	return (
		<Container maxWidth="sm">
			<div className="home-border">
				<div className="home-align">
					<img src={logo} className="home-logo" alt="LOGO" />
					<h2>ANALYTICAL REPORT</h2>
					<p>Summarised Reports at your fingertips.</p>
					<Box component="span" m={1} className="home-button-container">
						<Link to="/register" className="button-link">
							<Button variant="contained" color="secondary">
								REGISTER
							</Button>
						</Link>
						<Link to="/login" className="button-link">
							<Button variant="contained" color="primary">
								LOGIN
							</Button>
						</Link>
					</Box>
				</div>
			</div>
		</Container>
	);
};

export default Home;

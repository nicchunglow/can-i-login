import React from "react";
import "./Home.css";
import "../Components/Shared/Button.css";
import "../Components/Shared/Card.css";
import logo from "../../src/logo.svg";
import { Card, Box, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<Container maxWidth="sm">
			<Card className="card">
				<div className="card-container">
					<img src={logo} className="home-logo" alt="LOGO" />
					<h2>ANALYTICAL REPORT</h2>
					<p>Summarised Reports at your fingertips.</p>
					<Box component="span" m={1} className="home-button-container">
						<Link to="/register" className="button">
							<Button variant="contained" color="secondary">
								REGISTER
							</Button>
						</Link>
						<Link to="/login" className="button">
							<Button variant="contained" color="primary">
								LOGIN
							</Button>
						</Link>
					</Box>
				</div>
			</Card>
		</Container>
	);
};

export default Home;

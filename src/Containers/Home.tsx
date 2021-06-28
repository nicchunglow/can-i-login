import React, { useState, useEffect } from "react";
import "./Home.css";
import "../Shared/Button.css";
import "../Shared/Card.css";
import logo from "../../src/logo.svg";
import { Card, Box, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import configuredAxios from "../Utils/Axios";
import { IAuth } from "../Models/auth.model";

const Home = () => {
	const [login, setLogin] = useState<IAuth>();
	const loadLoginDetails = async () => {
		const res = await configuredAxios.get(process.env.REACT_APP_BASE_BACKEND_URL + "/auth");
		setLogin(res.data);
	};

	useEffect(() => {
		loadLoginDetails();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
					{!!login && <h3>Welcome {login.firstName}! You are now logined!</h3>}
					{!!login && (
						<Link to="/reports" className="button">
							<Button variant="contained" color="primary">
								Reports
							</Button>
						</Link>
					)}
				</div>
			</Card>
		</Container>
	);
};

export default Home;

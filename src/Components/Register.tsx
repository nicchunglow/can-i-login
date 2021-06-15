import React from "react";
import "./Register.css";
import logo from "../../src/logo.svg";
import { Container } from "@material-ui/core";

const Register = () => {
	return (
		<Container maxWidth="sm">
			<div className="home-border">
				<div className="home-align">
					<img src={logo} className="home-logo" alt="LOGO" />
					<h2>REGISTER</h2>
				</div>
			</div>
		</Container>
	);
};

export default Register;

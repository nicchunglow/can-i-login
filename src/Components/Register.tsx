import React from "react";
import "./Register.css";
import "./Shared/Card.css";
import { Container } from "@material-ui/core";
import { Card, Button, FormControl, Input, InputLabel, FormHelperText } from "@material-ui/core";
import { Link } from "react-router-dom";
const Register = () => {
	return (
		<Container maxWidth="sm">
			<Card className="card" variant="outlined">
				<div className="card-container">
					<h2>REGISTER</h2>
					<FormControl>
						<InputLabel>Email</InputLabel>
						<Input aria-label="email" type="text" placeholder="email" />
					</FormControl>
					<FormControl>
						<InputLabel>Password</InputLabel>
						<Input aria-label="password" type="text" placeholder="password" />
						<FormHelperText id="password-helper">
							Do remember to include : <br />
							<span className="register-helper">
								1 Uppercase, <br />1 Lowercase <br />
								and numbers
							</span>
						</FormHelperText>
					</FormControl>
					<FormControl>
						<InputLabel>First Name</InputLabel>
						<Input aria-label="firstName" type="text" placeholder="firstName" />
					</FormControl>
					<FormControl>
						<InputLabel>Last Name</InputLabel>
						<Input aria-label="lastName" type="text" placeholder="lastName" />
					</FormControl>
					<div className="register-container">
						<Button variant="contained" className="button" color="primary">
							SUBMIT
						</Button>
						<Link to="/" className="button">
							<Button variant="contained" color="secondary">
								Back to Home
							</Button>
						</Link>
					</div>
				</div>
			</Card>
		</Container>
	);
};

export default Register;

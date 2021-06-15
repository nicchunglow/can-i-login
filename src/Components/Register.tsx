import React, { useState } from "react";
import "./Register.css";
import "../Shared/Card.css";
import { Container } from "@material-ui/core";
import { Card, Button, FormControl, Input, InputLabel, FormHelperText, Snackbar } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IRegister } from "../Models/register.model";

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const onSubmit = (data: IRegister) => setOpen(true);
	return (
		<Container maxWidth="sm">
			<Snackbar
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				open={open}
				onClose={handleClose}
				autoHideDuration={3000}
				message="Registration Successful"
				key="snackbar"
			/>
			<Card className="card" variant="outlined">
				<div className="card-container">
					<h2>REGISTER</h2>
					<form className="card-container" onSubmit={handleSubmit(onSubmit)}>
						<FormControl size="small">
							<InputLabel>Email</InputLabel>
							<Input {...register("lastName", { required: true })} aria-label="email" type="text" placeholder="Email" />
							{errors.email && <p>Email is required.</p>}
						</FormControl>
						<FormControl>
							<InputLabel>Password</InputLabel>
							<Input
								{...register("password", { required: true })}
								aria-label="password"
								type="password"
								placeholder="Password"
							/>
							{errors.password && <p>Password is required.</p>}

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
							<Input {...register("firstName")} aria-label="firstName" type="text" placeholder="First Name" />
							{errors.lastName && <p>Last name is required.</p>}
						</FormControl>
						<FormControl>
							<InputLabel>Last Name</InputLabel>
							<Input
								{...register("lastName", { required: true })}
								aria-label="lastName"
								type="text"
								placeholder="Last Name"
							/>
						</FormControl>
						<Input className="submit-button" type="submit" />
					</form>
					<div className="register-container">
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

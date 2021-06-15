import React, { useState } from "react";
import { Container, Card, Button, FormControl, Input, InputLabel, FormHelperText, Snackbar } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import configuredAxios from "../Utils/Axios";
import { IRegister } from "../Models/users.model";
import "./Register.css";
import "../Shared/Card.css";

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [open, setOpen] = useState(false);
	const [snackBarMessage, setSnackBarMessage] = useState("");

	const handleClose = () => {
		setOpen(false);
	};

	const onSubmit = async (data: IRegister) => {
		try {
			const payload: IRegister = {
				email: data.email,
				password: data.password,
				firstName: data.firstName,
				lastName: data.lastName,
			};
			await configuredAxios.post(process.env.REACT_APP_BASE_BACKEND_URL + `/users/register`, payload);
			setSnackBarMessage("Registration Success");
			setOpen(true);
		} catch (err) {
			setSnackBarMessage(err.message);
			setOpen(true);
		}
	};

	return (
		<Container maxWidth="sm">
			<Snackbar
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				open={open}
				onClose={handleClose}
				autoHideDuration={3000}
				message={snackBarMessage}
				key="snackbar"
			/>
			<Card className="card" variant="outlined">
				<div className="card-container">
					<h2>REGISTER</h2>
					<form className="card-container" onSubmit={handleSubmit(onSubmit)}>
						<FormControl size="small">
							<InputLabel>Email</InputLabel>
							<Input {...register("email", { required: true })} aria-label="email" type="text" placeholder="Email" />
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
							{errors.lastName && <p>First name is required.</p>}
						</FormControl>
						<FormControl>
							<InputLabel>Last Name</InputLabel>
							<Input
								{...register("lastName", { required: true })}
								aria-label="lastName"
								type="text"
								placeholder="Last Name"
							/>
							{errors.lastName && <p>Last name is required.</p>}
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

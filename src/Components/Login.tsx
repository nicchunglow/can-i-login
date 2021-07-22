import React, { useState } from "react";
import { Container, Card, Button, FormControl, Input, InputLabel, Snackbar } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import configuredAxios from "../Utils/Axios";
import { ILogin } from "../Models/Users.model";
import "./Register.css";
import "../Shared/Card.css";

const Login = () => {
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

	const onSubmit = async (data: ILogin) => {
		try {
			const payload: ILogin = {
				email: data.email,
				password: data.password,
			};

			await configuredAxios.post(process.env.REACT_APP_BASE_BACKEND_URL + `/users/login`, payload);
			setSnackBarMessage("Login success! ");
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
					<h2>LOGIN</h2>
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

export default Login;

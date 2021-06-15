import React, { useState, useEffect } from "react";
import "../Shared/Button.css";
import "../Shared/Card.css";
import { Card, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import Axios from "axios";

interface IAuth {
	email: string;
	firstName: string;
	lastName: string;
}

const Reports = () => {
	const [report, setReport] = useState<IAuth>();
	const loadReportsDetails = async () => {
		const res = await Axios.get(process.env.REACT_APP_BASE_BACKEND_URL + "/reports");
		console.log(res);
		setReport(res.data);
	};

	useEffect(() => {
		loadReportsDetails();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container maxWidth="sm">
			<Card className="card">
				<div className="card-container">
					{report}
					<Link to="/" className="button">
						<Button variant="contained" color="secondary">
							Back to Home
						</Button>
					</Link>
				</div>
			</Card>
		</Container>
	);
};

export default Reports;

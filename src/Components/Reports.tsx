import React, { useState, useEffect } from "react";
import "../Shared/Button.css";
import "../Shared/Card.css";
import { Card, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import configuredAxios from "../Utils/Axios";

interface IReport {
	message?: string;
}

const Reports = () => {
	const [report, setReport] = useState<IReport>();
	const loadReportsDetails = async () => {
		const res = await configuredAxios.get(process.env.REACT_APP_BASE_BACKEND_URL + "/reports");
		setReport(res.data.message);
	};

	useEffect(() => {
		loadReportsDetails();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container maxWidth="sm">
			<Card className="card">
				<div className="card-container">
					{report ? report : "You are not authorised"}
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

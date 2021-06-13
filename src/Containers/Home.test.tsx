import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

describe("Home.js", () => {
	test("should render <Home/> with description and image", () => {
		const { getByText, getByAltText } = render(<Home />);
		const description: string =
			"This is the home page of the project. It will contain a login and register functionality for the user to access the application! Enjoy!";
		const logo = getByAltText("logo");
		const homeDescription = getByText(description);
		expect(logo).toBeInTheDocument();
		expect(homeDescription).toBeInTheDocument();
	});
});

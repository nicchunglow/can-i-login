## Can I Login? - Authentication  Assignment.

#### Table of contents

- [Introduction](#Introduction)

- [Implementation Decisions](#Implementation-Decisions)

- [Technologies](#Technologies)

- [Setup](#Setup)

- [Environment Variables](#Environment-Variables)

- [Availble Scripts](#Available-Scripts)

- [Improvements](#Improvements)

### Introduction

As a user, I would like to register an account so that I can login to get my reports. 

As a user, I would like to login so that I can get my reports. 

As a user, I should not get the reports if I am not logined in as I do not have the permissions yet. 

Link to backend: https://github.com/nicchunglow/can-i-login-backend

#### Implementation Decisions

For this application, the technologies used are mainly focused on React, using hooks, using TypeScript , with Material UI. 

As for code, it has a husky package running to do pre-commit and pre-push hooks.

For react, I decided to go with hooks instead of going with redux is due to the amount of states to be managed. The current application do not have much states to maintain at the moment. Hence, hooks are sufficient. In terms of application development in the future, integrating redux will not be an issue. The middle ground of redux and react hooks will be to use useReducer in hooks to maintain states.

For this application, it has a : 
- Registration page. 
- Login Page. 
- Home Page
- "Reports" page

For the login and registration, they utilise react-hooks-form. 
For code level implementation that I have taken, I have extracted some of the css as shared under the `Shared` folder. 
Axios has been configured in `Utils` as a preset of `{withCredentials = true}` is required for the cookie to work. 

#### Technologies

		"@material-ui/core": "^4.11.4",
		"@testing-library/jest-dom": "^5.14.1",
		"@testing-library/react": "^11.2.7",
		"@testing-library/user-event": "^12.8.3",
		"@types/jest": "^26.0.23",
		"@types/node": "^12.20.15",
		"@types/react": "^17.0.11",
		"@types/react-dom": "^17.0.7",
		"@types/react-router-dom": "^5.1.7",
		"axios": "^0.21.1",
		"react": "^17.0.2",
		"react-dom": "^17.0.2",
		"react-hook-form": "^7.8.6",
		"react-router-dom": "^5.2.0",
		"react-scripts": "4.0.3",
		"typescript": "^4.3.2",
		"web-vitals": "^1.1.2"

##### DevDependencies:

		"pretty-quick": "^3.1.0",
		"husky": "^6.0.0"

#### Setup

To run this project, git clone and install it locally using npm:

```

$ cd ../

$ git clone git@github.com:nicchunglow/find-my-drivers.git

$ npm install

$ npm run start

```

## Available Scripts

In the project directory, you can run:

```

npm start // runs the app in development mode

npm test // run test runner in interactive watch mode

npm run build // Builds the app for production

npm run coverage // check code coverage.


```

## Environment Variables

- REACT_APP_BASE_BACKEND_URL=http://localhost:3000 <= example 

## Improvements

I would like to work on more test cases on the frontend, as well as refactor some of the code as there are components that can be shared. 

This project was bootstrapped with Create React App.

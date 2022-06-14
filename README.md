# Travel Tracker

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Abstract](#abstract)
- [Illustration](#illustration)
- [Technologies Used](#technologies-used)
- [Context and Features](#context-and-features)
- [Future Features](#future-features)
- [Application Set-Up](#application-set-up)
- [Contributor LinkedIn and GitHub](#contributor-linkedin-and-github)
- [Project Specs](#project-specs)

## Abstract

The _Travel Tracker_ application was designed to manage and track different trips for travelers. Building this application allowed me to build upon my current knowledge by implementing: 

  - ES6 classes
  - utilizing array and object prototype methods for data manipulation
  - creating an easy to use and understand dashboard with clear UI/UX
  - correctly utilzing FETCH and network requests to retrieve and `POST` data
  - TDD with Mocha/Chai
  - Error handling and accessibility features

## Illustrations

[Travel Tracker Functionality]()

## Technologies Used

- Day.js
- CSS
- HTML
- Fetch API
- JavaScript
- Mocha & Chai
- Normalize.css
- Webpack

## Context and Features

The goals for this project were to:
  
   - Use OOP to drive the design of the application and the code
   - Work with an API to send and receive data
   - Solidify the code review process
   - Create a robust test suite that thoroughly tests all functionality of a client-side application

This application was created using Webpack, which is a modular bundler used to group HTML, CSS, and JavaScript files into more efficient files for a browser to read.

This application utilizes NPM packages including `Normalize.css` and `Day.js`. The `Normalize.css` package allows the application to render more consistently on different browsers without bugs, preserves useful defaults, normalizes styles for a wide range of elements, and improves usability with subtle modifications. The `Day.js` package is a minimalist JavaScript library that parses, validates, manipulates, and displays dates and times for modern browsers with a largely Moment.js-compatible API.

Test Driven Development was utilized in the development process for this application. Classes and corresponding repositories were built to accommodate the respective data types. Each class and repository were thoroughly tested using the mocha testing framework and the chai assertion library. 

Fetch APIs and POSTs A user is able to create `POST` requests, and post their own pending trip to the local API as well as the DOM.  

Accesibility & Error Handling was implemented within the application and form. The application scored a 100% accessibility rating in a _Lighthouse Accessibility Audit_.

## Future Features

Some future features that could be added to this application are:

- A travel agent view where an admin is able to view pending trips and approve or deny requests.
- The traveler dashboard should display a countdown to their next trip. 
- A travel agent can POST suggestedActivities for user trips.
- A travel agent can create new destinations.

## Application Set-Up

1. Fork repository on GitHub.

2. `Git clone` the repository to your local machine.

3. `Cd` into the directory.

4. Run `npm install` in your terminal to install project dependencies.

5. Go to this [repository](https://github.com/turingschool-examples/fitlit-api)  

6. Follow instructions in the Fitlit-api repository from the previous step. 

7. Run `npm start` in the terminal to see the application. 

8. When finished with the application, be sure to type `Control + C` to stop running the Fitlip-api and this application. 

## Contributor LinkedIn

- [Rachel Allen: LinkedIn](https://www.linkedin.com/in/rachel-lynn-allen/)  
 
## Contributor GitHub

- [Rachel Allen: GitHub](https://github.com/Rallen13) 

## Project Specs

- The specs for this application can be found 
[HERE](https://frontend.turing.edu/projects/travel-tracker.html) 

// Imports
import "normalize.css";
import "./css/styles.css";
import Traveler from "./Traveler";
import TravelerRepository from "./TravelerRepository";
import Trip from "./Trip";
import TripRepository from "./TripRepository";
import Destination from "./Destination";
import DestinationRepository from "./DestinationRepository";
import apiCalls from "./apiCalls";
import "./images/hiking_black_24dp.svg";

console.log("This is the JavaScript entry file - your code begins here.");

// Query Selectors

// Form Query Selectors

// Class Instances

//Global Variables
let travelerRepo;

// Functions
const getRandomIndex = array => {
  return Math.floor(Math.random() * array.length + 1);
};

const fetchApiCalls = userID => {
  apiCalls.fetchData().then(data => {
    console.log(data);
    let travelerData = data[0].travelers;
    let tripData = data[1].trips;
    let destinationsData = data[2].destinations;
    travelerRepo = new TravelerRepository(travelerData);
    console.log(travelerRepo);
  });
};

// Event Listeners
window.addEventListener("load", fetchApiCalls);

//Form Event Listeners

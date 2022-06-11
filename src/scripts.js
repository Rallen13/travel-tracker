// Imports
import "normalize.css";
import "./css/styles.css";
import Traveler from "./Traveler";
import TravelerRepository from "./TravelerRepository";
import TripRepository from "./TripRepository";
import DestinationRepository from "./DestinationRepository";
import apiCalls from "./apiCalls";
import "./images/hiking_black_24dp.svg";

console.log("This is the JavaScript entry file - your code begins here.");

// Query Selectors

// Form Query Selectors

// Class Instances

//Global Variables
let travelerRepo, tripRepo, destinationRepo;

// Functions
const getRandomIndex = array => {
  return Math.floor(Math.random() * array.length + 1);
};

const fetchApiCalls = userID => {
  apiCalls.fetchData().then(data => {
    console.log(data);
    let travelerData = data[0].travelers;
    let tripData = data[1].trips;
    let destinationData = data[2].destinations;
    travelerRepo = new TravelerRepository(travelerData);
    tripRepo = new TripRepository(tripData);
    destinationRepo = new DestinationRepository(destinationData);
    console.log(travelerRepo);
    console.log(tripRepo);
    console.log(destinationRepo);
  });
};

// Event Listeners
window.addEventListener("load", fetchApiCalls);

//Form Event Listeners

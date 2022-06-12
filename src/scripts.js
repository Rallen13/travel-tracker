// Imports
import "normalize.css";
import "./css/styles.css";
import Traveler from "./Traveler";
import TravelerRepository from "./TravelerRepository";
import TripRepository from "./TripRepository";
import DestinationRepository from "./DestinationRepository";
import apiCalls from "./apiCalls";
import "./images/hiking_black_24dp.svg";
const dayjs = require("dayjs");

// Query Selectors
const travelerName = document.querySelector(".traveler-name");
const tripArticles = document.querySelector(".trip-articles");
const todaysDate = document.querySelector(".todays-date");
const totalCost = document.querySelector(".total-cost");
const agentFees = document.querySelector(".agent-fees");

// Class Instances

//Global Variables
let travelerRepo, tripRepo, destinationRepo, currentTraveler, today;

// Functions
const fetchApiCalls = userID => {
  apiCalls.fetchData().then(data => {
    let travelerData = data[0].travelers;
    let tripData = data[1].trips;
    let destinationData = data[2].destinations;
    travelerRepo = new TravelerRepository(travelerData);
    currentTraveler = travelerRepo.findTravelerById(3);
    tripRepo = new TripRepository(tripData);
    destinationRepo = new DestinationRepository(destinationData);
    today = dayjs().format("MM/DD/YYYY");
    tripRepo.filterTripByUserId(currentTraveler.id);
    loadPage();
  });
};

const loadPage = () => {
  displayTravelerName();
  displayTripArticles();
  displayTodaysDate();
  displayTotalCost();
  displayAgentFees();
};

const displayTravelerName = () => {
  travelerName.innerText = `, ${currentTraveler.getFirstName()}!`;
};

const displayTodaysDate = () => {
  todaysDate.innerText = `${today}`;
};

const displayTotalCost = () => {
  totalCost.innerText = `$${tripRepo.getAnnualCost().toFixed(2)}`;
};

const displayAgentFees = () => {
  agentFees.innerText = `$${(tripRepo.getAnnualCost() * 0.1).toFixed(2)}`;
};

const displayTripArticles = () => {
  tripRepo.travelersTrips.forEach(trip => {
    const destination = destinationRepo.findDestinationById(trip.destinationID);
    trip.getTripCost(destination);
    getTripCategory(trip);
    console.log(trip);
    tripArticles.appendChild(generateTripArticle(trip, destination));
  });
};

const getTripCategory = trip => {
  if (dayjs().isAfter(dayjs(trip.date))) {
    return (trip.category = "past");
  } else if (dayjs().isSame(dayjs(trip.date))) {
    return (trip.category = "present");
  } else if (dayjs().isBefore(dayjs(trip.date))) {
    return (trip.category = "upcoming");
  } else if (trip.status === "pending") {
    return (trip.category = "pending");
  }
};

const generateTripArticle = (trip, tripDestination) => {
  let currentTripArticle = document.createElement("article");
  currentTripArticle.setAttribute("id", trip.id);
  currentTripArticle.setAttribute("class", "trip-article");

  currentTripArticle.innerHTML = `
  <img
    src=${tripDestination.image}
    alt=${tripDestination.alt}
  />
  <header class="trip-header">
    <p class='category ${trip.category}-category'>${trip.category}</p>
    <h3>${tripDestination.destination}</h3>
    <h4>${trip.date}</h4>
  </header>
  <div class="content">
    <span class="stat">
      <p>Travelers:</p>
      <p class="detail">${trip.travelers}</p>
    </span>
    <span class="stat">
      <p>Nights:</p>
      <p class="detail">${trip.duration}</p>
    </span>
  </div>
  <footer>
    <p>Trip Cost:</p>
    <p class="detail">$${trip.tripCost.toFixed(2)}</p>
  </footer>
  `;

  return currentTripArticle;
};

// Event Listeners
window.addEventListener("load", fetchApiCalls);

//Form Event Listeners

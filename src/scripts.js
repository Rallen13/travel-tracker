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
const tripFormButton = document.querySelector("#trip-form-button");
const tripFormSection = document.querySelector(".trip-form-section");
const cancelButton = document.querySelector(".cancel-button");
const destinationInput = document.querySelector("#destinationID");
const bookNowButton = document.querySelector(".book-now-button");

// Class Instances

//Global Variables
let travelerRepo, tripRepo, destinationRepo, currentTraveler, today;

// Functions
const fetchApiCalls = () => {
  apiCalls.fetchData().then(data => {
    let travelerData = data[0].travelers;
    let tripData = data[1].trips;
    let destinationData = data[2].destinations;
    travelerRepo = new TravelerRepository(travelerData);
    travelerRepo.mapTravelerData();
    currentTraveler = travelerRepo.findTravelerById(44);
    tripRepo = new TripRepository(tripData);
    tripRepo.mapTripData();
    destinationRepo = new DestinationRepository(destinationData);
    destinationRepo.mapDestinationData();
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
  displayDestinationOptions();
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
    trip.getTripCategory(trip);

    tripArticles.appendChild(generateTripArticle(trip, destination));
  });
};

const generateTripArticle = (trip, tripDestination) => {
  let currentTripArticle = document.createElement("article");
  currentTripArticle.setAttribute("id", trip.id);
  currentTripArticle.setAttribute("class", "trip-article");
  currentTripArticle.setAttribute("tabIndex", 0);

  currentTripArticle.innerHTML = `
  <img
    src=${tripDestination.image}
    alt=${tripDestination.alt}
  />
  <header class="trip-header">
    <p class='category ${trip.category}-category'>${trip.category}</p>
    <h3>${tripDestination.destination}</h3>
    <h4>${dayjs(trip.date).format("MM/DD/YYYY")}</h4>
  </header>
  <div class="content">
    <span class="stat">
      <p class="detail">${trip.travelers}</p>
      <p>Travelers</p>
    </span>
    <span class="stat">
      <p class="detail">${trip.duration}</p>
      <p>Nights</p>
    </span>
  </div>
  <footer>
    <p>Trip Cost</p>
    <p class="detail">$${trip.tripCost.toFixed(2)}</p>
  </footer>
  `;

  return currentTripArticle;
};

const displayDestinationOptions = () => {
  destinationRepo.data.forEach(destination => {
    destinationInput.innerHTML += `<option value=${destination.id}>${destination.destination}</option>`;
  });
};

const toggleForm = () => {
  event.preventDefault();
  tripArticles.classList.toggle("hidden");
  tripFormSection.classList.toggle("hidden");
};

const setFormData = () => {
  // what your formData should look like to POST
  // {
  //   id: 1,
  //   userID: 1,
  //   destinationID: 1,
  //   travelers: 1,
  //   date: "",
  //   duration: 1,
  //   status: "pending",
  //   suggestedActivities: []
  // };
};

// Event Listeners
window.addEventListener("load", fetchApiCalls);
tripFormButton.addEventListener("click", toggleForm);
cancelButton.addEventListener("click", toggleForm);
//Form Event Listeners

// Imports
import "normalize.css";
import "./css/styles.css";
import Traveler from "./Traveler";
import TravelerRepository from "./TravelerRepository";
import TripRepository from "./TripRepository";
import DestinationRepository from "./DestinationRepository";
import apiCalls from "./apiCalls";
import "./images/hiking_black_24dp.svg";

// Query Selectors

// Form Query Selectors
const travelerName = document.querySelector(".traveler-name");
const tripArticles = document.querySelector(".trip-articles");

// Class Instances

//Global Variables
let travelerRepo, tripRepo, destinationRepo, currentTraveler;

// Functions
const getRandomIndex = array => {
  // console.log(array.length);
  return Math.floor(Math.random() * array.length + 1);
};

const fetchApiCalls = userID => {
  apiCalls.fetchData().then(data => {
    // console.log(data);
    let travelerData = data[0].travelers;
    let tripData = data[1].trips;
    let destinationData = data[2].destinations;
    travelerRepo = new TravelerRepository(travelerData);
    currentTraveler = travelerRepo.findTravelerById(3);
    tripRepo = new TripRepository(tripData);
    destinationRepo = new DestinationRepository(destinationData);
    // console.log(travelerRepo);
    // console.log(tripRepo);
    // console.log(destinationRepo);
    // console.log(currentTraveler);
    loadPage();
  });
};

const loadPage = () => {
  displayTravelerName();
  displayTripArticles();
};

const displayTravelerName = () => {
  travelerName.innerText = `${currentTraveler.getFirstName()}`;
};

const displayTripArticles = () => {
  const travelersTrips = tripRepo.filterTripByUserId(currentTraveler.id);

  travelersTrips.forEach(trip => {
    const tripDestination = destinationRepo.findDestinationById(
      trip.destinationID
    );
    tripArticles.appendChild(generateTripArticle(trip, tripDestination));
  });
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
  <header>
    <h3>${tripDestination.destination}</h3>
    <h4>${trip.date}</h4>
  </header>
  <div class="content">
    <span class="stat">
      <p class="bold">Travelers:</p>
      <p class="detail">${trip.travelers}</p>
    </span>
    <span class="'stat">
      <p class="bold">Nights:</p>
      <p class="detail">${trip.duration}</p>
    </span>
  </div>
  <footer>
    <p class="bold">Trip Cost:</p>
    <p class="detail">$3000</p>
  </footer>
  `;

  return currentTripArticle;
};

// Event Listeners
window.addEventListener("load", fetchApiCalls);

//Form Event Listeners

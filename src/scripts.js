// Imports
import "normalize.css";
import "./css/styles.css";
import Traveler from "./Traveler";
import TravelerRepository from "./TravelerRepository";
import TripRepository from "./TripRepository";
import Trip from "./Trip";
import DestinationRepository from "./DestinationRepository";
import apiCalls from "./apiCalls";
import "./images/hiking_black_24dp.svg";
const dayjs = require("dayjs");

// Query Selectors
const travelerName = document.querySelector(".traveler-name");
const tripArticles = document.querySelector(".trip-articles");
const leftColumn = document.querySelector(".left-column");
const todaysDate = document.querySelector(".todays-date");
const totalCost = document.querySelector(".total-cost");
const agentFees = document.querySelector(".agent-fees");
const tripFormButton = document.querySelector("#trip-form-button");
const tripFormSection = document.querySelector(".trip-form-section");
const tripForm = document.querySelector("#trip-form");
const tripEstimate = document.querySelector(".trip-estimate");
const formDate = document.querySelector("date");
const cancelButton = document.querySelector(".cancel-button");
const destinationInput = document.querySelector("#destinationID");
const bookNowButton = document.querySelector(".book-now-button");
const logoutButton = document.querySelector("#logout-button");
const loginSection = document.querySelector(".login-section");
const loginForm = document.querySelector("#login-form");
const loginButton = document.querySelector(".login-button");

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
    travelerRepo.mapTravelerData();
    if (userID === "load") {
      currentTraveler = travelerRepo.findTravelerById(44);
    } else {
      currentTraveler = travelerRepo.findTravelerById(userID);
    }
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

const displayEstimate = () => {
  const estimatedTrip = getEstimate();
  tripEstimate.innerHTML = `$${estimatedTrip.toFixed(2)}`;
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
  // const destinationsSorted = destinationRepo.data.sort((a, b) => {
  //   console.log(a.destination);
  //   return b.destination - a.destination;
  // });
  // console.log(destinationsSorted);
  destinationRepo.data.forEach(destination => {
    destinationInput.innerHTML += `<option value=${destination.id}>${destination.destination}</option>`;
  });
};

const viewForm = () => {
  event.preventDefault();
  toggleHidden(tripArticles);
  toggleHidden(tripFormSection);
  date.value = dayjs().format("YYYY-MM-DD");
  displayEstimate();
};

const viewTrips = () => {
  event.preventDefault();
  toggleHidden(tripArticles);
  toggleHidden(tripFormSection);
};

const toggleHidden = element => {
  element.classList.toggle("hidden");
};

const setFormData = form => {
  // if destinationID is null
  if (form[0].value === null) {
    alert("Destination must be selected");
    // if date is valid
  } else if (!dayjs(form[1].value).isValid()) {
    alert("Date must be selected");
    //if date selected is before today and not
  } else if (dayjs(form[1].value).isBefore(dayjs().add(-1, "day"))) {
    alert("Select a future date");
    //if duration is null
  } else if (event.target.form[2].value === null) {
    alert("Duration must be selected");
    //if travelers is null
  } else if (event.target.form[3].value === null) {
    alert("Travelers must be selected");
  } else {
    return {
      id: parseInt(tripRepo.data.length + 1),
      userID: parseInt(currentTraveler.id),
      destinationID: parseInt(form[0].value),
      travelers: parseInt(form[3].value),
      date: dayjs(form[1].value).format("YYYY/MM/DD"),
      duration: parseInt(form[2].value),
      status: "pending",
      suggestedActivities: []
    };
  }
};

const resetForm = form => {
  form[0].value = 1;
  form[1].value = dayjs().format("YYYY-MM-DD");
  form[2].value = 1;
  form[3].value = 1;
};

const postTrip = event => {
  event.preventDefault();
  const formData = setFormData(event.target.form);
  if (formData === undefined) {
    return;
  }
  apiCalls.postData(formData).then(() => {
    tripArticles.innerHTML = "";
    fetchApiCalls(currentTraveler.id);
    resetForm(event.target.form);
    toggleHidden(tripArticles);
    toggleHidden(tripFormSection);
  });
};

const getEstimate = () => {
  const tripEstimate = new Trip({
    id: parseInt(tripRepo.data.length + 1),
    userID: parseInt(currentTraveler.id),
    destinationID: parseInt(tripForm[0].value),
    travelers: parseInt(tripForm[3].value),
    date: dayjs(tripForm[1].value).format("YYYY/MM/DD"),
    duration: parseInt(tripForm[2].value),
    status: "pending",
    suggestedActivities: []
  });
  const destination = destinationRepo.findDestinationById(
    tripEstimate.destinationID
  );
  console.log(destination);
  tripEstimate.getTripCost(destination);
  return tripEstimate.tripCost;
};

const logoutUser = () => {
  event.preventDefault();
  toggleHidden(loginSection);
  toggleHidden(leftColumn);
  toggleHidden(tripArticles);
  toggleHidden(logoutButton);
};

const loginUser = () => {
  event.preventDefault();
  toggleHidden(loginSection);
  toggleHidden(leftColumn);
  toggleHidden(tripArticles);
  toggleHidden(logoutButton);
};

// Event Listeners
window.addEventListener("load", fetchApiCalls("load"));

//Form Event Listeners
tripFormButton.addEventListener("click", viewForm);
logoutButton.addEventListener("click", logoutUser);
loginButton.addEventListener("click", loginUser);
cancelButton.addEventListener("click", viewTrips);
bookNowButton.addEventListener("click", postTrip, true);
tripForm.addEventListener("change", displayEstimate);

import "./css/styles.css";
import apiCalls from "./apiCalls";
import "./images/turing-logo.png";

console.log("This is the JavaScript entry file - your code begins here.");

const fetchApiCalls = userID => {
  apiCalls.fetchData().then(data => {
    console.log(data);
  });
};

// Event Listeners
window.addEventListener("load", fetchApiCalls);

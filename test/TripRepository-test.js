import { expect } from "chai";
import Trip from "../src/Trip";
import TripRepository from "../src/TripRepository";
import Destination from "../src/Destination";

describe("Trip Repository", () => {
  let trip1;
  let trip2;
  let tripRepository;
  beforeEach(() => {
    trip1 = {
      id: 1,
      userID: 44,
      destinationID: 49,
      travelers: 1,
      date: "2022/09/16",
      duration: 8,
      status: "approved",
      suggestedActivities: []
    };

    trip2 = {
      id: 2,
      userID: 35,
      destinationID: 25,
      travelers: 5,
      date: "2022/10/04",
      duration: 18,
      status: "approved",
      suggestedActivities: []
    };
    tripRepository = new TripRepository([trip1, trip2]);
  });

  it("should be a function", function() {
    expect(TripRepository).to.be.a("function");
  });

  it("should be an instance of TripRepository", () => {
    expect(tripRepository).to.be.an.instanceof(TripRepository);
  });

  it("should be able to store data for multiple trips", () => {
    expect(tripRepository.data).to.deep.equal([trip1, trip2]);
  });

  it("should be able to store multiple trips for multiple travelers", () => {
    expect(tripRepository.travelersTrips).to.deep.equal([]);
  });

  it("should be able to mutate the date to store multiple instances of Trip", () => {
    tripRepository.mapTripData();
    expect(tripRepository.data[0]).to.be.an.instanceOf(Trip);
    expect(tripRepository.data[1]).to.be.an.instanceOf(Trip);
  });

  it("should be able to determine trip data by id for multiple trips", () => {
    let determineTrip1 = tripRepository.findTripById(trip1.id);
    let determineTrip2 = tripRepository.findTripById(trip2.id);
    expect(determineTrip1).to.equal(trip1);
    expect(determineTrip2).to.equal(trip2);
  });

  it("should be able to filter all trips data by trip user id for multiple trips", () => {
    let filterTrip1 = tripRepository.filterTripByUserId(trip1.userID);
    let filterTrip2 = tripRepository.filterTripByUserId(trip2.userID);
    expect(filterTrip1[0]).to.deep.equal([trip1][0]);
    expect(filterTrip2[0]).to.deep.equal([trip2][0]);
  });

  it("should be able to determine annual cost of trips for single traveler", () => {
    tripRepository.mapTripData();
    const destination1 = new Destination({
      id: 49,
      destination: "Castries, St Lucia",
      estimatedLodgingCostPerDay: 650,
      estimatedFlightCostPerPerson: 90,
      image:
        "https://images.unsplash.com/photo-1524478075552-c2763ea171b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
      alt: "aerial photography of rocky mountain under cloudy sky"
    });
    const destination2 = new Destination({
      id: 25,
      destination: "New York, New York",
      estimatedLodgingCostPerDay: 175,
      estimatedFlightCostPerPerson: 200,
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      alt:
        "people crossing the street during the day surrounded by tall buildings and advertisements"
    });
    tripRepository.data[0].getTripCost(destination1);
    tripRepository.data[1].getTripCost(destination2);
    tripRepository.filterTripByUserId(trip1.userID);
    let annualCost1 = tripRepository.getAnnualCost();
    expect(annualCost1).to.equal(5819.000000000001);
  });

  it("should be able to determine annual cost of trips for a different traveler", () => {
    tripRepository.mapTripData();
    const destination1 = new Destination({
      id: 49,
      destination: "Castries, St Lucia",
      estimatedLodgingCostPerDay: 650,
      estimatedFlightCostPerPerson: 90,
      image:
        "https://images.unsplash.com/photo-1524478075552-c2763ea171b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
      alt: "aerial photography of rocky mountain under cloudy sky"
    });
    const destination2 = new Destination({
      id: 25,
      destination: "New York, New York",
      estimatedLodgingCostPerDay: 175,
      estimatedFlightCostPerPerson: 200,
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      alt:
        "people crossing the street during the day surrounded by tall buildings and advertisements"
    });
    tripRepository.data[0].getTripCost(destination1);
    tripRepository.data[1].getTripCost(destination2);
    tripRepository.filterTripByUserId(trip2.userID);
    let annualCost1 = tripRepository.getAnnualCost();
    expect(annualCost1).to.equal(4565);
  });
});

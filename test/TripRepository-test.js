import { expect } from "chai";
import Trip from "../src/Trip";
import TripRepository from "../src/TripRepository";

describe("Trip Repository", () => {
  let trip1;
  let trip2;
  let tripRepository;
  beforeEach(() => {
    trip1 = new Trip({
      id: 1,
      userID: 44,
      destinationID: 49,
      travelers: 1,
      date: "2022/09/16",
      duration: 8,
      status: "approved",
      suggestedActivities: []
    });

    trip2 = new Trip({
      id: 2,
      userID: 35,
      destinationID: 25,
      travelers: 5,
      date: "2022/10/04",
      duration: 18,
      status: "approved",
      suggestedActivities: []
    });
    tripRepository = new TripRepository([trip1, trip2]);
  });

  it("should be a function", function() {
    expect(TripRepository).to.be.a("function");
  });

  it("should be an instance of TripRepository", () => {
    expect(tripRepository).to.be.an.instanceof(TripRepository);
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
    expect(filterTrip1).to.deep.equal([trip1]);
    expect(filterTrip2).to.deep.equal([trip2]);
  });
});
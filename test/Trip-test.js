import { expect } from "chai";
import Trip from "../src/Trip";
import Destination from "../src/Destination";

describe("Trip", () => {
  let trip1;
  let trip2;
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
  });

  it("should be a function", () => {
    expect(Trip).to.be.a("function");
  });

  it("should be able to instantiate multiple trips", () => {
    expect(trip1).to.be.an.instanceof(Trip);
    expect(trip2).to.be.an.instanceOf(Trip);
  });

  it("should be able to store a trip id for multiple trips", () => {
    expect(trip1.id).to.equal(1);
    expect(trip2.id).to.equal(2);
  });

  it("should be able to store a user ID for multiple trips", () => {
    expect(trip1.userID).to.equal(44);
    expect(trip2.userID).to.equal(35);
  });

  it("should be able to store a destination ID for multiple trips", () => {
    expect(trip1.destinationID).to.equal(49);
    expect(trip2.destinationID).to.equal(25);
  });

  it("should be able to store number of travelers for a trip for multiple trips", () => {
    expect(trip1.travelers).to.equal(1);
    expect(trip2.travelers).to.equal(5);
  });

  it("should be able to store the date for a trip for multiple trips", () => {
    expect(trip1.date).to.equal("2022/09/16");
    expect(trip2.date).to.equal("2022/10/04");
  });

  it("should be able to store the duration for a trip for multiple trips", () => {
    expect(trip1.duration).to.equal(8);
    expect(trip2.duration).to.equal(18);
  });

  it("should be able to store the status for a trip for multiple trips", () => {
    expect(trip1.status).to.equal("approved");
    expect(trip2.status).to.equal("approved");
  });

  it("should be able to store the suggested activities for a trip for multiple trips", () => {
    expect(trip1.suggestedActivities).to.deep.equal([]);
    expect(trip2.suggestedActivities).to.deep.equal([]);
  });

  it("should be able to store the trip cost for a trip for multiple trips", () => {
    expect(trip1.tripCost).to.deep.equal(0);
    expect(trip2.tripCost).to.deep.equal(0);
  });

  it("should be able to store the category for a trip for multiple trips", () => {
    expect(trip1.category).to.deep.equal("");
    expect(trip2.category).to.deep.equal("");
  });

  it("should be able to determine trip cost of trips for multiple trips", () => {
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
    trip1.getTripCost(destination1);
    trip2.getTripCost(destination2);

    expect(trip1.tripCost).to.equal(5819.000000000001);
    expect(trip2.tripCost).to.equal(4565);
  });

  it("should be able to determine trip category of trip for multiple trips", () => {
    trip1.getTripCategory();
    trip2.getTripCategory();
    expect(trip1.category).to.equal("upcoming");
    expect(trip2.category).to.equal("upcoming");
  });
});

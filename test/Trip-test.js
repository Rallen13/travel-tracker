import { expect } from "chai";
import Trip from "../src/Trip";

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

  it("should be able to store number of travelers for a trip", () => {
    expect(trip1.travelers).to.equal(1);
    expect(trip2.travelers).to.equal(5);
  });

  it.only("should be able to store the date for a trip", () => {
    expect(trip1.date).to.equal("2022/09/16");
    expect(trip2.date).to.equal("2022/10/04");
  });
});

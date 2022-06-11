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

  it.only("should be able to store a trip id for multiple trips", () => {
    expect(trip1.id).to.equal(1);
    expect(trip2.id).to.equal(2);
  });

  it("should be able to store a trip name for multiple travlers", () => {
    expect(trip1.name).to.equal("Ham Leadbeater");
    expect(trip2.name).to.equal("Rachael Vaughten");
  });

  it("should be able to store a trip type for multiple trips", () => {
    expect(trip1.tripType).to.equal("relaxer");
    expect(trip2.tripType).to.equal("thrill-seeker");
  });

  it("should be able to return only the first name for multiple trips", () => {
    const firstName1 = trip1.getFirstName();
    const firstName2 = trip2.getFirstName();
    expect(firstName1).to.equal("Ham");
    expect(firstName2).to.equal("Rachael");
  });
});

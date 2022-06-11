import { expect } from "chai";
import Destination from "../src/Destination";

describe("Destination", () => {
  let destination1;
  let destination2;
  beforeEach(() => {
    destination1 = new Destination({
      id: 1,
      destination: "Lima, Peru",
      estimatedLodgingCostPerDay: 70,
      estimatedFlightCostPerPerson: 400,
      image:
        "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
      alt: "overview of city buildings with a clear sky"
    });
    destination2 = new Destination({
      id: 2,
      destination: "Stockholm, Sweden",
      estimatedLodgingCostPerDay: 100,
      estimatedFlightCostPerPerson: 780,
      image:
        "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      alt: "city with boats on the water during the day time"
    });
  });

  it.only("should be a function", () => {
    expect(Destination).to.be.a("function");
  });

  it("should be able to instantiate multiple destinations", () => {
    expect(destination1).to.be.an.instanceof(Destination);
    expect(destination2).to.be.an.instanceOf(Destination);
  });

  it("should be able to store a destination id for multiple destinations", () => {
    expect(destination1.id).to.equal(1);
    expect(destination2.id).to.equal(2);
  });

  it("should be able to store a user ID for multiple destinations", () => {
    expect(destination1.userID).to.equal(44);
    expect(destination2.userID).to.equal(35);
  });

  it("should be able to store a destination ID for multiple destinations", () => {
    expect(destination1.destinationID).to.equal(49);
    expect(destination2.destinationID).to.equal(25);
  });

  it("should be able to store number of travelers for a destination", () => {
    expect(destination1.travelers).to.equal(1);
    expect(destination2.travelers).to.equal(5);
  });

  it("should be able to store the date for a destination", () => {
    expect(destination1.date).to.equal("2022/09/16");
    expect(destination2.date).to.equal("2022/10/04");
  });

  it("should be able to store the duration for a destination", () => {
    expect(destination1.duration).to.equal(8);
    expect(destination2.duration).to.equal(18);
  });

  it("should be able to store the status for a destination", () => {
    expect(destination1.status).to.equal("approved");
    expect(destination2.status).to.equal("approved");
  });

  it("should be able to store the suggested activities for a destination", () => {
    expect(destination1.suggestedActivities).to.deep.equal([]);
    expect(destination2.suggestedActivities).to.deep.equal([]);
  });
});

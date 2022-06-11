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

  it("should be a function", () => {
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

  it("should be able to store a destination for multiple destinations", () => {
    expect(destination1.destination).to.equal("Lima, Peru");
    expect(destination2.destination).to.equal("Stockholm, Sweden");
  });

  it("should be able to store estimated lodging cost per day for multiple destinations", () => {
    expect(destination1.estimatedLodgingCostPerDay).to.equal(70);
    expect(destination2.estimatedLodgingCostPerDay).to.equal(100);
  });

  it("should be able to store estimated flight cost per person for multiple destinations", () => {
    expect(destination1.estimatedFlightCostPerPerson).to.equal(400);
    expect(destination2.estimatedFlightCostPerPerson).to.equal(780);
  });

  it("should be able to store an image for a destination for multiple destinations", () => {
    expect(destination1.image).to.equal(
      "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
    );
    expect(destination2.image).to.equal(
      "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    );
  });

  it("should be able to store the alt text for an image for a destination for multiple destinations", () => {
    expect(destination1.alt).to.equal(
      "overview of city buildings with a clear sky"
    );
    expect(destination2.alt).to.equal(
      "city with boats on the water during the day time"
    );
  });
});

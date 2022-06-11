import { expect } from "chai";
import Destination from "../src/Destination";
import DestinationRepository from "../src/DestinationRepository";

describe("Destination Repository", () => {
  let destination1;
  let destination2;
  let destinationRepository;
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
    destinationRepository = new DestinationRepository([
      destination1,
      destination2
    ]);
  });

  it("should be a function", function() {
    expect(DestinationRepository).to.be.a("function");
  });

  it("should be an instance of DestinationRepository", () => {
    expect(destinationRepository).to.be.an.instanceof(DestinationRepository);
  });

  it.only("should be able to determine destination data by id for multiple destinations", () => {
    let determineDestination1 = destinationRepository.findDestinationById(
      destination1.id
    );
    let determineDestination2 = destinationRepository.findDestinationById(
      destination2.id
    );
    expect(determineDestination1).to.equal(destination1);
    expect(determineDestination2).to.equal(destination2);
  });
});

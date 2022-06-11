import { expect } from "chai";
import Traveler from "../src/Traveler";
import TravelerRepository from "../src/TravelerRepository";

describe("Traveler Repository", () => {
  let traveler1;
  let traveler2;
  let travelerRepository;
  beforeEach(() => {
    traveler1 = new Traveler({
      id: 1,
      name: "Ham Leadbeater",
      travelerType: "relaxer"
    });

    traveler2 = new Traveler({
      id: 2,
      name: "Rachael Vaughten",
      travelerType: "thrill-seeker"
    });
    travelerRepository = new TravelerRepository([traveler1, traveler2]);
  });

  it("should be a function", function() {
    expect(TravelerRepository).to.be.a("function");
  });

  it("should be an instance of TravelerRepository", () => {
    expect(travelerRepository).to.be.an.instanceof(TravelerRepository);
  });

  it("should be able to determine traveler data by id for multiple travelers", () => {
    let determineTraveler1 = travelerRepository.findTraveler(traveler1.id);
    let determineTraveler2 = travelerRepository.findTraveler(traveler2.id);
    expect(determineTraveler1).to.equal(traveler1);
    expect(determineTraveler2).to.equal(traveler2);
  });
});

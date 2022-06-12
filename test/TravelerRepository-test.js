import { expect } from "chai";
import Traveler from "../src/Traveler";
import TravelerRepository from "../src/TravelerRepository";

describe("Traveler Repository", () => {
  let traveler1;
  let traveler2;
  let travelerRepository;
  beforeEach(() => {
    traveler1 = {
      id: 1,
      name: "Ham Leadbeater",
      travelerType: "relaxer"
    };

    traveler2 = {
      id: 2,
      name: "Rachael Vaughten",
      travelerType: "thrill-seeker"
    };
    travelerRepository = new TravelerRepository([traveler1, traveler2]);
  });

  it("should be a function", function() {
    expect(TravelerRepository).to.be.a("function");
  });

  it("should be an instance of TravelerRepository", () => {
    expect(travelerRepository).to.be.an.instanceof(TravelerRepository);
  });

  it("should be able to determine traveler data by id for multiple travelers", () => {
    let determineTraveler1 = travelerRepository.findTravelerById(traveler1.id);
    let determineTraveler2 = travelerRepository.findTravelerById(traveler2.id);
    expect(determineTraveler1).to.be.an.instanceof(Traveler);
    expect(determineTraveler1.id).to.equal(traveler1.id);
    expect(determineTraveler2).to.be.an.instanceof(Traveler);
    expect(determineTraveler2.id).to.equal(traveler2.id);
  });
});

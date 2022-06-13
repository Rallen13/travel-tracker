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
    expect(travelerRepository).to.be.an.instanceOf(TravelerRepository);
  });

  it("should be able to store data for multiple travelers", () => {
    expect(travelerRepository.data).to.deep.equal([traveler1, traveler2]);
  });

  it("should be able to mutate the date to store multiple instances of Traveler", () => {
    travelerRepository.mapTravelerData();
    expect(travelerRepository.data[0]).to.be.an.instanceOf(Traveler);
    expect(travelerRepository.data[1]).to.be.an.instanceOf(Traveler);
  });

  it("should be able to determine traveler data by id for multiple travelers", () => {
    let determineTraveler1 = travelerRepository.findTravelerById(traveler1.id);
    let determineTraveler2 = travelerRepository.findTravelerById(traveler2.id);
    expect(determineTraveler1).to.equal(traveler1);
    expect(determineTraveler2).to.equal(traveler2);
  });
});

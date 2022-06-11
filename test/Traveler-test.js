import { expect } from "chai";
import Traveler from "../src/Traveler";

describe("Traveler", () => {
  let traveler1;
  let traveler2;
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
  });

  it("should be a function", () => {
    expect(Traveler).to.be.a("function");
  });

  it("should be able to instantiate multiple travelers", () => {
    expect(traveler1).to.be.an.instanceof(Traveler);
    expect(traveler2).to.be.an.instanceOf(Traveler);
  });

  it("should be able to store a traveler id for multiple travelers", () => {
    expect(traveler1.id).to.equal(1);
    expect(traveler2.id).to.equal(2);
  });

  it("should be able to store a traveler name for multiple travlers", () => {
    expect(traveler1.name).to.equal("Ham Leadbeater");
    expect(traveler2.name).to.equal("Rachael Vaughten");
  });

  it("should be able to store a traveler type for multiple travelers", () => {
    expect(traveler1.travelerType).to.equal("relaxer");
    expect(traveler2.travelerType).to.equal("thrill-seeker");
  });

  it.only("should be able to return only the first name for multiple travelers", () => {
    const firstName1 = traveler1.getFirstName();
    const firstName2 = traveler2.getFirstName();
    expect(firstName1).to.equal("Ham");
    expect(firstName2).to.equal("Rachael");
  });
});

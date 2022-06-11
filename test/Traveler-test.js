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

  it.only("should be a function", () => {
    expect(Traveler).to.be.a("function");
  });

  it("should be able to instantiate multiple users", () => {
    expect(traveler1).to.be.an.instanceof(Traveler);
    expect(traveler2).to.be.an.instanceOf(Traveler);
  });

  it("should be able to store a user id for multiple users", () => {
    expect(traveler1.id).to.equal(1);
    expect(traveler2.id).to.equal(7);
  });

  it("should be able to store a user name for multiple users", () => {
    expect(traveler1.name).to.equal("Luisa Hane");
    expect(traveler2.name).to.equal("Breanne Fay");
  });

  it("should be able to store a user address for multiple users", () => {
    expect(traveler1.address).to.equal(
      "15195 Nakia Tunnel, Erdmanport VA 19901-1697"
    );
    expect(traveler2.address).to.equal(
      "834 Retta Knoll, Stantonland MA 71627-4121"
    );
  });

  it("should be able to return only the first name for multiple users", () => {
    const firstName1 = traveler1.returnFirstName();
    const firstName2 = traveler2.returnFirstName();
    expect(firstName1).to.equal("Luisa");
    expect(firstName2).to.equal("Breanne");
  });
});

import Traveler from "./Traveler";

class TravelerRepository {
  constructor(data) {
    this.data = this.mapTravelerData(data);
  }

  mapTravelerData = data => {
    return data.map(traveler => {
      return new Traveler(traveler);
    });
  };

  findTravelerById = id => {
    return this.data.find(traveler => {
      // console.log(id);
      // console.log(traveler);
      return traveler.id === id;
    });
  };
}

export default TravelerRepository;

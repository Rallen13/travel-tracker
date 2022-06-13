import Traveler from "./Traveler";

class TravelerRepository {
  constructor(data) {
    this.data = data;
  }

  mapTravelerData = () => {
    return (this.data = this.data.map(traveler => {
      return new Traveler(traveler);
    }));
  };

  findTravelerById = id => {
    return this.data.find(traveler => {
      return traveler.id === id;
    });
  };
}

export default TravelerRepository;

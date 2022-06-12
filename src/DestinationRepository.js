import Destination from "./Destination";

class DestinationRepository {
  constructor(data) {
    this.data = this.mapDestinationData(data);
  }

  mapDestinationData = data => {
    return data.map(destination => {
      return new Destination(destination);
    });
  };

  findDestinationById = id => {
    return this.data.find(destination => {
      return destination.id === id;
    });
  };
}

export default DestinationRepository;

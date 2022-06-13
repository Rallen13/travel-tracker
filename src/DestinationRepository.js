import Destination from "./Destination";

class DestinationRepository {
  constructor(data) {
    this.data = data;
  }

  mapDestinationData = () => {
    return (this.data = this.data.map(destination => {
      return new Destination(destination);
    }));
  };

  findDestinationById = id => {
    return this.data.find(destination => {
      return destination.id === id;
    });
  };
}

export default DestinationRepository;

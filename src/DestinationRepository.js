class DestinationRepository {
  constructor(data) {
    this.data = data;
  }

  findDestinationById = id => {
    return this.data.find(destination => {
      return destination.id === id;
    });
  };
}

export default DestinationRepository;

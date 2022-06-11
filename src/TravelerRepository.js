class TravelerRepository {
  constructor(data) {
    this.data = data;
  }
  findTraveler = id => {
    return this.data.find(traveler => {
      return traveler.id === id;
    });
  };
}

export default TravelerRepository;

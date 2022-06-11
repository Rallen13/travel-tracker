class TripRepository {
  constructor(data) {
    this.data = data;
  }

  findTripById = id => {
    return this.data.find(trip => {
      return trip.id === id;
    });
  };

  filterTripByUserId = id => {
    return this.data.filter(trip => {
      return trip.userID === id;
    });
  };
}

export default TripRepository;

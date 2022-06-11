import Trip from "./Trip";

class TripRepository {
  constructor(data) {
    this.data = this.mapTripData(data);
  }

  mapTripData = data => {
    return data.map(trip => {
      return new Trip(trip);
    });
  };

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

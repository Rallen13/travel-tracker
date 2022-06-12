import Trip from "./Trip";
const dayjs = require("dayjs");

class TripRepository {
  constructor(data) {
    this.data = this.mapTripData(data);
    this.travelersTrips = [];
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
    return (this.travelersTrips = this.data
      .filter(trip => {
        return trip.userID === id;
      })
      .sort((a, b) => {
        return dayjs(b.date) - dayjs(a.date);
      }));
  };

  getAnnualCost = () => {
    return this.travelersTrips.reduce((acc, trip) => {
      acc += trip.tripCost;
      return acc;
    }, 0);
  };
}

export default TripRepository;

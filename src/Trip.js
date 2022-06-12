class Trip {
  constructor(tripData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.travelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = [];
    this.tripCost = 0;
  }

  getTripCost = destination => {
    const lodgingTotal = this.duration * destination.estimatedLodgingCostPerDay;
    const flightTotal =
      this.travelers * destination.estimatedFlightCostPerPerson;
    this.tripCost = parseInt(((lodgingTotal + flightTotal) * 1.1).toFixed(2));
  };
}

export default Trip;

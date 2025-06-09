function analyzeCarMileage(cars) {
  return cars.reduce((result, car, i) => {
    result.totalMileage += car.mileage;
    if (!result.highestMileageCar || !result.lowestMileageCar) {
      result.highestMileageCar = car;
      result.lowestMileageCar = car;
    }
    if (car.mileage > result.highestMileageCar.mileage) {
      result.highestMileageCar = car;
    }
    if (car.mileage < result.lowestMileageCar.mileage) {
      result.lowestMileageCar = car;
    }
    result.averageMileage = Number((result.totalMileage / (i + 1)).toFixed(2));
    return result;
  }, {
    averageMileage: 0,
    highestMileageCar: null,
    lowestMileageCar: null,
    totalMileage: 0
  })
}

module.exports = analyzeCarMileage;

// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

console.log(returnFirstTwoDrivers(drivers)); 

  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };


const fareDoubler = createFareMultiplier(2);

console.log(fareDoubler(10)); 

const selectDifferentDrivers = function(drivers, selectingFunction) {
    return selectingFunction(drivers);
  };


console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); 
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); 


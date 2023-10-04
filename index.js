// Code your solution in this file!
const returnFirstTwoDrivers = (Drivers) => {return [Drivers[0], Drivers[1]]}
const returnLastTwoDrivers = (Drivers) => {return [Drivers[Drivers.length-2], Drivers[Drivers.length-1]]}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(num) {
    return (fare) => {return fare * num}; 
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(Drivers,returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(Drivers);
}


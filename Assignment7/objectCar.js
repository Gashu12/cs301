'use strict';
let car = {
    make: "TOYOTA",
    model: "CAMRY",
    year: 2020,
    odometer: 5000,
    serviceCount: 0,

    service: function(){return this.serviceCount++},
    getOdometerReading: function(){return this.odometer},
    reset: function(){this.odometer = 0; this.service = 0;}
}
console.log(car.service());
console.log(car.service());
console.log(car.service());
console.log(car.getOdometerReading());
console.log(car.reset());
console.log(car.service);
console.log(car.getOdometerReading());


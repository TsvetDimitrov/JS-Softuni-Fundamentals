// Create a class with name Vehicle that has the following properties:
// •	type – a string
// •	model – a string
// •	parts – an object that contains:
// o	engine – number (quality of the engine)
// o	power – number
// o	quality – engine * power
// •	fuel – a number
// •	drive – a function that receives fuel loss and decreases the fuel of the vehicle by that number
// The constructor should receive the type, the model, the parts as an object and the fuel
// In judge post your class (Note: all names should be as described)


class Vehicle {
    constructor(type, model, { engine, power }, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
            engine,
            power,
            quality: engine * power
        }
        this.fuel = fuel;
    }

    drive(fuelLoss) {
        return this.fuel -= fuelLoss;
    }
}





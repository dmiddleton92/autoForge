// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
// TODO: Declare properties of the Truck class
// TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
// TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)

// TODO: Create a constructor that accepts the properties of the Truck class
// TODO: The constructor should call the constructor of the parent class, Vehicle
// TODO: The constructor should initialize the properties of the Truck class
// TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not

// TODO: Implement the tow method from the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  override vin!: string;
  color!: string;
  override make!: string;
  override model!: string;
  override year!: number;
  override weight!: number;
  override topSpeed!: number;
  wheels!: Wheel[];
  towingCapacity!: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    towingCapacity: number,
    wheels: Wheel[] = []
  ) {
    super(vin, make, model, year, weight, topSpeed);
    this.color = color;
    this.towingCapacity = towingCapacity;
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    }
  }


  tow(vehicle: Truck | Motorbike | Car): void {
    const { make, model, weight } = vehicle;

    if (weight <= this.towingCapacity) {
      console.log(`Towing vehicle: ${make} ${model}`);
    } else {
      console.log(`The vehicle ${make} ${model} is too heavy to be towed.`);
    }
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // Call the printDetails method of the parent class
    super.printDetails();
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    console.log(`Wheels: ${this.wheels.map(wheel => `Diameter: ${wheel.diameter}, Brand: ${wheel.tireBrand}`).join(', ')}`);
  }
}


// Export the Truck class as the default export
export default Truck;

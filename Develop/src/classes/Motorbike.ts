// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
  // TODO: Declare properties of the Motorbike class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])

  // TODO: Create a constructor that accepts the properties of the Motorbike class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Motorbike class
    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not

  // TODO: Implement the wheelie method
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"

  // TODO: Override the printDetails method from the Vehicle class
  // TODO: The method should call the printDetails method of the parent class
  // TODO: The method should log the details of the Motorbike
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels

class Motorbike extends Vehicle {
  override vin!: string;
  color!: string;
  override make!: string;
  override model!: string;
  override year!: number;
  override weight!: number;
  override topSpeed!: number;
  wheels!: Wheel[];

  constructor( 
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[] 
  ) {
    super(vin, make, model, year, weight, topSpeed);
    this.color = color;
    this.wheels = wheels.length === 2 ? wheels : [new Wheel(), new Wheel()];
  }

wheelie(): void {
  console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
}

override printDetails(): void {
  super.printDetails();
  console.log(`Details: 
      VIN: ${this.vin}
      Make: ${this.make}
      Model: ${this.model}
      Year: ${this.year}
      Weight: ${this.weight} lbs
      Top Speed: ${this.topSpeed} MPH
      Color: ${this.color}
      Wheels: ${this.wheels.length} wheels`);
  }
}

// Export the Motorbike class as the default export
export default Motorbike;

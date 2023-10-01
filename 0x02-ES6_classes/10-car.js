export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Returns this class constructor itself and passed into cloneCar constructor.
  static get [Symbol.species]() {
    return this;
  }

  /* A method that constructs an instance of a class instead of using the class contructor directly:
            Creates a new instance and returns this method's constructor function (this.constructor)
            and uses the [Symbol.species] which gets the class constructor itself. B doing this
            the instance is not directly created from the class constructor but from this method.
            Example instance: const tc2 = tc1.cloneCar(); */
  cloneCar() {
    const CarModel = this.constructor[Symbol.species];
    return new CarModel();
  }
}

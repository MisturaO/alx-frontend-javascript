export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a Number');
    } else if (typeof location !== 'string') {
      throw new TypeError('location must be a String');
    }
    this._size = size;
    this._location = location;
  }

  // Implements custom type conversion to primitive data type (here it's to Number)
  valueOf() {
    return this._size;
  }

  // Implements custom type conversion to primitive data type (here it's to String)
  toString() {
    return this._location;
  }
}

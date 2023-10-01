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

  /* I can also implement both conversions using the 'Symbol.tpPrimitive' symbol,
  when defined as a method it takkes precedednce on both the valueOf() and toString()
  */
//   [Symbol.toPrimitive](hint){
//     if(hint === 'number'){
//         return this._size;
//     }
//     if(hint == 'string'){
//         return this._location;
//     }
    /* This is the default option to ensure that the object itself is returned if the 
    conversion hint is not one of the expected values above, to avoid unexpected behaviour*/
//     return this;
//   }
}



/* USAGE: When you convert the object to a primitive type, the interpreter will return any object 
that is explicitly converted to that particular primitive type in the object/class declarartion */
// const hc = new HolbertonClass(12, "Mezzanine") //Object created from the instance of the class
// console.log(Number(hc)); // Output: 12
// console.log(String(hc)); // Output: "Mezzanine"

class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    } else if (typeof code !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = name;
    this._code = code;
  }

  /* This provide a more informative label or identifier(or tag) for that object
  (i.e instance of this class), Whe we want to identify what object it is durig
  debugging instead of getting [object object] we will get [object string_representation]
  which the string retured i this get method
  */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}

export default Airport;

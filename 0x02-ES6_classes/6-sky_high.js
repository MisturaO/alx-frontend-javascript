import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    // if (typeof floors !== 'number') {
    //   throw new TypeError('floors must be a number');
    // }
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(val) {
    this._floors = val;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}

export default SkyHighBuilding;

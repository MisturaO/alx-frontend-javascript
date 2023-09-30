/* An abstract class that makes sure any class that extends from it should
implement a method named evacuationWarningMessage or throw an error if they don't
*/

export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }

    /*
        The purpose of this condition is to prevent instances of the Building class 
        from being created directly because it's intended to be an abstract class (i.e. 
        inherited) i.e. if its not being used to instatiate an instance:
            Checks if the constructor of the instance (this.constructor) is not the
            Building class itself, and if the 'evacuationWarningMessage' method is a function.
            If these conditions are not met, it throws an error, enforcing that subclasses must
            override the evacuationWarningMessage method.
        */
    if (this.constructor !== Building
            && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}

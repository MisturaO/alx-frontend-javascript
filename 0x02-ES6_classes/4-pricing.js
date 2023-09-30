import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Not a number');
    } else if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be an instance of the class Currency');
    }

    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Not a number');
    }
    this._amount = val;
  }

  get currency() {
    return this.currency;
  }

  set currency(val) {
    if (!(val instanceof Currency)) {
      throw new TypeError('val must be an instance of the class Currency');
    }
    this._currency = val;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Not a number');
    } else if (typeof conversionRate !== 'number') {
      throw new TypeError('Not a number');
    }
    return amount * conversionRate;
  }
}

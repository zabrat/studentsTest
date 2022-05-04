export default class Model {
  constructor() {
    this.input1 = null;
    this.input2 = null;

    this.displaySign = null;
  }

  plus() {
    return this.input1 + this.input2;
  }
  minus() {
    return this.input1 - this.input2;
  }
  devide() {
    return this.input1 / this.input2;
  }
  multiply() {
    return this.input1 * this.input2;
  }
}

export default class Model {
  constructor() {
    this.firstInputValue = null;
    this.secondInputValue = null;

    this.result = null;
    this.signs = null;
  }

  plas() {
    this.result = +this.firstInputValue + +this.secondInputValue;
  }

  minus() {
    this.result = +this.firstInputValue - +this.secondInputValue;
  }

  division() {
    this.result = +this.firstInputValue / +this.secondInputValue;
  }

  multiply() {
    this.result = +this.firstInputValue * +this.secondInputValue;
  }
}

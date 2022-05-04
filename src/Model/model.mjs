export default class Model {
  constructor() {
    this.leftValue = 0
    this.rightValue = 0
  }

  leftInpValue = (Value) => {
    this.leftValue = Value;
  };
  rightInpValue = (Value) => {
    this.rightValue = Value;
  };
}

export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.button.array.forEach(element => {
      this.button.addEventListener(("submit"))
    });
  }
}

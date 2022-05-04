export default class View {
  constructor() {
    this.el = document.createElement('div');

  }
  render() {
    this.el.innerHTML = `
      <h1>MVC Calculator</h1>
      <div class="calculator">
        <input type="text" class="first"/>
        <div class="mode">+</div>
        <input type="text" class="second"/>
        <div class="equals">=</div>
        <input class="result" value="0" disabled></div>
        <br>
        <div class="buttons">
          <button class="button" id="+">+</button>
          <button class="button" id="-">-</button>
          <button class="button" id="*">*</button>
          <button class="button" id="/">/</button>
        </div>
      </div>`
    document.body.appendChild(this.el);

    this.input1 = this.el.querySelector('.first');
    this.input2 = this.el.querySelector('.second');
    this.inputs = [this.input1, this.input2];
    this.result = this.el.querySelector('.result');
    this.buttons = this.el.querySelectorAll('.button');
    this.mode = this.el.querySelector('.mode');
  }



}
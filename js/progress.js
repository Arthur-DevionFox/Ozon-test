class Progress {
  constructor(element) {
    this._element = element
    this._arc = document.querySelector(".progress-ring__arc")
    this._circumference = 2 * Math.PI * 46
    this._arc.style.strokeDasharray = this._circumference
    this.setValue(0);
  }
 
  setValue(value) {
    const clamped = Math.min(100, Math.max(0, Number(value)));
    const offset = this._circumference * (1 - clamped / 100);
    this._arc.style.strokeDashoffset = offset;
  }

  setAnimate(bool) {
    this._element.classList.toggle('progress-block--animated', bool);
  }

  setHidden(bool) {
    this._element.classList.toggle('progress-block--hidden', bool);
  }
}
 
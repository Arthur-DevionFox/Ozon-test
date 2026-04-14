class Progress {
  #element;
  #arc;
  #circumference;
 
  constructor(element) {
    this.#element = element
    this.#arc = document.querySelector(".progress-ring__arc")
    this.#circumference = 2 * Math.PI * 46
    this.#arc.style.strokeDasharray = this.#circumference
    this.setValue(0);
  }
 
  setValue(value) {
    
  }
 
  setAnimate(bool) {
    
  }
 
  setHidden(bool) {
    
  }
}
 
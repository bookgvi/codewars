function Modal() {
  this.m = new Map();
  this.b = document.querySelectorAll('[data-popup]')
  this.b.forEach((item) => {
    if(item.tagName=='A') {
      this.m.set(item.dataset.popup, document.querySelector(`[data-modal~="${item.dataset.popup}"]`))
    }
  })
  // this.modal = document.querySelector('.popup');
  // this.btn1 = document.querySelector('.button-frst');
  // this.btnOfpopup = document.querySelector('form .button-frst')
  self = this

  this.popup = function(e) {
    if (self.m.has(e.target.dataset.popup)) {
      self.m.get(e.target.dataset.popup).style.display = 'block'
    }
    else if (e.target.dataset.modal) {
      const modal = document.querySelector(`[data-modal="${e.target.dataset.modal}"]`)
      modal.style.display = 'none'
    }
  }
  document.body.onclick = this.popup;

}
new Modal();


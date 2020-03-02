function Utils () {
  this.SIZE = 1000;
  this.fragment = document.createDocumentFragment();
}

Object.defineProperties(Utils.prototype, {
  arr: {
    get () {
      return Array.apply(Utils, { length: this.SIZE }).map(() => (Math.random() * this.SIZE).toFixed(0));
    }
  }
});

Utils.prototype.createDomEl = function (item) {
  const span = document.createElement('span');
  span.textContent = `${item} `;
  this.fragment.appendChild(span);
}

Utils.prototype.appendDomElToBody = function () {
  document.body.appendChild(this.fragment);
}

export const utils = new Utils();

/**
 * Те же утилиты, только в другой нотации
 */
export const UtilsLiteral = {
  SIZE: 1000,
  fragment: document.createDocumentFragment(),

  get arr () {
    return Array.apply(UtilsLiteral, { length: this.SIZE }).map(() => +(Math.random() * this.SIZE).toFixed(0))
  },

  createDomEl (item) {
    const span = document.createElement('span');
    span.textContent = `${item} `;
    this.fragment.appendChild(span);
  },
  appendDomElToBody (timerStart) {
    document.body.appendChild(this.fragment);
    if (timerStart) {
      console.log(`Отрисовка содержимого массива завершена... ETA = ${((new Date() - timerStart) / 1000).toFixed(2)}сек`);
    }
  }
};

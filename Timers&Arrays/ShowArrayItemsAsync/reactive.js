const reactiveObj = {
  progress: 0,
  el: document.querySelector('.progress'),
  decorator: document.querySelector('.decorator')
}

export const reactiveObjProxy = new Proxy(reactiveObj, {
  set(target, key, val, receiver) {
    if (val < 100 && val > 0) {
      target.el.textContent = val;
    }
    return Reflect.set(...arguments);
  }
});

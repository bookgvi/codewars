const reactiveObj = {
  progress: 0,
  el: document.querySelector('.progress'),
  decorator: document.querySelector('.decorator')
}

export const reactiveObjProxy = new Proxy(reactiveObj, {
  set(target, key, val, receiver) {
    val = (val * 100).toFixed(0);
    if (target.el && val < 100) {
      target.el.textContent = val;
    } else if (target.el && val >= 100) {
      target.el.textContent = val;
    }
    return Reflect.set(...arguments);
  }
});

function User () {
  this._name = 'USER';
}

Object.defineProperty(User.prototype, 'name', {
  get () {
    return this._name;
  }
})

user = new User();

userProxy = new Proxy(user, {
  get (target, key) {
    console.log('...proxy...');
    return target[key];
  }
});

userProxy1 = new Proxy(user, {
  get (target, key, receiver) {
    return Reflect.get(target, key, receiver);
  }
});


admin = {
  __proto__: userProxy,
  _name: 'ADMIN'
}

admin1 = {
  __proto__: userProxy1,
  _name: 'ADMIN1'
}

console.log(userProxy.name);
console.log(admin.name);
console.log(admin1.name);

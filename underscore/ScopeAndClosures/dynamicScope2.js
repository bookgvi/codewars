const _ = require('underscore')

function someFn() { return this }
console.log(someFn.call('new Context 1'))
console.log(someFn.apply('new Context 2', []))


target = {
  name: 'the right value',
  aux: function() { return this.name; },
  act: function() { return this.aux(); }
}

// target.act.call('new Context 1') // An ERROR due to context! TypeError: this.aux is not a function
target.act = target.act.bind(target)  // Привязываем контекст!!!
target.aux = target.aux.bind(target)  // Привязываем контекст!!!
console.log(target.act.call('new Context 1')) // Ошибки больше нет
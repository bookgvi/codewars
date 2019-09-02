function * iterator() {
  for (var i = 0; i < 10; i++) {
    yield i
  }
}

a = iterator()
let b
do {
  b = a.next()
  !b.done ? console.log(b.value) : ''
} while (!b.done)

obj1 = {
  *[Symbol.iterator]() {
    for (let i=0; i<10; i++) {
      yield i
    }
  }
}

for (key of obj1) { console.log(key) }

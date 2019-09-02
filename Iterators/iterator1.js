function * iterator() {
  for (var i = 0; i < 10; i++){
    yield i
  }
}

a = iterator()
let b
do {
  b = a.next()
  console.log(b.value)
} while (!b.done)

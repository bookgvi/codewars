console.log('1')
let prom = new Promise(resolve => {
  setTimeout(() => {
    console.log('Inside promise')
    resolve()
  },0)
})
  .then(() => console.log('3'))
console.log('2')
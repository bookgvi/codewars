console.log('1')
new Promise(resolve => {
  setTimeout(() => {
    console.log('2')
  },0)
  resolve('done')
})
console.time('q')
for (let i=0; i<300000000; i++) {
  c= i / i
}
console.timeEnd('q')

  console.log('3')
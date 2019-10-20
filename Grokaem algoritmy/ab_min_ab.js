const hasAB = (a, b) => a + b < Math.min(a, b)
const b = -100
const min = -100
const max = 100
for (let i = min; i <= max; i++) {
  if (hasAB(i, b)) {
    console.log(`Cool params are a = ${i} b = ${b}`)
  }
}

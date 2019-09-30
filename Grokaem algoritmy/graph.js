const f = 1
const b = { 5: f }
const a = { 1: f, 3: b }

const s = { 6: a, 2: b }

function showWeight (obj) {
  Object.keys(obj).forEach(item => {
    if (typeof obj[item] === 'object') {
      console.log('o', item)
      showWeight(obj[item])
    } else {
      console.log('i', item)
    }
  })
}
showWeight(s)
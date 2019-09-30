// const s = new Map()
// const a = new Map()
// const b = new Map()
// const f = new Map()
// const graph = [s, b, a, f]
// s.set(b, 2)
// s.set(a, 6)
// a.set(f, 1)
// b.set(a, 3)
// b.set(f, 5)
//
// const sa = s.get(a)
// const sb = s.get(b)
// const ba = b.get(a)
// const bf = b.get(f)
// const af = a.get(f)
//
// data = {
//   s: {
//     a: {
//       b: {
//         f: {}
//       }
//     },
//     b: {
//       f: {}
//     }
// }
//   }

const b = { f: 5 }
const a = { f: 1, [b]: 3 }

data = {
  s: { [a]: 6, [b]: 2 }
}

console.log(data)
// graph.forEach((item, index) => index.forEach(item1 => console.log(item, index)))
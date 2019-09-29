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
// grpahWeight = graph => {
//   if(!graph) { return graph}
//   for (key in graph) {
//     return grpahWeight(key)
//   }
// }
//
const s = {
  a: 6,
  b: 2
}
const a = {
  f: 1
}
const b = {
  a: 3,
  f: 5
}

function graph (gr) {
  for (key in gr) {
    if (!key) {
      return graph(key)
    }
    console.log(gr[key], graph(key))
  }
}

console.log(graph(s))
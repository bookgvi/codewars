const s = new Map()
const a = new Map()
const b = new Map()
const f = new Map()
const graph = [s, b, a, f]
s.set(b, 2)
s.set(a, 6)
a.set(f, 1)
b.set(a, 3)
b.set(f, 5)

const sa = s.get(a)
const sb = s.get(b)
const ba = b.get(a)
const bf = b.get(f)
const af = a.get(f)

// graph.forEach((item, index) => item.forEach((item, index) => index.forEach((item, index) => console.log(index, item)), item))

grpahWeight = graph => {
  // if(!graph) { return }
  graph.forEach((item, key) => grpahWeight(key))
}

console.log(grpahWeight(s))
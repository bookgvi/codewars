const set1 = ['strawberry', 'banana', 'we', 'qweqweqwe', '123']
const set2 = ['watermellon', 'apple', 'we', 'eewwqq', 'apple', '123']

console.log(set1.map(item1 => set2.filter(item2 => item2.includes(item1))).filter(item => item.length > 0))
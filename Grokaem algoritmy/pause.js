pauses = async function(arr) {
  await arr.forEach(item => {
    setTimeout(async () => { await console.log(item) }, 1000)
  })
}

const arr = [1, 2, 3, 4]

pauses(arr)
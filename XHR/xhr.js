const url = new URL('https://jsonplaceholder.typicode.com/posts/1')
const xhr = new XMLHttpRequest()
xhr.open('GET', url)
xhr.send()
xhr.onload = () => {
  if (xhr.status !== 200) {
    return Error
  } else {
    console.log(xhr.response)
  }
})
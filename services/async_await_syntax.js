// write a function that makes an ajax request
// uses fetch
// detches a blob of json
//http://rallycoding.herokuapp.com/api/music_albums

// function fetchAlbums() {
//   fetch("http://rallycoding.herokuapp.com/api/music_albums")
//   .then(res => res.json())
//   .then(json => console.log(json))
// }

// new syntax for async await
// this tell js operator that the function we are about to declare
// is an async function
// this still creates a promise behind the scenes
const fetchAlbums = async () => {
  const res = await fetch("http://rallycoding.herokuapp.com/api/music_albums")
  const json = await res.json())
  console.log(json)
}
// any request made with fetch , it returns a promise
// after the fetch gets a

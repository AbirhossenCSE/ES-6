// // First tecnique
// fetch('https://jsonplaceholder.typicode.com/todos/1')

//       .then(response => response.json())
//     //   .then(response => console.log(response))

//       .then(json => console.log(json))


// 2nd tecnique
const url = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json))


// 3rd tecnique
function loadData() {
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}
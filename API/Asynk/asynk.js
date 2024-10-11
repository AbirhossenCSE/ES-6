const myLoader = () => {
    return new Promise((resolve, reject) => {
        const success = Math.random();
        if (success <= 0.5) {
            resolve(success)
        }
        else{
            reject(success)
        }
    })
}

myLoader()
.then(data => console.log('resolve data', data))
.catch(err => console.log('rejected value', err))


// Fetch

fetch('')
    .then(res => res.json())
    .then(data => console.log())
    .catch(err => console.log(err))


// Fetch Async function
async function loadData() {
    const res = await fetch('');
    const data = await res.json();
    console.log(data);
    
}
loadData();

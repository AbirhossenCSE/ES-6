// const user = {id: 3, name: 'Abir', job: 'Student'};

// const stringified = JSON.stringify(user);
// console.log(stringified);
// console.log(user);


const shop = {
    owner: 'Jack Sparrow',
    address: {
        street: 'Mollapara',
        city: 'Dhaka',
        Country: 'Bangladesh'
    },
    product: ['laptop', 'Mic', 'Monitor', 'Keyboard'],
    ervinue: 45000,
    isOpen: true,
    isNew: false
}

console.log(shop);

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

const shopObj = JSON.parse(shopJSON);
console.log(shopObj);



// data acces
const data = [{ id: 1, name: 'abul', address: 'kocukhet'}];

console.log(data[0].address);


const products = {
    count: 5000,
    data: [
        { id: 1, name: 'lenevo', price: 65000},
        { id: 2, name: 'mackbook', price: 165000}
    ]
}

console.log(products.data[1].price);


const user = {
    id: 5002,
    name: 'soriful raj',
    address: {
        street: {
            first: '54/1 uttar side',
            second: 'poribag er goli',
            third: 'nodorai'
        },
        city: 'dhaka'
    }
}

console.log(user.address.street.second);


const user2 = {
    id: 343,
    name: 'abir',
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}
console.log(user2.address.street?.second);
console.log(user.address.street?.second);
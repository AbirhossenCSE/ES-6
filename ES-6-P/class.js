// const products = [
//     {id: 1, name: 'Lenovo', price: 65000},
//     {id: 2, name: 'dell', price: 60000},
//     {id: 3, name: 'hp', price: 40000},
//     {id: 4, name: 'mac', price: 165000}
// ];

// // Has some properties, Method
// class product{
//     country = 'Bangladesh';

//     constructor(name){
//         this.name = name;
//     }

//     speak(talk){
//         console.log(`taking about ${talk}`);
        
//     }
// }

// const lenevo = new product( 'lele lanovo');
// console.log(lenevo);
// lenevo.speak('This is lenovo')




class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    Lecture(){
        console.log('Sir is teaching Math');
        
    }
}

const tapon = new Teacher('Tapon Sir', 'Physics');
console.log(tapon);
const Ashraful = new Teacher('Ashraful Sir', 'CAO');
console.log(Ashraful);

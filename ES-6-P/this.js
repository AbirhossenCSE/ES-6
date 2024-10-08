class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    Sleep(){
        console.log(`Sleeping now ${this.name}`);
        
    }
    activity(){
        this.Sleep();
    }
}

const kodom = new person('kodom ali', 22);
console.log(kodom);
kodom.Sleep();

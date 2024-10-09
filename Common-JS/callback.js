function greeting(greetingHandler, name){
    greetingHandler(name);
    
}

// const laptop = {peice: 45000, brand: 'lenovo', memory: '8gb'};

function greetingHandler(name){
    console.log('Good Morning', name);
    
}

function goodEvening(name) {
    console.log("good evening", name);
    
}

greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Tom Cruse');
greeting(greetingHandler, 'Tom Holland');
greeting(goodEvening, 'Tom Holland');
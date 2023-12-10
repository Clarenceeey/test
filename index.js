// // oop in js
// let person = {
//     name: "clarence",
//     age: 21
// }

// //dot notation
// person.name = 'mosh'

// //bracket notation
// person['name'] = 'clarence'

// console.log(person);

// let selectedColours = ['red', 'green', 3];
// console.log(selectedColours.findIndex(item => String));



function fibonacci(){
    let n = document.getElementById('nth').value;
    var output = document.getElementById('output');
    let a = 0;
    let b = 1;
    let c;
    if (n == 0){
        output.innerHTML = a;
    }
    else if (n == 1){
        output.innerHTML = b;
    }
    else {
        for (let i = 2; i<=n; i++){
            c = a+b;
            a = b;
            b = c;
        }
        output.innerHTML = c;
    }
    
}

var submit = document.getElementById('button');

submit.addEventListener('click', fibonacci, false);
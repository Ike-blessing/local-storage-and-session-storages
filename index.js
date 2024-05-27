
let btn = document.querySelector('#btn');
let btn2 = document.querySelector('#btn2');
let p = document.querySelector('#paragraph');


btn.addEventListener('click', () => {
   alert('Button clicker');
   localStorage.setItem('foundation', 'hertechtrailers are awesome');
});

btn.addEventListener('click', () => {
   alert('Button clicker');
   val = localStorage.getItem('foundation', 'hertechtrailers are awesome');
   if (val === null){
      alert('not found');
   }else {
      p.innerHTML = val;
   }

});

let input = document.querySelector('#input');
let output = document.querySelector('#output');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let span = document.querySelectorAll('div > .container').forEach(elemnt => {
    elemnt.innerHTML = localStorage.getItem('foundation');
})

// btn3.addEventListener('click', () => {
//     localStorage.setItem('foundation', input);
// });

// btn4.addEventListener('click', () => {
//     val2 = localStorage.getItem('foundation', input);
//     if (output === "null"){
//         alert('not found');
//     }else{
//         output.innerHTML = val2
//     }
// });

function Add(){
    sessionStorage.setItem('academy', input); 
};

function Get(){
    val2 = sessionStorage.getItem('academy', input);
    if (output === "null"){
        alert('not found');
    }else{
        output.innerHTML = val2
    };
};

let div = document.querySelectorAll('div').forEach(elemnt => {
    Element.innerHTML = localStorage.getItem('foundation', input);
})
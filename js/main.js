// sayhi();  this also works
function sayhi(){
    console.log("wsup its biggie cheese");
}
sayhi();



let number = Math.random();
console.log(number);



let mytext = "this is a string";
let newtext = mytext.replace('string', 'S-replaced');
console.log(mytext);
console.log(newtext);



function showName(name = "jake"){
    console.log(`your name is ${name}`);
}
//default parameter
showName();      // jake
//optional parameter
showName("bob"); // bob


const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener('keydown', (event) => output.textContent = `You pressed "${event.key}".`);



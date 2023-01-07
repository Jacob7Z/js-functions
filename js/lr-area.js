function toCelsius(fahrenheit){    // normal function
    return (5/9) * (fahrenheit-32);
}


let multiply =  (a,b) => a * b; // arrow function
console.log(multiply(5,5));

// ^  \/   function expression needs a semicolon

let add = function(x,y){ // anonymous function
    return x + y;
}; // dont forget ;


let greet = function (platform){
    console.log("welcome to " + platform);
}
 
greet("bonk");


setTimeout(function(){          //timeout to do   syntax :   setTimeout(what to do, how long to do);
    console.log("this will be printed after 3 sec");
},3000);


// confirm("is this the confirm message ? "); // yep



(function returnHi(){
    // alert("self invoked");  
})();


function showMessage(from, text = "no text given"){ // default value , it can even be a function
    console.log(from +" "+ text);
}

showMessage("CJ");          //CJ no text given
showMessage("CJ","BIGS");   //CJ BIGS



function ask(question, yes, no){
    // if(confirm(question)) yes()
    // else no();
}

function showOk(){
    alert("you agreed.");
}

function showCancel(){
    alert("you canceled the execution.");
}

ask("Do you agree?",showOk,showCancel);



let double = n => n * 2;

console.log(double(3));     


function addNum(a,b){
    return a+b;
}

function average(a,b){
    return addNum(a,b)/2;
}

console.log(average(5,4));













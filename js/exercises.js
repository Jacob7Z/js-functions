function add7(num){
    return num+7;
}

console.log(add7(7));



function multiply(a,b){
    return a*b;
}

console.log(multiply(4,5));



function capitalize(string){
    
    stringLc = string.toLowerCase(); // makes string lowercase

    return capitalized = stringLc.charAt(0).toUpperCase() + stringLc.slice(1);  // grabes the first letter , makes it uppercase and adds the remaining letters in lower case

}

console.log(capitalize("sTrInG"));



function lastLetter(input){

    return input.slice(-1);  // grabes the last letter of the input  
}

console.log(lastLetter("bonk"));